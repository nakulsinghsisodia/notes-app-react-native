import { useNotes } from '@/context/NotesContext';
import "@/global.css";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
import { styled } from "nativewind";
import { FlatList, Pressable, Text, View } from "react-native";
import { SafeAreaView as RNsafeArea } from "react-native-safe-area-context";

const SafeAreaView = styled(RNsafeArea);

export default function App() {

  const { notes, deleteNote } = useNotes()

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
          <View className="mb-6 mt-2">

            <View className="bg-gray-800 border border-gray-700 rounded-3xl px-5 py-6 flex-row items-center justify-between">

              <View>
                <Text className="text-3xl font-bold text-white tracking-wide">
                  Your Notes
                </Text>

                <Text className="text-gray-400 mt-2 text-base">
                  Capture your thoughts anytime
                </Text>
              </View>

              <View className="bg-violet-600 p-4 rounded-2xl">
                <Ionicons
                  name="document-text"
                  size={28}
                  color="white"
                />
              </View>

            </View>

            {notes.length ? (
              <View className="mt-4 self-start bg-gray-800 border border-gray-700 px-4 py-2 rounded-full">
                <Text className="text-gray-300 font-medium">
                  {notes.length} Notes Available
                </Text>
              </View>
            ) : null}

          </View>
        }


        renderItem={({ item }) => {

          console.log(item)

          return (
            <View className="bg-gray-800 border border-gray-700 mb-4 w-full p-4 rounded-xl flex-row justify-between items-center">

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