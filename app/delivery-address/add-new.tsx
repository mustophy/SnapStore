import { InputText, PrimaryButton } from '@/components/Inputs'
import { ArrowBackIcon, SearchIcon } from '@/components/Svgs'
import { geoLocation } from '@/constants/map'
import { pageStyles } from '@/styles/pageStyles'
import { textStyles } from '@/styles/textStyles'
import { Redirect, router } from 'expo-router'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import { Colors } from '@/constants/Colors'
import { useRef, useState } from 'react'
import { Link } from 'expo-router'

const addNewAddress = () => {
  const mapRef = useRef(null)
  const [selectedAddress, setSelectedAddress] = useState("hello")

  async function moveToLocation(latitude: number, longitude: number) {
    // @ts-ignore
    mapRef.current.animateToRegion({
      latitude,
      longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }, 2000)
  }

  return (
    <View style={styles.container}>
      <View style={{ position: "absolute", paddingTop: 50, paddingHorizontal: 16, width: "100%", top: 10, zIndex: 1000 }}>
        <View style={[pageStyles.header, { marginBottom: 36 }]}>
          <Pressable onPress={() => router.back()} style={pageStyles.backIcon}>
            <ArrowBackIcon />
          </Pressable>
          <Text style={textStyles.heading4}>Add New Address</Text>
        </View>
        {/* <View style={{ position: "relative" }}>
          <View style={{ position: "absolute", left: 16, top: 0, zIndex: 20, height: "100%", justifyContent: "center" }}>
            <SearchIcon />
          </View>
          <InputText placeholder='Search' dark style={{ paddingLeft: 40, borderWidth: 0 }} />
        </View> */}
        <View style={{ height: 400, zIndex: 10, position: 'relative' }}>

          <GooglePlacesAutocomplete
            placeholder='Search'
            onPress={(data, details = null) => {
              setSelectedAddress(data.description)
              // @ts-ignore
              moveToLocation(details.geometry.location.lat, details.geometry.location.lng)
              console.log(data.description, details)
            }}
            fetchDetails={true}
            query={
              {
                key: "AIzaSyCxAxT-kcT7FANseSEYGzeSerAXiNSJND8",
                language: 'en',
              }
            }
            onFail={(err) => console.log(err)}
            styles={{
              textInputContainer: {
                backgroundColor: Colors.neutral[900],
                borderRadius: 12,
                color: Colors.neutral[400],
                paddingLeft: 40
              },
              textInput: {
                backgroundColor: Colors.neutral[900],
                borderRadius: 12,
                color: Colors.neutral[400]
              },
            }}

          />
          <View style={{ position: "absolute", left: 16, top: 16, width: 16, height: 16, zIndex: 120000, justifyContent: "center" }}>
            <SearchIcon color='white' />
          </View>
        </View>
      </View>
      <MapView
        initialRegion={geoLocation[0]}
        provider={PROVIDER_GOOGLE}
        ref={mapRef}
        style={styles.map}
        showsUserLocation
        showsMyLocationButton
      />
      <View style={styles.saveContainer}>
        <Text style={[textStyles.bodyLarge, { fontWeight: "semibold" }]}>Location Details</Text>
        <View style={{ marginVertical: 42, gap: 16 }}>
          <InputText placeholder='Address' value={selectedAddress} />
        </View>
        <PrimaryButton>Save Address</PrimaryButton>
      </View>
    </View>
  )
}

export default addNewAddress

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
  },
  saveContainer: {
    marginTop: "auto",
    backgroundColor: Colors.neutral[50],
    borderTopRightRadius: 32,
    borderTopLeftRadius: 32,
    paddingHorizontal: 16,
    paddingTop: 37,
    paddingBottom: 24
  },
  map: {
    width: '100%',
    height: '100%',
  },
})