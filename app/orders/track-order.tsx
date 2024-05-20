import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { pageStyles } from '@/styles/pageStyles'
import { ArrowBackIcon } from '@/components/Svgs'
import { router } from 'expo-router'
import { textStyles } from '@/styles/textStyles'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import { latitudes } from '@/constants/map'

const trackOrder = () => {
  return (
    <View style={pageStyles.pageContainer}>
        <View style={pageStyles.header}>
            <Pressable onPress={() => router.back()} style={pageStyles.backIcon}>
                <ArrowBackIcon />
            </Pressable>
            <Text style={textStyles.heading4}>Track Order</Text>
        </View>
        <MapView 
            initialRegion={latitudes[0]}
            provider={PROVIDER_GOOGLE}
            style={{ flex: 1 }}
            showsUserLocation
            showsMyLocationButton
        />
    </View>
  )
}

export default trackOrder

const styles = StyleSheet.create({})