import { Stack } from "expo-router"
import { SafeAreaView, View } from "react-native"

const ProfileLayout = () => {
  return (
    <SafeAreaView style={{ flex: 1, height: "100%" }}>
      <Stack>
        <Stack.Screen name="add-card" options={{ headerShown: false }} />
        <Stack.Screen name="payment-method" options={{ headerShown: false }} />
        <Stack.Screen name="account-details" options={{ headerShown: false }} />
      </Stack>
    </SafeAreaView>
  )
}

export default ProfileLayout