import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const onboardingLayout = () => {
  return (
    <Stack
        screenOptions={{
            headerShown: false
        }}
        initialRouteName='onboarding1'
    >
        <Stack.Screen name='onboarding1' />
        <Stack.Screen name='onboarding2' />
    </Stack>
  )
}

export default onboardingLayout

const styles = StyleSheet.create({})