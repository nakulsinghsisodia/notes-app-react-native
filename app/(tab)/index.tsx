import "@/global.css"
import { FlatList, Text, View,Pressable } from "react-native";
import { SafeAreaView as RNsafeArea } from 'react-native-safe-area-context'
import {styled} from "nativewind"

const data:any = [
  {title:'movies watch list',content: "hp, got,etc"},
  {title:'fav chocolate',content: "kitkat"},
  {title:'fav chocolate',content: "kitkat"},
  {title:'fav chocolate',content: "kitkat"},
  {title:'fav chocolate',content: "kitkat"},
  {title:'fav chocolate',content: "kitkat"},
  {title:'fav chocolate',content: "kitkat"},
  {title:'fav chocolate',content: "kitkat"},
  {title:'fav chocolate',content: "kitkat"},
  {title:'fav chocolate',content: "kitkat"},
  {title:'fav chocolate',content: "kitkat"},
  {title:'fav chocolate',content: "kitkat"},
  {title:'fav chocolate',content: "kitkat"},
  {title:'fav chocolate',content: "kitkat"},
  {title:'anime',content: "classroom of elite"}
]
 
const SafeAreaView = styled(RNsafeArea)
export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-gray-900">
      <FlatList data={data}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 14,
        paddingVertical:12,
        paddingBottom: 100
      }}
      ListHeaderComponent={
        <View>
          <Text className="text-3xl text-white mt-3 text-center">Your Notes</Text>
          {data.length?<Text className="text-md text-white mb-5 mt-1 text-center">Total notes: {data.length}</Text>:""}
          
        </View>
      }
        renderItem={(item)=>{
          return(
            <View className="bg-gray-800 border border-gray-600 mb-4 w-full p-4 rounded-xl flex flex-row justify-between items-center">
              <Text className="text-gray-200 text-lg">{item.item.title}</Text>
              <Pressable onPress={()=>{}}>
                <Text className="text-white px-4 py-3 bg-red-800 rounded-2xl">Remove</Text>
              </Pressable>
            </View>
          )
        }}
      ListEmptyComponent={
        <Text className="text-md text-white mt-20 text-center" >No notes, Create Notes</Text>
      }
      />
    </SafeAreaView>
  );
}