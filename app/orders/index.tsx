import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { pageStyles } from '@/styles/pageStyles'
import { ArrowBackIcon } from '@/components/Svgs'
import { router } from 'expo-router'
import { textStyles } from '@/styles/textStyles'
import { Colors } from '@/constants/Colors'

const index = () => {
  return (
    <View style={pageStyles.pageContainer}>
        <View style={pageStyles.header}>
            <Pressable onPress={() => router.back()} style={pageStyles.backIcon}>
                <ArrowBackIcon />
            </Pressable>
            <Text style={textStyles.heading6}>Orders</Text>
        </View>
        <View style={styles.tabContainer}>
            <View style={styles.tab}>
                <Text style={styles.tabText}>Current</Text>
            </View>
            <View style={styles.tab}>
                <Text style={styles.tabText}>History</Text>
            </View>
        </View>
    </View>
  )
}

export default index

const styles = StyleSheet.create({
    tabContainer: {
        backgroundColor: Colors.neutral[900],
        padding: 4,
        borderRadius: 16
    },
    tab: {
        flex: 1,
        borderRadius: 12,
        paddingVertical: 9.5,
        justifyContent: "center",
        alignItems: "center"
    },
    activeTab: {
        backgroundColor: Colors.neutral[50]
    },
    tabText: {
        ...textStyles.bodyMedium,
        fontWeight: "medium",
        color: Colors.neutral[50]
    },
    activeTabText: {
        color: Colors.neutral[900]
    } 
})