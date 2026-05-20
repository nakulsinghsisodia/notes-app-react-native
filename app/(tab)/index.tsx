import "@/global.css"
import { Text, View } from "react-native";
import { SafeAreaView as RNsafeArea } from 'react-native-safe-area-context'
import {styled} from "nativewind"
 
const SafeAreaView = styled(RNsafeArea)
export default function App() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-bold text-blue-500">
        Welcome to Nativewind!
      </Text>
    </SafeAreaView>
  );
}