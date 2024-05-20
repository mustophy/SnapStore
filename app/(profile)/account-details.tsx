import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { pageStyles } from '@/styles/pageStyles'
import { ArrowBackIcon } from '@/components/Svgs'
import { textStyles } from '@/styles/textStyles'
import { InputText, PrimaryButton } from '@/components/Inputs'
import { router } from 'expo-router'

const accountDetails = () => {
  return (
    <View style={pageStyles.pageContainer}>
        <View style={pageStyles.header}>
            <Pressable onPress={() => router.back()} style={pageStyles.backIcon}>
                <ArrowBackIcon />
            </Pressable>
            <Text style={textStyles.heading4}>Account Details</Text>
        </View>
        <View style={styles.inputs}>
            <InputText placeholder='Username' />
            <InputText placeholder='Mobile Number' />
            <InputText placeholder='Email' />
            <InputText placeholder='Password' />
        </View>

        <PrimaryButton style={styles.button}>Edit</PrimaryButton>
    </View>
  )
}

export default accountDetails

const styles = StyleSheet.create({
    inputs: {
        gap: 15,
        marginTop: 48
    },
    button: {
        marginTop: 48
    }
})