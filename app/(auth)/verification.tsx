import { Colors } from '@/constants/Colors'
import { StyleSheet, Text, View } from 'react-native'

const verification = () => {
    return (
        <View style={styles.pageContainer}>
            <Text style={styles.header}>Verify phone number</Text>
            <Text style={styles.tagline}>Which part of country that you call home?</Text>

            <View style={styles.codesContainer}>

            </View>
        </View>
    )
}

export default verification

const styles = StyleSheet.create({
    pageContainer: {
        padding: 16,
        flex: 1,
        backgroundColor: Colors.neutral[50],
        paddingTop: 50
    },
    header: {
        marginTop: 40,
        color: Colors.neutral[900],
        marginBottom: 8
    },
    tagline: {
        color: Colors.neutral[500]
    },
    codesContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 40,
        marginBottom: 24
    },
    codeBox: {
        width: 70,
        height: 61,
        borderRadius: 12,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderColor: Colors.neutral[200]
    },
    activeCodeBox: {
        borderColor: Colors.neutral[900]
    }
})