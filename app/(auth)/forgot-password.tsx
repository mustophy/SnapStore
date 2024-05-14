import { PrimaryButton } from '@/components/Inputs'
import { ArrowBackIcon, CheckMarkIcon, MailIcon, PhoneIcon } from '@/components/Svgs'
import { Colors } from '@/constants/Colors'
import { textStyles } from '@/styles/textStyles'
import { router } from 'expo-router'
import { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const ForgotPassword = () => {
    const [selectedMethod, setSelectedMethod] = useState("")
    const isEmail = selectedMethod == "email"
    const isPhone = selectedMethod == "phone"
    return (
        <View style={{ flex: 1, padding: 16, backgroundColor: Colors.neutral[50], paddingTop: 50 }}>
            <TouchableOpacity onPress={() => router.back()}>
                <ArrowBackIcon />
            </TouchableOpacity>
            <Text style={[textStyles.heading4, styles.header]}>Forgot Password</Text>
            <Text style={[textStyles.bodyMedium, { color: Colors.neutral[500] }]}>Dont worry! it happens. Please select your email or phone number so we can send you a code.</Text>
            <TouchableOpacity onPress={() => setSelectedMethod("email")} style={[styles.methodContainer, isEmail && styles.activeMethodContainer, { marginVertical: 24 }]}>
                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                    <View style={[styles.iconContainer, isEmail && styles.activeIconContainer]}>
                        <MailIcon />
                    </View>
                    {isEmail &&
                        <View style={[styles.checkContainer]}><CheckMarkIcon /></View>
                    }
                </View>
                <Text style={[textStyles.bodyLarge, styles.methodName]}>Email</Text>
                <Text style={[textStyles.bodySmall, styles.methodTagline]}>Your email: *****dyne@gmail.com</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setSelectedMethod("phone")} style={[styles.methodContainer, isPhone && styles.activeMethodContainer]}>
                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                    <View style={[styles.iconContainer, isPhone && styles.activeIconContainer]}>
                        <PhoneIcon />
                    </View>
                    {isPhone &&
                        <View style={[styles.checkContainer]}><CheckMarkIcon /></View>
                    }
                </View>
                <Text style={[textStyles.bodyLarge, styles.methodName]}>Phone Number</Text>
                <Text style={[textStyles.bodySmall, styles.methodTagline]}>Your phone: *****87365</Text>
            </TouchableOpacity>
            <PrimaryButton onPress={() => router.push("new-password")} style={{ marginTop: "auto" }}>Next</PrimaryButton>
        </View>
    )
}

export default ForgotPassword

const styles = StyleSheet.create({
    header: {
        marginTop: 40,
        marginBottom: 8,
        fontWeight: "bold"
    },
    activeContainer: {
        backgroundColor: Colors.neutral[200],
        borderWidth: 1,
        borderColor: Colors.neutral[900]
    },
    methodContainer: {
        borderRadius: 20,
        padding: 20,
        borderWidth: 1,
        borderColor: Colors.neutral[400],
        backgroundColor: Colors.neutral[50]
    },
    activeMethodContainer: {
        borderColor: Colors.neutral[900],
        backgroundColor: Colors.neutral[200]
    },
    methodName: {
        fontWeight: "bold",
        color: Colors.neutral[900]
    },
    methodTagline: {
        fontWeight: "regular",
        color: Colors.neutral[900]
    },
    iconContainer: {
        height: 40,
        width: 40,
        borderRadius: 20,
        backgroundColor: Colors.neutral[300],
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 16
    },
    activeIconContainer: {
        backgroundColor: Colors.neutral[900]
    },
    checkContainer: {
        height: 20,
        width: 20,
        borderRadius: 10,
        backgroundColor: Colors.neutral[900],
        alignItems: "center",
        justifyContent: "center"
    }
})