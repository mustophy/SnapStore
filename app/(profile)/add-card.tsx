import { InputText, PrimaryButton } from '@/components/Inputs'
import { ArrowBackIcon, CreditCardIcon2, ScanIcon, ThreeDotsIcon } from '@/components/Svgs'
import { Colors } from '@/constants/Colors'
import { pageStyles } from '@/styles/pageStyles'
import { textStyles } from '@/styles/textStyles'
import { useState } from 'react'
import { Image, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native'

const addCard = () => {
    const [inputCard, setInputCard] = useState({
        name: "",
        exp: "",
        number: "",
        cvv: ""
    })
    const updateInput = (e: string, name: string) => {
        setInputCard(prev => ({
            ...prev,
            [name]: e
        }))
    }
    const formatCardNumber = (num: string) => {
        return `${num.slice(0, 4)}   ${num.slice(4, 8)}   ${num.slice(8, 12)}    ${num.slice(12)}`
    }
    return (
        <SafeAreaView style={pageStyles.pageContainer}>
            <View style={pageStyles.header}>
                <Pressable style={pageStyles.backIcon}>
                    <ArrowBackIcon />
                </Pressable>
                <Text style={textStyles.heading4}>Add New Card</Text>
            </View>

            <View style={styles.main}>
                <Text style={[textStyles.bodyXlarge, styles.title]}>Add New Card</Text>
                <ScanIcon />
            </View>
            <View style={styles.cardContainer}>
                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                    <CreditCardIcon2 />
                    <ThreeDotsIcon />
                </View>
                <Text style={[textStyles.bodyXlarge, styles.cardNumber]}>{formatCardNumber(inputCard.number)}</Text>
                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                    <View>
                        <Text style={[textStyles.bodySmall, styles.holder]}>Card Holder</Text>
                        <Text style={[textStyles.bodyLarge, styles.holderName]}>{inputCard.name}</Text>
                    </View>
                    <Image source={require("@/assets/images/mastercard.png")} />
                </View>
            </View>
            <Text style={[textStyles.bodyXlarge, styles.title]}>Enter Your Informations</Text>
            <View style={{ marginTop: 24, gap: 24 }}>
                <InputText
                    onChangeText={(text) => updateInput(text, "number")}
                    dark
                    placeholder='Card Number'
                    maxLength={16}
                />
                <InputText
                    onChangeText={(text) => updateInput(text, "name")}
                    dark
                    placeholder='Card Holder'
                />
                <View style={{ flexDirection: "row", gap: 24 }}>
                    <InputText
                        onChangeText={(text) => updateInput(text, "exp")}
                        placeholder='Exp date'
                        dark
                        style={{ minWidth: 24, flex: 1 }}
                    />
                    <InputText
                        placeholder='CVV'
                        onChangeText={(text) => updateInput(text, "cvv")}
                        dark
                        maxLength={3}
                        style={{ minWidth: 24, flex: 1 }}
                    />
                </View>
            </View>

            <PrimaryButton style={{ marginTop: 24 }}>Save Card</PrimaryButton>
        </SafeAreaView>
    )
}

export default addCard

const styles = StyleSheet.create({
    main: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 24,
        marginBottom: 16
    },
    title: {
        fontWeight: "medium"
    },
    cardContainer: {
        backgroundColor: Colors.neutral[900],
        borderRadius: 16,
        marginBottom: 24,
        paddingHorizontal: 24,
        paddingVertical: 16
    },
    cardNumber: {
        color: Colors.neutral[50],
        fontWeight: "semibold",
        marginTop: 12,
        marginBottom: 20
    },
    holder: {
        color: Colors.neutral[50],
        marginBottom: 6,
    },
    holderName: {
        color: Colors.neutral[50],
        fontWeight: "semibold"
    },
})