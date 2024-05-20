import { Switch } from '@/components/Inputs'
import { ArrowBackIcon } from '@/components/Svgs'
import { pageStyles } from '@/styles/pageStyles'
import { textStyles } from '@/styles/textStyles'
import { router } from 'expo-router'
import { useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

const notification = () => {
  const [notifications, setNotifications] = useState({
    App: true,
    Email: true,
    SMS: false
  })
  return (
    <View style={pageStyles.pageContainer}>
      <View style={pageStyles.header}>
        <Pressable onPress={() => router.back()} style={pageStyles.backIcon}>
          <ArrowBackIcon />
        </Pressable>
        <Text style={textStyles.heading4}>Notifications</Text>

      </View>
      <View style={styles.notifications}>
        <View style={styles.notification}>
          <Text style={textStyles.bodyLarge}>App Notification</Text>
          <Switch isActive={notifications.App} setIsActive={(isActive) => setNotifications({ ...notifications, App: isActive })} />
        </View>
        <View style={styles.notification}>
          <Text style={textStyles.bodyLarge}>Email Notification</Text>
          <Switch isActive={notifications.Email} setIsActive={(isActive) => setNotifications({ ...notifications, Email: isActive })} />
        </View>
        <View style={styles.notification}>
          <Text style={textStyles.bodyLarge}>SMS Notification</Text>
          <Switch isActive={notifications.SMS} setIsActive={(isActive) => setNotifications({ ...notifications, SMS: isActive })} />
        </View>
      </View>
    </View>
  )
}

export default notification

const styles = StyleSheet.create({
  notifications: {
    marginTop: 42,
    gap: 28
  },
  notification: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
})