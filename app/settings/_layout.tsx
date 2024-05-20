import { Stack } from "expo-router"
import { SafeAreaView, View } from "react-native"

const SettingsLayout = () => {
  return (
    <SafeAreaView style={{ flex: 1, height: "100%" }}>
      <Stack>
        <Stack.Screen name="help-center" options={{ headerShown: false }} />
        <Stack.Screen name="languages" options={{ headerShown: false }} />
        <Stack.Screen name="notification" options={{ headerShown: false }} />
      </Stack>
    </SafeAreaView>
  )
}

export default SettingsLayout