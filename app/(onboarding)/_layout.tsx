import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Stack } from 'expo-router'
const _layout = () => {
  return (
    <SafeAreaView style={{ flex: 1, height: "100%" }}>
        <Stack>
            <Stack.Screen name="onboarding1" options={{ headerShown: false }} />
            <Stack.Screen name="onboarding2" options={{ headerShown: false }} />
            <Stack.Screen name="index" options={{ headerShown: false }} />
        </Stack>
    </SafeAreaView>
  )
}

export default _layout

const styles = StyleSheet.create({})