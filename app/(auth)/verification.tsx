import { PrimaryButton } from '@/components/Inputs'
import { KeyboardDeleteIcon } from '@/components/Svgs'
import { Colors } from '@/constants/Colors'
import { textStyles } from '@/styles/textStyles'
import { router } from 'expo-router'
import { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const verification = () => {
    const [code, setCode] = useState([""])
    const typeNumber = (num: string) => {
        if (code[0] == "") return setCode([num])
        else if (code.length < 5) setCode(prev => [...prev, num])
    }
    const deleteNumber = () => {
        if(code.length < 1) return
        let newCode = code.slice(0, -1)
        setCode(newCode)
    }
    return (
        <View style={styles.pageContainer}>
            <View style={{ paddingHorizontal: 16 }}>
                <Text style={[textStyles.heading4, styles.header]}>Verify phone number</Text>
                <Text style={[textStyles.bodySmall, styles.tagline]}>Which part of country that you call home?</Text>

                <View style={styles.codesContainer}>
                    <View style={[styles.codeBox, code.length > 0 && code[0] !== "" && styles.activeCodeBox]}>
                        <Text style={styles.codeBoxText}>{code[0] || ""}</Text>
                    </View>
                    <View style={[styles.codeBox, code.length > 1 && styles.activeCodeBox]}>
                        <Text style={styles.codeBoxText}>{code[1] || ""}</Text>
                    </View>
                    <View style={[styles.codeBox, code.length > 2 && styles.activeCodeBox]}>
                        <Text style={styles.codeBoxText}>{code[2] || ""}</Text>
                    </View>
                    <View style={[styles.codeBox, code.length > 3 && styles.activeCodeBox]}>
                        <Text style={styles.codeBoxText}>{code[3] || ""}</Text>
                    </View>
                </View>
                <Text style={[textStyles.bodyXlarge, styles.resend]}>Resend Code</Text>
                <PrimaryButton onPress={() => router.push("new-password")}>Verify</PrimaryButton>
            </View>
            <View style={styles.keysContainer}>
                {keysList.map(({ letters, number }) => (
                    <TouchableOpacity key={number} onPress={() => typeNumber(number)} style={styles.keyBox}>
                        <Text style={styles.keyBoxNumber}>{number} </Text>
                        <Text style={styles.keyBoxLetter}>{letters} </Text>
                    </TouchableOpacity>
                ))}
                <View style={[styles.keyBox, { backgroundColor: "transparent" }]} />
                <TouchableOpacity onPress={() => typeNumber("0")} style={styles.keyBox}>
                    <Text style={styles.keyBoxNumber}>0</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={deleteNumber} style={[styles.keyBox, { backgroundColor: "transparent", paddingTop: 0, paddingBottom: 0, justifyContent: "center", alignItems: "center" }]}>
                    <KeyboardDeleteIcon />
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default verification

const styles = StyleSheet.create({
    pageContainer: {
        flex: 1,
        backgroundColor: Colors.neutral[50],
        paddingTop: 50
    },
    header: {
        marginTop: 40,
        color: Colors.neutral[900],
        marginBottom: 8,
        fontWeight: "bold"
    },
    tagline: {
        color: Colors.neutral[500],
        fontWeight: "semibold"
    },
    resend: {
        marginTop: 24,
        marginBottom: 100,
        color: Colors.neutral[900],
        fontWeight: "semibold",
        textAlign: "center"
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
        // backgroundColor: "purple",
        borderRadius: 12,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 2,
        borderColor: Colors.neutral[300]
    },
    activeCodeBox: {
        borderColor: Colors.neutral[900]
    },
    codeBoxText: {
        lineHeight: 28.8,
        color: Colors.neutral[900],
        fontSize: 24,
        fontWeight: "bold"
    },
    codeText: {
        color: Colors.neutral[900]
    },
    keysContainer: {
        marginTop: "auto",
        backgroundColor: Colors.neutral[400],
        minHeight: 200,
        flexDirection: "row",
        gap: 6,
        flexWrap: "wrap",
        paddingBottom: 44,
        padding: 6,
        justifyContent: "space-between",
    },
    keyBox: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        paddingTop: 1.5,
        paddingBottom: 5.5,
        borderRadius: 5,
        minWidth: "30%",
        height: 46,
        backgroundColor: Colors.neutral[100]
    },
    keyBoxNumber: {
        fontSize: 25,
        letterSpacing: 0.29,
        fontWeight: "semibold",
        color: Colors.neutral[900]
    },
    keyBoxLetter: {
        letterSpacing: 2,
        fontWeight: "semibold",
        fontSize: 10
    }
})

const keysList = [
    {
        number: "1",
        letters: "",
    },
    {
        number: "2",
        letters: "ABC",
    },
    {
        number: "3",
        letters: "DEF",
    },
    {
        number: "4",
        letters: "GHI",
    },
    {
        number: "5",
        letters: "JKL",
    },
    {
        number: "6",
        letters: "MNO",
    },
    {
        number: "7",
        letters: "PQRS",
    },
    {
        number: "8",
        letters: "TUV",
    },
    {
        number: "9",
        letters: "WXYZ",
    },
]