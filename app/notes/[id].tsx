import { View, Text, TextInput, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView as RNsafeArea } from 'react-native-safe-area-context'
import {styled} from "nativewind"


const SafeAreaView = styled(RNsafeArea)
const ShowNotes = () => {
  return (
    <SafeAreaView edges={['bottom']} className="flex-1 bg-gray-900 p-6 pt-2 gap-4 pb-32">
      <TextInput  
        placeholder='Enter title...' 
        placeholderTextColor="gray"
        className='text-white bg-gray-800 rounded-xl h-15 p-4 text-lg'/>
      
      <TextInput
        placeholder="Write your notes..."
        placeholderTextColor="gray"
        multiline
        textAlignVertical="top"
        className="h-[80%] bg-gray-800 text-white rounded-xl p-5" />

      <Pressable className="w-full bg-blue-700 py-4 rounded-xl items-center">
        <Text className="text-white text-lg font-bold">
          Save Note
        </Text>
      </Pressable>

    </SafeAreaView>
  )
}

export default ShowNotes