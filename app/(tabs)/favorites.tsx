import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { pageStyles } from '@/styles/pageStyles'
import { textStyles } from '@/styles/textStyles'
import { InputText } from '@/components/Inputs'
import { Colors } from '@/constants/Colors'
import { Path, Svg } from 'react-native-svg'
import { BagIcon, CartIcon } from '@/components/Svgs'

const wishlist = () => {
  return (
    <View style={pageStyles.pageContainer}>
      <View style={{ justifyContent: "space-between", alignItems: "center", flexDirection: "row" }}>
        <Text style={textStyles.heading4}>Wishlist</Text>
        <View style={{ height: 32, width: 32, borderRadius: 16, backgroundColor: Colors.neutral[200], justifyContent: "center", alignItems: "center"}}>
          <BagIcon color={Colors.neutral[900]} />
        </View>
      </View>
      <View style={{ marginVertical: 24 }}>
        <InputText placeholder='Search' style={{ paddingLeft: 24 }} />
      </View>
      <View style={{ gap: 16 }}>
        <View style={styles.wishRow}>
          <View style={styles.imgBox}>
            <Image
              source={require("@/assets/images/wishlist1.png")}
            />
            <View style={styles.logoBox}>
              <Image
                source={require("@/assets/images/wlogo1.png")}
              />
            </View>
          </View>
          <View style={{ gap: 4 }}>
            <Text>Running Shoes</Text>
            <View style={{ flexDirection: "row", gap: 5, alignItems: "center" }}>
              <Svg width="10" height="10" viewBox="0 0 10 10" fill="none" >
                <Path d="M5.86495 0.755313L6.74495 2.51531C6.86495 2.76031 7.18495 2.99531 7.45495 3.04031L9.04995 3.30531C10.07 3.47531 10.31 4.21531 9.57495 4.94531L8.33495 6.18531C8.12495 6.39531 8.00995 6.80031 8.07495 7.09031L8.42995 8.62531C8.70995 9.84031 8.06495 10.3103 6.98995 9.67531L5.49495 8.79031C5.22495 8.63031 4.77995 8.63031 4.50495 8.79031L3.00995 9.67531C1.93995 10.3103 1.28995 9.83531 1.56995 8.62531L1.92495 7.09031C1.98995 6.80031 1.87495 6.39531 1.66495 6.18531L0.424955 4.94531C-0.305046 4.21531 -0.0700454 3.47531 0.949955 3.30531L2.54495 3.04031C2.80995 2.99531 3.12995 2.76031 3.24995 2.51531L4.12995 0.755313C4.60995 -0.199687 5.38995 -0.199687 5.86495 0.755313Z" fill="#FCD240" />
              </Svg>
              <Text style={[textStyles.bodyXsmall, { fontWeight: "bold" }]}>4.5</Text>
              <Text style={[textStyles.bodyXsmall]}>(1045 Reviews)</Text>
            </View>
            <Text style={[textStyles.bodySmall, { fontWeight: "bold" }]}>$235</Text>
          </View>
          <Svg style={{ marginLeft: "auto" }} width="20" height="18" viewBox="0 0 20 18" fill="none">
            <Path d="M10.62 17.8096C10.28 17.9296 9.72 17.9296 9.38 17.8096C6.48 16.8196 0 12.6896 0 5.68961C0 2.59961 2.49 0.0996094 5.56 0.0996094C7.38 0.0996094 8.99 0.97961 10 2.33961C11.01 0.97961 12.63 0.0996094 14.44 0.0996094C17.51 0.0996094 20 2.59961 20 5.68961C20 12.6896 13.52 16.8196 10.62 17.8096Z" fill="black" />
          </Svg>
        </View>
        <View style={styles.wishRow}>
          <View style={styles.imgBox}>
            <Image
              source={require("@/assets/images/wishlist2.png")}
            />
            <View style={styles.logoBox}>
              <Image
                source={require("@/assets/images/wlogo2.png")}
              />
            </View>
          </View>
          <View style={{ gap: 4 }}>
            <Text>Running Shoes</Text>
            <View style={{ flexDirection: "row", gap: 5, alignItems: "center" }}>
              <Svg width="10" height="10" viewBox="0 0 10 10" fill="none" >
                <Path d="M5.86495 0.755313L6.74495 2.51531C6.86495 2.76031 7.18495 2.99531 7.45495 3.04031L9.04995 3.30531C10.07 3.47531 10.31 4.21531 9.57495 4.94531L8.33495 6.18531C8.12495 6.39531 8.00995 6.80031 8.07495 7.09031L8.42995 8.62531C8.70995 9.84031 8.06495 10.3103 6.98995 9.67531L5.49495 8.79031C5.22495 8.63031 4.77995 8.63031 4.50495 8.79031L3.00995 9.67531C1.93995 10.3103 1.28995 9.83531 1.56995 8.62531L1.92495 7.09031C1.98995 6.80031 1.87495 6.39531 1.66495 6.18531L0.424955 4.94531C-0.305046 4.21531 -0.0700454 3.47531 0.949955 3.30531L2.54495 3.04031C2.80995 2.99531 3.12995 2.76031 3.24995 2.51531L4.12995 0.755313C4.60995 -0.199687 5.38995 -0.199687 5.86495 0.755313Z" fill="#FCD240" />
              </Svg>
              <Text style={[textStyles.bodyXsmall, { fontWeight: "bold" }]}>4.5</Text>
              <Text style={[textStyles.bodyXsmall]}>(1045 Reviews)</Text>
            </View>
            <Text style={[textStyles.bodySmall, { fontWeight: "bold" }]}>$235</Text>
          </View>
          <Svg style={{ marginLeft: "auto" }} width="20" height="18" viewBox="0 0 20 18" fill="none">
            <Path d="M10.62 17.8096C10.28 17.9296 9.72 17.9296 9.38 17.8096C6.48 16.8196 0 12.6896 0 5.68961C0 2.59961 2.49 0.0996094 5.56 0.0996094C7.38 0.0996094 8.99 0.97961 10 2.33961C11.01 0.97961 12.63 0.0996094 14.44 0.0996094C17.51 0.0996094 20 2.59961 20 5.68961C20 12.6896 13.52 16.8196 10.62 17.8096Z" fill="black" />
          </Svg>
        </View>
        <View style={styles.wishRow}>
          <View style={styles.imgBox}>
            <Image
              source={require("@/assets/images/wishlist3.png")}
            />
            <View style={styles.logoBox}>
              <Image
                source={require("@/assets/images/wlogo3.png")}
              />
            </View>
          </View>
          <View style={{ gap: 4 }}>
            <Text>Running Shoes</Text>
            <View style={{ flexDirection: "row", gap: 5, alignItems: "center" }}>
              <Svg width="10" height="10" viewBox="0 0 10 10" fill="none" >
                <Path d="M5.86495 0.755313L6.74495 2.51531C6.86495 2.76031 7.18495 2.99531 7.45495 3.04031L9.04995 3.30531C10.07 3.47531 10.31 4.21531 9.57495 4.94531L8.33495 6.18531C8.12495 6.39531 8.00995 6.80031 8.07495 7.09031L8.42995 8.62531C8.70995 9.84031 8.06495 10.3103 6.98995 9.67531L5.49495 8.79031C5.22495 8.63031 4.77995 8.63031 4.50495 8.79031L3.00995 9.67531C1.93995 10.3103 1.28995 9.83531 1.56995 8.62531L1.92495 7.09031C1.98995 6.80031 1.87495 6.39531 1.66495 6.18531L0.424955 4.94531C-0.305046 4.21531 -0.0700454 3.47531 0.949955 3.30531L2.54495 3.04031C2.80995 2.99531 3.12995 2.76031 3.24995 2.51531L4.12995 0.755313C4.60995 -0.199687 5.38995 -0.199687 5.86495 0.755313Z" fill="#FCD240" />
              </Svg>
              <Text style={[textStyles.bodyXsmall, { fontWeight: "bold" }]}>4.5</Text>
              <Text style={[textStyles.bodyXsmall]}>(1045 Reviews)</Text>
            </View>
            <Text style={[textStyles.bodySmall, { fontWeight: "bold" }]}>$235</Text>
          </View>
          <Svg style={{ marginLeft: "auto" }} width="20" height="18" viewBox="0 0 20 18" fill="none">
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
    gap: 18,
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
    position: "relative",
    height: 88,
    width: 88,
    borderRadius: 16,
    overflow: "hidden",
    backgroundColor: Colors.neutral[200]
  },
  review: {
    color: Colors.neutral[400]
  }
})