import { createContext, ReactNode, useContext, useState } from "react";

type Note = {
    id: number,
    title: string,
    content: string
}

type NoteContextType = {
    notes: Note[],

    addNote : (
        title: string,
        content: string
    ) => void,

    updateNote: (
        id: number,
        title: string,
        content: string
    ) => void,

    deleteNote : (
        id: number
    ) => void
}

const NotesContext = createContext<NoteContextType | null>(null)

export const NotesProvider = ({children} : {children: ReactNode}) =>{

    const  [notes, setNotes] = useState<Note[]>([])

    const addNote = (title:string, content: string) => {
        const newNote = {
            id: Date.now(),
            title,
            content
        }

        setNotes((prev)=>[...prev,newNote])
    }

    const updateNote = (id: number, title: string, content: string) => {
        setNotes((prev) => prev.map((note) =>
            note.id === id ? {
                ...note,
                title,
                content
            } : note
        ))
    }

    const deleteNote = (id:number) =>{
        setNotes((prev)=> prev.filter(
            (note) => note.id !== id 
        ) )
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