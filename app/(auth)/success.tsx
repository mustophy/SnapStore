import { PrimaryButton } from '@/components/Inputs'
import { ArrowBackIcon } from '@/components/Svgs'
import { Colors } from '@/constants/Colors'
import { router } from 'expo-router'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
const success = () => {
    return (
        <View style={{ flex: 1, backgroundColor: Colors.neutral[50], paddingHorizontal: 16, paddingTop: 50, paddingBottom: 48 }}>
            <TouchableOpacity onPress={() => router.back()}>
                <ArrowBackIcon />
            </TouchableOpacity>
            <View style={{ alignItems: "center", marginTop: "auto", marginBottom: 120 }}>
                <Image source={require("@/assets/images/success.png")} />
                <Text style={styles.header}>Success</Text>
                <Text style={styles.tagline}>You have successfully registered in our app and can start working in it</Text>
            </View>
            <PrimaryButton onPress={() => router.push("(auth)/sign-in")} style={{ width: "100%" }}>Continue</PrimaryButton>
        </View>
    )
}

export default success

const styles = StyleSheet.create({
    header: {
        color: Colors.neutral[900],
        fontWeight: "bold",
        fontSize: 28,
        lineHeight: 34,
        marginTop: 35,
        marginBottom: 8,
    },
    tagline: {
        color: Colors.neutral[900],
        fontSize: 14,
        lineHeight: 20,
        width: "85%",
        fontWeight: "medium",
        textAlign: "center"
    }
})