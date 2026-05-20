import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView as RNsafeArea } from 'react-native-safe-area-context'
import {styled} from "nativewind"


const SafeAreaView = styled(RNsafeArea)
const CreateNotes = () => {
  return (
    <SafeAreaView>
      <Text>CreateNotes</Text>
    </SafeAreaView>
  )
}

export default CreateNotes