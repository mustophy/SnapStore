import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { Colors } from "@/constants/Colors"
import { router } from 'expo-router'
import { LogoIcon } from '@/components/Svgs'
import { useEffect } from 'react'

const index = ({ }) => {
    useEffect(() => {
        setTimeout(() => {
            router.replace("/onboarding1")
        }, 2000);
    }, [])
    return (
        <View style={styles.pageContainer}>
            <View style={styles.logoContainer}>
                <LogoIcon />
            </View>
            <Image
                source={require('@/assets/images/logo.png')}
            />
        </View>
    )
}

export default index

const styles = StyleSheet.create({
    pageContainer: { justifyContent: "center", alignItems: "center", flex: 1 },
    logoContainer: {
        marginBottom: 10,
        backgroundColor: Colors.neutral[900],
        height: 90,
        width: 90,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 16
    }
})