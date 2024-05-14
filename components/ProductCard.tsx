import { Colors } from '@/constants/Colors'
import { textStyles } from '@/styles/textStyles'
import { Image, StyleSheet, View, Text } from 'react-native'
import { CartIcon } from './Svgs'

const ProductCard = () => {
    return (
        <View style={{ position: 'relative'}}>
            <View style={style.container}>
                <Image
                    style={style.productImage}
                    source={require("@/assets/images/product1.png")}
                />
                <Text style={[textStyles.bodySmall]}>Bentwood Chair</Text>
                <Text style={[textStyles.bodyMedium]}>$68.00</Text>
                <View style={style.iconContainer}>
                    <CartIcon />
                </View>
            </View>
        </View>
    )
}

export default ProductCard

const style = StyleSheet.create({
    container: {
        backgroundColor: Colors.neutral[50],
        borderRadius: 16,
        paddingVertical: 12,
        paddingHorizontal: 20,
        width: 169,
        overflow: "visible",
        shadowColor: Colors.neutral[300],
        height: 208,
        marginBottom: 40,
        alignItems: "center"
    },
    productImage: {
        maxHeight: 110,
        maxWidth: 110,
    },
    iconContainer: {
        backgroundColor: Colors.neutral[900],
        height: 40,
        width: 40,
        zIndex: 20,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        bottom: -15
    }
})