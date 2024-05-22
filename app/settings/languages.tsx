import { Switch } from '@/components/Inputs'
import { ArrowBackIcon, CheckMarkIcon } from '@/components/Svgs'
import { Colors } from '@/constants/Colors'
import { pageStyles } from '@/styles/pageStyles'
import { textStyles } from '@/styles/textStyles'
import { useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

const Language = () => {
    const [language, setLanguage] = useState(suggestedLanguages[0])
    return (
        <View style={pageStyles.pageContainer}>
            <View style={pageStyles.header}>
                <View style={pageStyles.backIcon}>
                    <ArrowBackIcon />
                </View>
                <Text style={textStyles.heading4}>Languages</Text>

            </View>
            <View style={{ marginTop: 36 }}>
                <Text style={textStyles.heading6}>Suggested</Text>
                <View style={{ gap: 24, marginTop: 24 }}>
                    {suggestedLanguages.map(lang => (
                        <Pressable key={lang} onPress={() => setLanguage(lang)} style={styles.languageRow}>
                            <Text style={[textStyles.bodyLarge, { fontWeight: "semibold" }]}>{lang}</Text>
                            <View style={[styles.checkContainer, language == lang && styles.activeCheck]}>
                                {language === lang && <CheckMarkIcon />}
                            </View>
                        </Pressable>
                    ))}
                </View>
                <View style={{ borderBottomWidth: 1, marginVertical: 20, borderColor: Colors.neutral[200] }}></View>
                <Text style={textStyles.heading6}>Languages</Text>
                <View style={{ gap: 24, marginTop: 24 }}>
                    {languageList.map(lang => (
                        <Pressable key={lang} onPress={() => setLanguage(lang)} style={styles.languageRow}>
                            <Text style={[textStyles.bodyLarge, { fontWeight: "semibold" }]}>{lang}</Text>
                            <View style={[styles.checkContainer, language == lang && styles.activeCheck]}>
                                {language === lang && <CheckMarkIcon />}
                            </View>
                        </Pressable>
                    ))}
                </View>
            </View>
        </View>
    )
}

export default Language

const styles = StyleSheet.create({
    languageRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    checkContainer: {
        height: 20,
        width: 20,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderRadius: 10,
        borderColor: Colors.neutral[900]
    },
    activeCheck: {
        backgroundColor: Colors.neutral[900]
    }
})

const languageList = [
    "Arabic", "Yoruba", "Hausa", "Mandarin", "Hindi", "Spanish", "French"
]

const suggestedLanguages = ["English (UK)", "English (US)"]