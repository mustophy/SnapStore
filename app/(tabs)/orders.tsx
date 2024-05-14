import { PrimaryButton } from "@/components/Inputs"
import { ArrowBackIcon, CloseIcon, MinusIcon, PlusIcon } from "@/components/Svgs"
import { Colors } from "@/constants/Colors"
import { textStyles } from "@/styles/textStyles"
import { useState } from "react"
import { SafeAreaView, View, ScrollView, Text, StyleSheet, TouchableOpacity, Image } from "react-native"

const Orders = () => {
  const [totalPrice, setTotalPrice] = useState(0)
  return (
    <SafeAreaView style={{ flex: 1, padding: 16, marginTop: 24 }}>
      <View style={style.header}>
        <ArrowBackIcon style={{ position: "absolute", left: 3, top: 7 }} />
        <Text style={textStyles.heading4}>Cart</Text>
      </View>
      <ScrollView style={{ flex: 1, paddingBottom: 50 }} showsVerticalScrollIndicator={false}>
        <View style={{ gap: 20 }}>
          {orders.map(({ image, name, price, size }) => (
            <OrderCard key={name} image={image} name={name} price={price} size={size} setTotalPrice={setTotalPrice} />
          ))}
        </View>
      </ScrollView>
      <View style={{flexDirection: "row", justifyContent: "flex-end", alignItems: "center", gap: 16, marginBottom: 24}}>
        <Text style={[textStyles.bodyMedium, {fontWeight: "semibold", color: Colors.neutral[500]}]}>Total Price:</Text>
        <Text style={[textStyles.heading4, {color: Colors.neutral[900], fontWeight: "bold"}]}>${totalPrice}</Text>
      </View>
      <View style={{ marginTop: 'auto' }}>

        <PrimaryButton>Checkout</PrimaryButton>
      </View>
    </SafeAreaView >
  )
}

export default Orders

const style = StyleSheet.create({
  header: {
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10
  },
  orderContainer: {
    position: "relative",
    paddingVertical: 11,
    paddingBottom: 14,
    flexDirection: "row",
    gap: 10,
    backgroundColor: "white",
    paddingHorizontal: 6
  },
  orderImagContainer: {
    height: 144,
    backgroundColor: Colors.neutral[300],
    width: 91,
    borderRadius: 8
  },
  orderImage: {

  },
  price: {
    fontSize: 14,
    fontWeight: "semibold",
    lineHeight: 22
  },
  quantityCtrl: {
    height: 18,
    alignItems: "center",
    justifyContent: "center",
    width: 18,
    borderRadius: 9,
    borderWidth: 0.75,
    backgroundColor: Colors.neutral[100],
    borderColor: Colors.neutral[900]
  }
})


const OrderCard = ({ name, price, image, size, setTotalPrice }) => {
  const [quantity, setQuantity] = useState(1)
  const increaseQuantity = () => {
    setQuantity(quantity + 1)
    setTotalPrice(prev => prev + price)
  }
  const decreaseQuantity = () => {
    setQuantity(quantity - 1)
    setTotalPrice(prev => prev - price)
  }

  return (
    <View style={style.orderContainer}>
      <TouchableOpacity>
        <CloseIcon style={{ position: "absolute", right: 19, top: 19 }} />
      </TouchableOpacity>
      <View style={style.orderImagContainer}>
        <Image
          source={image}
        />
      </View>
      <View>
        <Text style={[textStyles.bodyMedium, { color: Colors.neutral[900] }]}>{name}</Text>
        <View style={{ flexDirection: "row", marginTop: 10, marginBottom: 14 }}>
          <Text style={[textStyles.bodySmall, { color: Colors.neutral[600] }]}>Color/</Text>
          <View style={{ backgroundColor: "#334820", height: 16, width: 16, borderRadius: 8 }}></View>
          <Text style={[textStyles.bodySmall, { color: Colors.neutral[600], borderLeftColor: Colors.neutral[600], borderLeftWidth: 2, marginLeft: 7, paddingLeft: 7 }]}>SIZE/{size}</Text>
        </View>
        <View style={{ flexDirection: "row", gap: 12 }}>
          <TouchableOpacity style={style.quantityCtrl} onPress={decreaseQuantity}>
            <MinusIcon />
          </TouchableOpacity>
          <Text>{quantity}</Text>
          <TouchableOpacity style={style.quantityCtrl} onPress={increaseQuantity}>
            <PlusIcon />
          </TouchableOpacity>
        </View>
        <Text style={[textStyles.bodyMedium, { fontWeight: "bold", marginTop: 14 }]}>${price}</Text>
      </View>
    </View>
  )
}

const orders = [
  {
    image: require("@/assets/images/watch1.png"),
    name: "Fabric Strap Watch",
    price: 400,
    size: 32
  },
  {
    image: require("@/assets/images/watch1.png"),
    name: "Strap Watch",
    price: 200,
    size: 30
  },
]