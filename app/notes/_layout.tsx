import { Stack } from "expo-router";

export default function NotesLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#111827"
        },
        headerTitle: "Back to notes",

        headerTintColor: "white",

        headerShadowVisible: false,
      }}
    />
  );
}