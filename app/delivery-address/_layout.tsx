import { Stack } from "expo-router"
import { SafeAreaView, View } from "react-native"

const ProfileLayout = () => {
  return (
    <SafeAreaView style={{ flex: 1, height: "100%" }}>
      <Stack initialRouteName="add-new">
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="add-new" options={{ headerShown: false }} />
        <Stack.Screen name="save-address" options={{ headerShown: false, presentation: "containedTransparentModal" }} />
      </Stack>
    </SafeAreaView>
  )
}

export default ProfileLayout