import { Image, ImageBackground, StatusBar, StyleSheet, Text, View } from 'react-native'
import { router } from 'expo-router'
import { Colors } from '@/constants/Colors'
import { PrimaryButton } from '@/components/Inputs'
import { textStyles } from '@/styles/textStyles'
import { Link } from 'expo-router'

const onboarding1 = () => {
    return (
        <ImageBackground
            style={{ flex: 1, padding: 16 }}
            source={require('@/assets/images/onboarding.jpg')}
        >
            <StatusBar hidden />
            <Text style={[textStyles.heading3, styles.title]}>Discover Our New Collection</Text>
            <Text style={[textStyles.bodyMedium, styles.tagline]}>Easy shopping for all your needs just in hand, trusted by millions of people in the world.</Text>
            <PrimaryButton onPress={() => router.push("onboarding2")} >Next</PrimaryButton>

        </ImageBackground >
    )
}

export default onboarding1

const styles = StyleSheet.create({
    title: {
        marginTop: "auto",
        textAlign: "center",
        color: Colors.neutral[50]
    },
    tagline: {
        color: Colors.neutral[50],
        textAlign: "center",
        marginBottom: 16,
        marginTop: 8
    }

})