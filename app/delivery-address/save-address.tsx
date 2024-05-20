import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import { InputText, PrimaryButton } from '@/components/Inputs'
import { textStyles } from '@/styles/textStyles'

const saveAddress = () => {
    return (
        <View style={styles.container}>
            <Text style={[textStyles.bodyLarge, {fontWeight: "semibold"}]}>Location Details</Text>
            <View style={{ marginVertical: 42, gap: 16 }}>
                <InputText placeholder='Address' />
                <InputText placeholder='Landmark' />
            </View>
            <PrimaryButton>Save Address</PrimaryButton>
        </View>
    )
}

export default saveAddress

const styles = StyleSheet.create({
    container: {
        flex: 0.4, marginTop: "auto",
        backgroundColor: Colors.neutral[50],
        borderTopRightRadius: 32,
        borderTopLeftRadius: 32,
        paddingHorizontal: 16,
        paddingTop: 37,
        paddingBottom: 24
    }
})