import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import { ArrowBackIcon } from '@/components/Svgs'
import { router } from 'expo-router'
import { textStyles } from '@/styles/textStyles'
import { InputText, PrimaryButton } from '@/components/Inputs'

const NewPassword = () => {

    return (
        <View style={[styles.pageContainer]}>
            <TouchableOpacity onPress={() => router.back()}>
                <ArrowBackIcon />
            </TouchableOpacity>
            <Text style={[textStyles.heading4, styles.header]}>New Password</Text>
            <Text style={[textStyles.bodyMedium, styles.tagline]}>Your password must different from previous password.</Text>
            <InputText style={{ marginTop: 24, marginBottom: 20 }} placeholder='New password' />
            <Text style={[textStyles.bodySmall, styles.tagline]}>Your password needs to be at least 8 characters long. Includes some words and phrases to make it even safer</Text>
            <InputText style={{ marginTop: 24}} placeholder='Confirm New password' />
            <PrimaryButton onPress={() => router.push("success")} style={{ marginTop: "auto"}}>Continue</PrimaryButton>
        </View>
    )
}

export default NewPassword

const styles = StyleSheet.create({
    pageContainer: {
        padding: 16,
        flex: 1,
        backgroundColor: Colors.neutral[50],
        paddingTop: 50
    },
    header: {
        marginTop: 40,
        color: Colors.neutral[900],
        marginBottom: 8
    },
    tagline: {
        color: Colors.neutral[500]
    }
})