import { Image, ImageBackground, TouchableOpacity, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import { PrimaryButton } from '@/components/Inputs'
import { textStyles } from '@/styles/textStyles'
import { ChevronRightIcon } from '@/components/Svgs'
import { router } from 'expo-router'

const Onboarding2 = () => {
    return (
        <ImageBackground 
            style={{ flex: 1, padding: 16}}
            source={require('@/assets/images/onboarding2.jpg')}
        >
            <StatusBar hidden/>
            <Text style={[textStyles.heading3, styles.title]}>Order Your Style</Text>
            <Text style={[textStyles.bodyMedium, styles.tagline]}>More than a thousand of our bags are available for your luxury</Text>
            <TouchableOpacity onPress={() => router.push("sign-in")} style={styles.cta}>
                <Text style={[textStyles.bodyXlarge, {fontWeight: "semibold", color: Colors.neutral[50]}]}>Get Started</Text>
                <View style={styles.iconContainer}>
                    <ChevronRightIcon />
                </View>
            </TouchableOpacity>
        </ImageBackground >
    )
}

export default Onboarding2

const styles = StyleSheet.create({
    title: {
        marginTop: "auto",
        textAlign: "center",
        color: Colors.neutral[50]
    },
    tagline: {
        color: Colors.neutral[50],
        textAlign: "center",
        marginBottom: 16,
        marginTop: 8
    },
    cta: {
        padding: 16,
        flexDirection: "row",
        backgroundColor: Colors.neutral[900],
        borderRadius: 35,
        gap: 10,
        width: "auto",
        flexGrow: 0,
        maxWidth: 182,
        marginHorizontal: "auto",
        alignItems: "center"
    },
    iconContainer: {
        height: 36,
        width: 36,
        backgroundColor: Colors.neutral[50],
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center"
    }
})