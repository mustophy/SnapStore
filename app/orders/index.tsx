import { Pressable, StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { pageStyles } from '@/styles/pageStyles'
import { ArrowBackIcon, CheckMarkIcon, ChevronRightIcon, GiftBoxIcon, TruckIconSm } from '@/components/Svgs'
import { router } from 'expo-router'
import { textStyles } from '@/styles/textStyles'
import { Colors } from '@/constants/Colors'

const index = () => {
    const [tab, setTab] = useState("current")
    return (
        <View style={pageStyles.pageContainer}>
            <View style={pageStyles.header}>
                <Pressable onPress={() => router.back()} style={pageStyles.backIcon}>
                    <ArrowBackIcon />
                </Pressable>
                <Text style={textStyles.heading4}>Orders</Text>
            </View>
            <View style={styles.tabContainer}>
                <Pressable onPress={() => setTab("current")} style={[styles.tab, tab === "current" && styles.activeTab]}>
                    <Text style={[styles.tabText, tab === "current" && styles.activeTabText]}>Current</Text>
                </Pressable>
                <Pressable onPress={() => setTab("history")} style={[styles.tab, tab === "history" && styles.activeTab]}>
                    <Text style={[styles.tabText, tab === "history" && styles.activeTabText]}>History</Text>
                </Pressable>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.orderList}>
                    {ordersList.map(({ date, id, price, status }) => {
                        return (
                            <Pressable onPress={() => router.push("orders/single-order")} key={id} style={styles.orderContainer}>
                                <View style={{ flexDirection: "row", alignItems: "center" }}>
                                    <Text style={styles.orderStatus}>{status.name}</Text>
                                    <View style={{ flexDirection: "row", marginLeft: 62, gap: 5 }}>
                                        {status.level >= 1 &&
                                            <View style={{ height: 30, width: 30, borderRadius: 15, alignItems: "center", justifyContent: "center", backgroundColor: Colors.neutral[300] }}>
                                                <CheckMarkIcon color='black' />
                                            </View>
                                        }
                                        {status.level >= 2 &&
                                            <View style={{ height: 30, width: 30, borderRadius: 15, alignItems: "center", justifyContent: "center", backgroundColor: Colors.neutral[300] }}>
                                                <GiftBoxIcon />
                                            </View>
                                        }
                                        {status.level >= 3 &&
                                            <View style={{ height: 30, width: 30, borderRadius: 15, alignItems: "center", justifyContent: "center", backgroundColor: Colors.neutral[300] }}>
                                                <TruckIconSm />
                                            </View>
                                        }
                                    </View>
                                </View>
                                <Text style={styles.orderId}>{id}</Text>
                                <Text style={styles.orderPrice}>${price}</Text>
                                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                                    <Text style={styles.orderDate}>{date}</Text>
                                    <ChevronRightIcon color={Colors.neutral[400]} />
                                </View>
                            </Pressable>
                        )
                    })}
                </View>
            </ScrollView>
        </View>
    )
}

export default index

const styles = StyleSheet.create({
    tabContainer: {
        flexDirection: "row",
        marginTop: 28,
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
    },
    orderList: {
        gap: 24,
        marginTop: 24,
    },
    orderStatus: {
        ...textStyles.bodyMedium,
        borderRadius: 16,
        color: Colors.neutral[100],
        paddingHorizontal: 20,
        paddingVertical: 5,
        backgroundColor: Colors.neutral[700]
    },
    orderContainer: {
        borderWidth: 1,
        borderRadius: 24,
        borderColor: Colors.neutral[300],
        paddingVertical: 26,
        paddingHorizontal: 24
    },
    orderId: {
        ...textStyles.bodySmall,
        color: Colors.neutral[500],
        marginTop: 16,
        marginBottom: 8
    },
    orderPrice: {
        ...textStyles.bodyXlarge,
        fontWeight: 'bold',
        marginBottom: 8
    },
    orderDate: {
        ...textStyles.bodySmall,
        color: Colors.neutral[400]
    }
})

const ordersList = [
    {
        id: "#GC123456",
        status: {
            name: "Confirmed",
            level: 1
        },
        price: 150.78,
        date: "22 Jun 2023 - 04: 30 PM"
    },
    {
        id: "#EC126426",
        status: {
            name: "Preparing",
            level: 2
        },
        price: 600.00,
        date: "21 Jun 2023 - 04: 30 PM"
    },
    {
        id: "#GD123456",
        status: {
            name: "Shipped",
            level: 3
        },
        price: 90.00,
        date: "21 May 2023 - 04: 30 PM"
    },
]