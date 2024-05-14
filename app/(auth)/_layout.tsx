import { Stack } from "expo-router"
import { SafeAreaView, View } from "react-native"

const AuthLayout = () => {
  return (
    <SafeAreaView style={{ flex: 1, height: "100%" }}>
      <Stack>
        <Stack.Screen name="verification" options={{ headerShown: false }} />
        <Stack.Screen name="success" options={{ headerShown: false}} />
        <Stack.Screen name="sign-in" options={{ headerShown: false }} />
        <Stack.Screen name="sign-up" options={{ headerShown: false }} />
        <Stack.Screen name="forgot-password" options={{ headerShown: false}} />
        <Stack.Screen name="new-password" options={{ headerShown: false }} />
      </Stack>
    </SafeAreaView>
  )
}

export default AuthLayout