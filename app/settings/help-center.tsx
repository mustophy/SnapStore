import { Pressable, StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { pageStyles } from '@/styles/pageStyles'
import { ArrowBackIcon } from '@/components/Svgs'
import { textStyles } from '@/styles/textStyles'
import { Colors } from '@/constants/Colors'

const helpCenter = () => {
    const [activeTab, setActiveTab] = useState(tabList[0])
    return (
        <View style={pageStyles.pageContainer}>
            <View style={pageStyles.header}>
                <Pressable style={pageStyles.backIcon}>
                    <ArrowBackIcon />
                </Pressable>
                <Text style={textStyles.heading6}>Help Center</Text>
            </View>
            <View style={{ marginTop: 32 }}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View style={{ flexDirection: "row", gap: 12}}>
                        {tabList.map(tab => (
                            <Pressable onPress={() => setActiveTab(tab)} style={[styles.tab, activeTab == tab && styles.activeTab]}>
                                <Text style={[styles.tabText, activeTab == tab && styles.activeTabText]}>{tab}</Text>
                            </Pressable>
                        ))}
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

export default helpCenter

const styles = StyleSheet.create({
    tab: {
        paddingHorizontal: 20,
        paddingVertical: 8,
        borderRadius: 100,
        borderWidth: 1.5,
        borderColor: Colors.neutral[300]
    },
    activeTab: {
        backgroundColor: Colors.neutral[900],
        borderColor: Colors.neutral[900]
    },
    tabText: {
        ...textStyles.bodyMedium,
        fontWeight: "semibold",
        color: Colors.neutral[400]
    },
    activeTabText: {
        color: Colors.neutral[50]
    }
})

const tabList = [
    "General", "Account", "Service", "Payment"
]