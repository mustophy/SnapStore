import { StyleSheet, ScrollView, Text, View, SafeAreaView, Pressable, Image } from 'react-native'
import React, { useState } from 'react'
import { pageStyles } from '@/styles/pageStyles'
import { ArrowBackIcon } from '@/components/Svgs'
import { router } from 'expo-router'
import { textStyles } from '@/styles/textStyles'
import { PrimaryButton } from '@/components/Inputs'
import { Colors } from '@/constants/Colors'


const singleProduct = () => {
    const [selectedSize, setSelectedSize] = useState(40)
    const [sizeType, setSizeType] = useState("EU")
    return (
        <SafeAreaView style={pageStyles.pageContainer}>
            <View style={pageStyles.header}>
                <Pressable onPress={() => router.back()} style={pageStyles.backIcon}>
                    <ArrowBackIcon />
                </Pressable>
                <Text style={textStyles.heading4}>Product Details</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.imageBx}>
                    <Image
                        source={require("@/assets/images/product-details.png")}
                    />
                </View>
                <Text style={styles.productName}>Sports Tech</Text>
                <Text style={styles.productPrice}>$457.800</Text>
                <Text style={styles.productDescription}>Sports tech. Street smarts. Made in Portugal, Bolster blends luxurious leathers to everyday cool. Be bold. Be you.</Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text style={textStyles.heading7}>Size</Text>
                    <View style={{ marginLeft: "auto", flexDirection: "row", gap: 10 }}>
                        <Pressable onPress={() => setSizeType("EU")}>
                            <Text style={[styles.sizeType, sizeType == "EU" && { color: Colors.neutral[900] }]}>EU</Text>
                        </Pressable>
                        <Pressable onPress={()=> setSizeType("US")}>
                            <Text style={[styles.sizeType, sizeType == "US" && { color: Colors.neutral[900] }]}>US</Text>
                        </Pressable>
                        <Pressable onPress={() => setSizeType("UK")}>
                            <Text style={[styles.sizeType, sizeType == "UK" && { color: Colors.neutral[900] }]}>UK</Text>
                        </Pressable>
                    </View>
                </View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View style={styles.sizesList}>
                        {sizesList.map(size => (
                            <Pressable onPress={() => setSelectedSize(size)} key={size} style={[styles.sizeBx, selectedSize == size && styles.activeSizeBx]}>
                                <Text style={[styles.sizeText, selectedSize == size && styles.activeSizeText]}>{size}</Text>
                            </Pressable>
                        ))}
                    </View>
                </ScrollView>
                <PrimaryButton>Add to Cart</PrimaryButton>
            </ScrollView>
        </SafeAreaView>
    )
}

export default singleProduct

const styles = StyleSheet.create({
    imageBx: {
        marginTop: 10,
        alignItems: "center"
    },
    productName: {
        ...textStyles.heading4
    },
    productPrice: {
        ...textStyles.heading5,
        marginTop: 12
    },
    productDescription: {
        ...textStyles.bodySmall,
        marginTop: 8,
        color: Colors.neutral[500],
        marginBottom: 21,
    },
    sizeType: {
        ...textStyles.bodyMedium,
        fontWeight: "semibold",
        color: Colors.neutral[500],
    },
    sizesList: {
        flexDirection: "row",
        alignItems: "center",
        gap: 13,
        marginBottom: 24,
        marginTop: 16
    },
    sizeBx: {
        height: 45,
        width: 45,
        borderRadius: 22.5,
        backgroundColor: Colors.neutral[200],
        justifyContent: "center",
        alignItems: "center"
    },
    activeSizeBx: {
        backgroundColor: Colors.neutral[700],
        shadowColor: "black",
        shadowOpacity: 0.4,

    },
    sizeText: {
        ...textStyles.bodyLarge,
        color: Colors.neutral[700]
    },
    activeSizeText: {
        color: Colors.neutral[50]
    }
})

const sizesList = [
    38, 39, 40, 41, 42, 43, 44
]