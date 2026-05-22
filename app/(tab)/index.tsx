import { data } from "@/constants/data";
import "@/global.css";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
import { styled } from "nativewind";
import { FlatList, Pressable, Text, View } from "react-native";
import { SafeAreaView as RNsafeArea } from "react-native-safe-area-context";
import { useNotes } from '@/context/NotesContext'

const SafeAreaView = styled(RNsafeArea);

export default function App() {

  const {notes, deleteNote} = useNotes()

  return (
    <SafeAreaView className="flex-1 bg-gray-900">

      <FlatList
        data={notes}

        keyExtractor={(item) => item.id.toString()}

        showsVerticalScrollIndicator={false}

        contentContainerStyle={{
          paddingHorizontal: 14,
          paddingVertical: 12,
          paddingBottom: 100,
        }}

        ListHeaderComponent={
          <View>
            <Text className="text-3xl text-white mt-3 text-center">
              Your Notes
            </Text>

            {data.length ? (
              <Text className="text-md text-white mb-5 mt-1 text-center">
                Total notes: {notes.length}
              </Text>
            ) : null}
          </View>
        }

        
        renderItem={({ item }) => {

          console.log(item)
          
          return (
            <View className="bg-gray-800 border border-gray-600 mb-4 w-full p-4 rounded-xl flex-row justify-between items-center">

              <Pressable
                className="flex-1"
                onPress={() => {
                  router.push({
                    pathname: "/notes/[id]",
                    params: { id: item.id },
                  });
                }}
              >
                <Text className="text-gray-200 text-lg">
                  {item.title}
                </Text>
              </Pressable>

              <Pressable
                onPress={() => {
                  deleteNote(item.id)
                }}
              >
                <View className="px-4 py-3 bg-red-800 rounded-2xl">
                  <Ionicons
                    name="trash"
                    color={"white"}
                    size={16}
                  />
                </View>
              </Pressable>

            </View>
          );
        }}

        ListEmptyComponent={
          <Text className="text-md text-white mt-20 text-center">
            No notes, Create Notes
          </Text>
        }
      />

    </SafeAreaView>
  );
}