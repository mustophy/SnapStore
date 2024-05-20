import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { pageStyles } from '@/styles/pageStyles'
import { ArrowBackIcon, CheckMarkIcon, ThreeDotsIcon } from '@/components/Svgs'
import { router } from 'expo-router'
import { textStyles } from '@/styles/textStyles'
import { Colors } from '@/constants/Colors'
import { PrimaryButton } from '@/components/Inputs'
import { Path, Svg } from 'react-native-svg'

const index = () => {
    const [selectedAddress, setSelectedAddress] = useState(addressList[0])
    return (
        <View style={pageStyles.pageContainer}>
            <View style={pageStyles.header}>
                <Pressable onPress={() => router.back()} style={pageStyles.backIcon}>
                    <ArrowBackIcon />
                </Pressable>
                <Text style={textStyles.heading4}>Delivery Address</Text>
            </View>
            <View style={{ gap: 24, marginTop: 45, marginBottom: 40 }}>
                {addressList.map((location) => {
                    const { address, name, street } = location
                    const isActive = selectedAddress?.name === name
                    return (
                        <Pressable key={name} onPress={() => setSelectedAddress(location)} style={styles.addressContainer}>
                            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                <Text style={[textStyles.bodySmall, styles.name, isActive && styles.activeName]}>{name}</Text>
                                {isActive &&
                                    <Pressable style={[styles.checkContainer, isActive && styles.activeCheck]}>
                                        <CheckMarkIcon color='black' />
                                    </Pressable >
                                }
                            </View>
                            <Text style={[textStyles.bodyMedium, styles.street, isActive && styles.activeStreet]}>{street}</Text>
                            <Text style={[textStyles.bodySmall, styles.fullAddress]}>{address}</Text>
                            <View style={{ flexDirection: "row", gap: 12 }}>
                                <Pressable style={styles.buttonContainer}>
                                    <Text style={[textStyles.bodySmall, styles.buttonText]}>Edit Address</Text>
                                </Pressable>
                                <Pressable style={styles.dotsContainer}>
                                    <Svg width="16" height="4" viewBox="0 0 16 4" fill="none" >
                                        <Path d="M2.16667 0.333008C1.25 0.333008 0.5 1.08301 0.5 1.99967C0.5 2.91634 1.25 3.66634 2.16667 3.66634C3.08333 3.66634 3.83333 2.91634 3.83333 1.99967C3.83333 1.08301 3.08333 0.333008 2.16667 0.333008ZM13.8333 0.333008C12.9167 0.333008 12.1667 1.08301 12.1667 1.99967C12.1667 2.91634 12.9167 3.66634 13.8333 3.66634C14.75 3.66634 15.5 2.91634 15.5 1.99967C15.5 1.08301 14.75 0.333008 13.8333 0.333008ZM8 0.333008C7.08333 0.333008 6.33333 1.08301 6.33333 1.99967C6.33333 2.91634 7.08333 3.66634 8 3.66634C8.91667 3.66634 9.66667 2.91634 9.66667 1.99967C9.66667 1.08301 8.91667 0.333008 8 0.333008Z" fill="white" />
                                    </Svg>
                                </Pressable>
                            </View>
                        </Pressable>
                    )
                })}
            </View>
            <PrimaryButton onPress={() => router.push("/delivery-address/add-new")}>Add New Address</PrimaryButton>
        </View>
    )
}

export default index

const styles = StyleSheet.create({
    addressContainer: {
        backgroundColor: Colors.neutral[900],
        paddingVertical: 24,
        paddingHorizontal: 20,
        borderRadius: 20
    },
    activeCheck: {
        borderColor: Colors.neutral[50],
        backgroundColor: Colors.neutral[50]
    },
    activeStreet: {
        color: Colors.neutral[50]
    },
    activeName: {
        color: Colors.neutral[50]
    },
    checkContainer: {
        height: 20,
        width: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: Colors.neutral[500],
        alignItems: "center",
        justifyContent: "center"
    },
    activeCheckContainer: {
        backgroundColor: Colors.neutral[50],
        borderColor: Colors.neutral[50]
    },
    name: {
        color: Colors.neutral[500],
        fontWeight: "semibold",
        marginBottom: 6,
        textTransform: "uppercase"
    },
    street: {
        color: Colors.neutral[500],
        fontWeight: "semibold",
    },
    fullAddress: {
        color: Colors.neutral[500],
        marginTop: 5,
        marginBottom: 14
    },
    buttonContainer: {
        backgroundColor: "transparent",
        borderRadius: 16,
        borderWidth: 1,
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 15,
        borderColor: Colors.neutral[50]
    },
    buttonText: {
        color: Colors.neutral[50]
    },
    dotsContainer: {
        width: 50,
        height: 50,
        borderRadius: 16,
        justifyContent: "center",
        borderWidth: 1,
        borderColor: Colors.neutral[400],
        alignItems: "center"
    }
})

const addressList = [
    {
        name: "Home",
        address: "Fort Benning ,Georgia, United States 865-512-8826",
        street: "2280 Wiseman Street",
    },
    {
        name: "Work",
        address: "Southfield, Michigan, United States 734-593-5421",
        street: "2687 Daylene Drive",
    },
]
