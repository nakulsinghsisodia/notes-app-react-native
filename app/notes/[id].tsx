import { View, Text, TextInput, Pressable } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView as RNsafeArea } from 'react-native-safe-area-context'
import { styled } from "nativewind"
import { useNotes } from '@/context/NotesContext'
import { useLocalSearchParams } from 'expo-router/build/hooks'
import { router } from 'expo-router'


const SafeAreaView = styled(RNsafeArea)
const ShowNotes = () => {
  const { id } = useLocalSearchParams()
  const { notes, updateNote } = useNotes()

  const note = notes.find((note) => note.id.toString() === id)

  const [title, setTitle] = useState<string | any>(note?.title)
  const [content, setContent] = useState<string | any>(note?.content)

  const checkEmpty = () => {
    if(!title.trim() || !content.trim()){
      alert("Title or content must not be empty!")
      return true
    }else{
      return false
    }
  }

  return (
    <SafeAreaView edges={['bottom']} className="flex-1 bg-gray-900 p-6 pt-2 gap-4 pb-32">
      <TextInput
        value={title}
        onChangeText={(text) => {
          setTitle(text)
        }}
        placeholder='Enter title...'
        placeholderTextColor="gray"
        className='text-white bg-gray-800 rounded-xl h-15 p-4 text-lg' />

      <TextInput
        value={content}
        onChangeText={(text) => {
          setContent(text)
        }}
        placeholder="Write your notes..."
        placeholderTextColor="gray"
        multiline
        textAlignVertical="top"
        className="h-[80%] bg-gray-800 text-white rounded-xl p-5" />

      <Pressable className="w-full bg-orange-600 py-4 rounded-xl items-center"
        onPress={() => {
          if (checkEmpty()) return
          updateNote(Number(id),title.trim(), content.trim())
          setTitle("")
          setContent("")
          router.push('/')
        }}
      >
        <Text className="text-white text-lg font-bold">
          Update note
        </Text>
      </Pressable>

    </SafeAreaView>
  )
}

export default ShowNotes