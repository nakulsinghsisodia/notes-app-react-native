import { createContext, ReactNode, useContext, useState, useEffect } from "react";
import * as SQLite from 'expo-sqlite'

type sqlDs = SQLite.SQLiteDatabase | null;

let db: sqlDs = null

async function openDB(): Promise<sqlDs> {
    try{
        db = await SQLite.openDatabaseAsync('notesDb')

        await db.execAsync(`
            PRAGMA journal_mode = WAL;
            CREATE TABLE IF NOT EXISTS notes(id INTEGER PRIMARY KEY, title TEXT NOT NULL, content TEXT NOT NULL);    
        `)
        console.log("db opened");
        return db

    }catch(e){
        console.log("error while opening db",e);
        return null
    }
}




type Note = {
    id: number,
    title: string,
    content: string
}

type NotesContextType = {
    notes: Note[],

    addNote : (
        title: string,
        content: string
    ) => Promise<void>,

    updateNote: (
        id: number,
        title: string,
        content: string
    ) => Promise<void>,

    deleteNote : (
        id: number
    ) => Promise<void>
}

const NotesContext = createContext<NotesContextType | null>(null)

export const NotesProvider = ({children} : {children: ReactNode}) =>{

    const  [notes, setNotes] = useState<Note[]>([])

    useEffect(()=>{
        init()
    },[])

    async function init(){
        await openDB()
        await loadNotes()
    }

    async function loadNotes(){
        try{
            if(db==null)return 

            const result = await db.getAllAsync<Note>('SELECT * FROM notes ORDER BY id DESC')

            setNotes(result)
        }catch(e){
            console.log('error while loading data',e);
            
        }
    }

    const  addNote = async(title:string, content: string) => {

        try{
            if (db==null) return
            
            const id:number = Date.now()

            await db.runAsync('INSERT INTO notes(id,title,content) VALUES (?,?,?)',[id,title,content])
            await loadNotes()

        }catch(e){
            console.log('error adding notes',e);    
        }
    }

    const updateNote = async(id: number, title: string, content: string) => {
        
        try{
            if(db==null)return

            await db.runAsync('UPDATE notes SET title=?, content=? WHERE id=?',[title,content,id])
            await loadNotes()
        }catch(e){
            console.log('error updating notes',e);    
        }
    }

    const deleteNote = async(id:number) =>{
        try{
            if(db==null)return

            await db.runAsync('DELETE FROM notes WHERE id=?',[id])
            await loadNotes()
        }catch(e){
            console.log('error deleting notes',e);    
        }
    }

    return (
        <NotesContext.Provider value={{notes, addNote, updateNote, deleteNote}}>
            {children}
        </NotesContext.Provider>
    )

}

export const useNotes = () => {

    const context = useContext(NotesContext)

    if(!context){
        throw new Error("useNotes must be inside NotesProvider")
    }

    return context

}