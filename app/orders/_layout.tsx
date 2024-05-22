import { Stack } from "expo-router"
import { SafeAreaView, View } from "react-native"

const AuthLayout = () => {
  return (
    <SafeAreaView style={{ flex: 1, height: "100%" }}>
      <Stack
        initialRouteName="index"
      >
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="single-order" options={{ headerShown: false }} />
      </Stack>
    </SafeAreaView>
  )
}

export default AuthLayout