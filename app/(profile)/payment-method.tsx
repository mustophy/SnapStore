import { Image, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { pageStyles } from '@/styles/pageStyles'
import { ArrowBackIcon, CheckMarkIcon, ChevronRightIcon, CreditCardIcon2, ThreeDotsIcon } from '@/components/Svgs'
import { textStyles } from '@/styles/textStyles'
import { Colors } from '@/constants/Colors'
import { router } from 'expo-router'

const paymentMethod = () => {
    const [selectedCard, setSelectedCard] = useState(cardList[0])
    const formatCardNumber = (num: string) => {
        return `${num.slice(0,4)}   ${num.slice(4,8)}   ${num.slice(8,12)}    ${num.slice(12)}`
    }
    return (
        <SafeAreaView style={pageStyles.pageContainer}>
            <View style={pageStyles.header}>
                <Pressable style={pageStyles.backIcon}>
                    <ArrowBackIcon />
                </Pressable>
                <Text style={textStyles.heading4}>Payment Method</Text>
            </View>
            <Text style={[textStyles.bodyLarge, styles.myCard]}>My Cards</Text>
            <View style={styles.cardContainer}>
                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                    <CreditCardIcon2 />
                    <ThreeDotsIcon />
                </View>
                <Text style={[textStyles.bodyXlarge, styles.cardNumber]}>{formatCardNumber(selectedCard.number)}</Text>
                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                    <View>
                        <Text style={[textStyles.bodySmall, styles.holder]}>Card Holder</Text>
                        <Text style={[textStyles.bodyLarge, styles.holderName]}>{selectedCard.name}</Text>
                    </View>
                    <Image source={require("@/assets/images/mastercard.png")} />
                </View>
            </View>

            <View style={styles.cardList}>
                {cardList.map((card) => {
                    const { exp, name, number, type} = card
                    const isSelected = selectedCard?.name === name
                    return (
                        <Pressable key={name} onPress={() => setSelectedCard(card)} style={styles.cardRow}>
                            <Image source={require("@/assets/images/mastercard.png")} style={styles.cardRowLogo} />
                            <View style={{ marginLeft: 14, marginRight: "auto" }}>
                                <Text style={[textStyles.bodyMedium, styles.cardRowTitle]}>{type} - {number.slice(-4)}</Text>
                                <Text style={[textStyles.bodySmall, styles.cardRowTagline]}>{exp}</Text>
                            </View>
                            <View style={[styles.cardChecked, isSelected && styles.cardSelected]}>
                                {isSelected && <CheckMarkIcon color='black' />}
                            </View>
                        </Pressable>
                    )
                })}
                <View style={styles.addCard}>
                    <CreditCardIcon2 />
                    <View style={{ marginLeft: 15, marginRight: "auto", }}>
                        <Text style={[styles.cardRowTitle]}>Add Credit Card</Text>
                        <Text style={[styles.cardRowTagline]}>Add new credit or debit card</Text>
                    </View>
                    <Pressable onPress={() => router.push("add-card")}>
                        <ChevronRightIcon color='white' />
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default paymentMethod

const styles = StyleSheet.create({
    myCard: {
        marginTop: 24,
        marginBottom: 25,
        color: Colors.neutral[900],
        fontWeight: "medium",
    },
    cardContainer: {
        backgroundColor: Colors.neutral[900],
        borderRadius: 16,
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
    cardChecked: {
        height: 18,
        width: 18,
        borderRadius: 9,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderColor: Colors.neutral[50]
    },
    cardSelected: {
        backgroundColor: Colors.neutral[50]
    },
    cardList: {
        backgroundColor: Colors.neutral[900],
        marginTop: 48,
        borderRadius: 16,
    },
    cardRow: {
        paddingHorizontal: 25,
        flexDirection: "row",
        alignItems: "center",
        paddingTop: 14,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#232323"
    },
    cardRowLogo: {
        maxWidth: 26,
        maxHeight: 16
    },
    cardRowTitle: {
        color: Colors.neutral[50],
        marginBottom: 3
    },
    cardRowTagline: {
        color: Colors.neutral[500]
    },
    addCard: {
        paddingHorizontal: 25,
        paddingTop: 14,
        paddingBottom: 10,
        flexDirection: "row",
        alignItems: "center",
    }
})

const cardList = [
    {
        name: "Pseudo Dev",
        type: "Master Card",
        number: "5393563467861370",
        exp: "01/25"
    },
    {
        name: "Ahmad Muhammad",
        type: "Master Card",
        number: "5698562467867273",
        exp: "01/25"
    },
    {
        name: "Amr Yaasir",
        type: "Master Card",
        number: "5698522447861989",
        exp: "01/25"
    },
]