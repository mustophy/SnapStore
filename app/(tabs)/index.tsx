import { InputText } from '@/components/Inputs';
import ProductCard from '@/components/ProductCard';
import { ArrowBackIcon, BagIcon, CameraIcon, FavoriteIcon, FilterIcon, ScanIcon, SearchIcon } from '@/components/Svgs';
import { Colors } from '@/constants/Colors';
import { textStyles } from '@/styles/textStyles';
import { useState } from 'react';
import { Image, ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { TouchableOpacity } from 'react-native';

export default function HomeScreen() {
  const [activeTab, setActiveTab] = useState(tabs[2])
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "purple" }}>
      <ScrollView style={{ backgroundColor: Colors.neutral[50], paddingHorizontal: 16, paddingTop: 68 }}>
        <View style={{ marginBottom: 29 }}>
          <Image
            source={require('@/assets/images/logo.png')}
          />

        </View>
        <View style={{ position: "relative", }}>
          <SearchIcon style={{ position: "absolute", top: 23, left: 16, zIndex: 20 }} />
          <CameraIcon style={{ position: "absolute", top: 23, right: 38, zIndex: 20 }} />
          <ScanIcon style={{ position: "absolute", top: 23, right: 16, zIndex: 20 }} />
          <InputText placeholder="Search" style={{ paddingLeft: 44 }} />
          {/* <TextInput style={[textStyles.bodyMedium, { borderWidth: 1, borderColor: Colors.neutral[500], borderRadius: 16, height: 50, paddingLeft: 52, color: Colors.neutral[800] }]} /> */}
        </View>

        <ScrollView style={{ marginTop: 16 }} horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={{ flexDirection: "row", gap: 24, }}>
            {tabs.map(tab => (
              <TouchableOpacity onPress={() => setActiveTab(tab)} style={[style.tabContainer, activeTab === tab && style.activeTabContainer]} key={tab}>
                <Text style={[textStyles.bodySmall, style.tabText, activeTab === tab && style.activeTabText]}>{tab}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>

        <View style={{ marginTop: 20, flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between", rowGap: 24}}>
          {productList.map(({ image, name, price }) => {
            return (
              <HomeProductCard image={image} name={name} price={price} />
            )
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  tabContainer: {
    borderRadius: 19,
    borderWidth: 2,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderColor: Colors.neutral[300],
    justifyContent: "center",
    alignItems: "center"
  },
  tabText: {
    color: Colors.neutral[500],
    fontWeight: "bold"
  },
  tabFilterContainer: {
    backgroundColor: Colors.neutral[900],
    borderWidth: 0,
  },
  tabFilterText: {
    color: Colors.neutral[50]
  },
  activeTabContainer: {
    backgroundColor: Colors.neutral[900],
    borderWidth: 0,
  },
  activeTabText: {
    color: Colors.neutral[50]
  }
})

const HomeProductCard = ({ name, price, image}) => {
  return (
    <ImageBackground style={productCardStyle.container} source={image}>
      <TouchableOpacity style={productCardStyle.likeContainer}>
        <FavoriteIcon />
      </TouchableOpacity>
      <TouchableOpacity style={productCardStyle.cartContainer}>
        <BagIcon />
      </TouchableOpacity>
      <View style={{ position: "absolute", left: 16, bottom: 12, gap: 4 }}>
        <Text style={productCardStyle.name}>{name}</Text>
        <Text style={productCardStyle.price}>${price}</Text>
      </View>
    </ImageBackground>
  )
}

const productCardStyle = StyleSheet.create({
  container: {
    height: 217,
    width: 175,
    borderRadius: 16,
    overflow: "hidden",
    resizeMode: "center",
    position: "relative"
  },
  name: {
    fontSize: 14,
    fontWeight: "medium",
    color: Colors.neutral[50]
  },
  price: {
    fontWeight: "semibold",
    color: Colors.neutral[50],
    fontSize: 14
  },
  likeContainer: {
    height: 22,
    width: 22,
    position: "absolute",
    top: 12,
    alignItems: "center",
    justifyContent: "center",
    right: 12,
    borderRadius: 11,
    backgroundColor: Colors.neutral[900]
  },
  cartContainer: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 12,
    right: 12,
    height: 22,
    width: 22,
    borderRadius: 11,
    backgroundColor: Colors.neutral[900]
  }
})

const tabs = [
  "All", "Men", "Kids", "Women",
]

const productList = [
  {
    name: "Jacket",
    price: 20,
    image: require("@/assets/images/jacket.png"),
  },
  {
    name: "Shirt",
    price: 100,
    image: require("@/assets/images/jacket.png"),
  },
  {
    name: "Shirt",
    price: 1000,
    image: require("@/assets/images/jacket.png"),
  },
  {
    name: "Jacket",
    price: 20,
    image: require("@/assets/images/jacket.png"),
  },
  {
    name: "Shirt",
    price: 40,
    image: require("@/assets/images/jacket.png"),
  },
  {
    name: "Shirt",
    price: 100,
    image: require("@/assets/images/jacket.png"),
  },
  {
    name: "Jacket",
    price: 200,
    image: require("@/assets/images/jacket.png"),
  },
]