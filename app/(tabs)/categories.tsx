import { SafeAreaView, View, ScrollView, Text, TextInput, TouchableOpacity, StyleSheet, FlatList, Pressable, Image } from "react-native"
import { ArrowBackIcon, FilterIcon, SearchIcon } from "@/components/Svgs"
import { textStyles } from "@/styles/textStyles"
import ProductCard from "@/components/ProductCard"
import { useState } from "react"
import { Colors } from "@/constants/Colors"
import { pageStyles } from "@/styles/pageStyles"
import { router } from "expo-router"

const Categories = () => {
  const [activeFilter, setActiveFilter] = useState(filters[1])
  return (
    <SafeAreaView style={pageStyles.pageContainer}>
      <View style={pageStyles.header}>
        <Pressable onPress={() => router.back()} style={pageStyles.backIcon}>
          <ArrowBackIcon />
        </Pressable>
        <Text style={textStyles.heading4}>Categories</Text>
      </View>
      <ScrollView style={{ marginTop: 32 }} showsVerticalScrollIndicator={false}>
        <View style={styles.categoryList}>
          {categoriesList.map(({ name, image }) => {
            return (
              <View key={name} style={styles.categoryRow}>
                <View style={styles.categoryImgBx}>
                  <Image
                    style={styles.categoryImg}
                    source={image}
                  />
                </View>
                <Text style={styles.categoryName}>{name}</Text>
              </View>
            )
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Categories

const styles = StyleSheet.create({
  categoryList: {
    gap: 32,
  },
  categoryRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 17
  },
  categoryImgBx: {
    borderRadius: 8,
    height: 102,
    width: 106,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "purple"
  },
  categoryImg: {
    height: "100%",
    width: "100%",
    borderRadius: 8,
  },
  categoryName: {
    ...textStyles.heading6,
    color: Colors.neutral[900]
  }
})

const filters = ["New", "Best Seller", "Trending", "Recent"]

const categoriesList = [
  {
    name: "Handbag",
    image: require("@/assets/images/handbag.png")
  },
  {
    name: "Shoulder bags",
    image: require("@/assets/images/shoulder-bag.png")
  },
  {
    name: "Wallet",
    image: require("@/assets/images/wallet.png")
  },
  {
    name: "Backpacks",
    image: require("@/assets/images/backpack.png")
  },
  {
    name: "Mini Bag",
    image: require("@/assets/images/minibag.png")
  },
]