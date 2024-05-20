import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { pageStyles } from '@/styles/pageStyles'
import { ArrowBackIcon, BoxIcon, CheckMarkIcon, DashLines, OpenBoxIcon, ReceivedIcon, TruckIcon } from '@/components/Svgs'
import { textStyles } from '@/styles/textStyles'
import { Colors } from '@/constants/Colors'
import { PrimaryButton } from '@/components/Inputs'

const singleOrder = () => {
    return (
        <View style={pageStyles.pageContainer}>
            <View style={pageStyles.header}>
                <Pressable style={pageStyles.backIcon}>
                    <ArrowBackIcon />
                </Pressable>
                <Text style={textStyles.heading4}>Orders</Text>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 32 }}>
                <View style={{ gap: 10, alignItems: "center" }}>
                    <BoxIcon />
                    <View style={{ height: 18, width: 18, borderRadius: 9, backgroundColor: Colors.neutral[500], justifyContent: "center", alignItems: "center" }}>
                        <CheckMarkIcon />
                    </View>
                </View>
                <DashLines />
                <View style={{ gap: 10, alignItems: "center" }}>
                    <TruckIcon />
                    <View style={{ height: 18, width: 18, borderRadius: 9, backgroundColor: Colors.neutral[500], justifyContent: "center", alignItems: "center" }}>
                        <CheckMarkIcon />
                    </View>
                </View>
                <DashLines />
                <View style={{ gap: 10, alignItems: "center" }}>
                    <ReceivedIcon />
                    <View style={{ height: 18, width: 18, borderRadius: 9, backgroundColor: Colors.neutral[500], justifyContent: "center", alignItems: "center" }}>
                        <CheckMarkIcon />
                    </View>
                </View>
                <DashLines />
                <View style={{ gap: 10, alignItems: "center" }}>
                    <OpenBoxIcon />
                    <View style={{ height: 18, width: 18, borderRadius: 9, backgroundColor: Colors.neutral[500], justifyContent: "center", alignItems: "center" }}>
                        <CheckMarkIcon />
                    </View>
                </View>
            </View>
            <View style={styles.details}>
                <Text>#Order ID GC20198WE</Text>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <Text style={[styles.texts]}>Delivery Date</Text>
                    <Text style={[styles.texts]}>20 March</Text>
                </View>
                <View>
                    <Text>Delivery Location</Text>
                    <View style={{ flexDirection: "row", gap: 14, marginTop: 15 }}>
                        <Image
                            source={require('@/assets/images/delivery.png')}
                        />
                        <View>
                            <Text style={[styles.texts]}>Moon Road, West Subidbazar</Text>
                            <Text style={[styles.texts]}>Sylhet-3100</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={{ flexDirection: "row", marginTop: 33, gap: 15}}>
                <View style={{ height: 98, width: 98, backgroundColor: Colors.neutral[200], borderRadius: 16, overflow: 'hidden' }}>
                    <Image
                        style={{ height: '100%', width: "100%" }}
                        source={require('@/assets/images/jacket.png')}
                    />
                </View>
                <View>
                    <Text style={[textStyles.bodyLarge]}>Jeka Jacket</Text>
                    <Text style={[textStyles.bodySmall, { marginTop: 9, marginBottom: 13}]}>Size: S, Color: Green</Text>
                    <Text style={[textStyles.bodyLarge, { fontWeight: "bold"}]}>$12</Text>
                </View>
            </View>
            <View style={{ marginVertical: 24, gap: 18 }}>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <Text style={[styles.label]}>Subtotal</Text>
                    <Text style={[styles.value]}>$1250.00</Text>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <Text style={[styles.label]}>Shopping</Text>
                    <Text style={[styles.value]}>$50.00</Text>
                </View>
            </View>
            <View style={{ flexDirection: "row", marginBottom: 48, justifyContent: "space-between", paddingTop: 16, borderTopWidth: 2, borderStyle: "dashed", borderColor: Colors.neutral[300], }}>
                <Text style={[styles.label]}>Total</Text>
                <Text style={[styles.value]}>$1300.00</Text>
            </View>
            <PrimaryButton>Track Order</PrimaryButton>
        </View>
    )
}

export default singleOrder

const styles = StyleSheet.create({
    details: {
        marginTop: 24,
        borderRadius: 12,
        borderWidth: 1,
        gap: 20,
        borderColor: Colors.neutral[300],
        paddingVertical: 14,
        paddingHorizontal: 16
    },
    texts: {
        ...textStyles.bodyMedium,
        fontWeight: "semibold"
    },
    label: {
        ...textStyles.bodyLarge,
        color: Colors.neutral[500],
        fontWeight: "medium"
    },
    value: {
        ...textStyles.bodyLarge,
        color: Colors.neutral[900],
        fontWeight: "medium"
    },
})