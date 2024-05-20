import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { pageStyles } from '@/styles/pageStyles'
import { textStyles } from '@/styles/textStyles'
import { InputText } from '@/components/Inputs'
import { Colors } from '@/constants/Colors'
import { Path, Svg } from 'react-native-svg'

const wishlist = () => {
    return (
        <View style={pageStyles.pageContainer}>
            <View style={{ justifyContent: "space-between", alignItems: "center", flexDirection: "row" }}>
                <Text style={textStyles.heading4}>Wishlist</Text>
            </View>
            <View>
                <InputText placeholder='Search' />
            </View>
            <View style={{ gap: 16 }}>
                <View style={styles.wishRow}>
                    <View>

                    </View>
                    <View style={{ gap: 4 }}>
                        <Text>Running Shoes</Text>
                        <View style={{ flexDirection: "row", gap: 5 }}>
                            <Text>4.5</Text>
                            <Text>(1045 Reviews)</Text>
                        </View>
                    </View>
                    <Svg width="20" height="18" viewBox="0 0 20 18" fill="none">
                        <Path d="M10.62 17.8096C10.28 17.9296 9.72 17.9296 9.38 17.8096C6.48 16.8196 0 12.6896 0 5.68961C0 2.59961 2.49 0.0996094 5.56 0.0996094C7.38 0.0996094 8.99 0.97961 10 2.33961C11.01 0.97961 12.63 0.0996094 14.44 0.0996094C17.51 0.0996094 20 2.59961 20 5.68961C20 12.6896 13.52 16.8196 10.62 17.8096Z" fill="black" />
                    </Svg>
                </View>
            </View>
        </View>
    )
}

export default wishlist

const styles = StyleSheet.create({
    wishRow: {
        flexDirection: 'row',
        gap: 18
    },
    logoBox: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: Colors.neutral[50],
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        top: -14,
        right: -10
    },
    imgBox: {
        position: "relative"
    },
    review: {
        color: Colors.neutral[400]
    }
})