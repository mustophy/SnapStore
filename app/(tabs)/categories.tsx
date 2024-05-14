import { SafeAreaView, View, ScrollView, Text, TextInput, TouchableOpacity, StyleSheet, FlatList } from "react-native"
import { ArrowBackIcon, FilterIcon, SearchIcon } from "@/components/Svgs"
import { textStyles } from "@/styles/textStyles"
import ProductCard from "@/components/ProductCard"
import { useState } from "react"
import { Colors } from "@/constants/Colors"

const Categories = () => {
  const [activeFilter, setActiveFilter] = useState(filters[1])
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ marginTop: 50, paddingHorizontal: 16 }}>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 24 }}>
          <ArrowBackIcon />
          <View style={{ position: "relative", flex: 1 }}>
            <SearchIcon style={{ position: "absolute", left: 16, top: 16 }} />
            <TextInput style={[textStyles.bodyMedium, { borderWidth: 1, borderColor: Colors.neutral[500], borderRadius: 16, height: 50, paddingLeft: 52, color: Colors.neutral[800] }]} />
          </View>
          <FilterIcon />
        </View>
        <ScrollView style={{ marginTop: 16 }} horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={{ flexDirection: "row", gap: 16 }}>
            {filters.map(filter => (
              <TouchableOpacity onPress={() => setActiveFilter(filter)} style={[style.filterContainer, activeFilter === filter && style.activeFilterContainer]} key={filter}>
                <Text style={[textStyles.bodySmall, style.filterText, activeFilter === filter && style.activeFilterText]}>{filter}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
        <View style={{ flexDirection: "row", marginTop: 16, flexWrap: "wrap", justifyContent: "space-between"}}>
          {[1, 2, 4, 5,7,8].map((_) => (
            <ProductCard />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Categories

const style = StyleSheet.create({
  filterContainer: {
    borderRadius: 19,
    borderWidth: 2,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderColor: Colors.neutral[300],
    justifyContent: "center",
    alignItems: "center"
  },
  filterText: {
    color: Colors.neutral[500],
    fontWeight: "bold"
  },
  activeFilterContainer: {
    backgroundColor: Colors.neutral[900],
    borderWidth: 0,
  },
  activeFilterText: {
    color: Colors.neutral[50]
  }
})

const filters = [
  "New", "Best Seller", "Trending", "Recent"
]