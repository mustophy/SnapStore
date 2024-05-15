import { CheckBox, InputText, PrimaryButton } from "@/components/Inputs"
import { LoginAppleIcon, LoginFacebookIcon, LoginGoogleIcon } from "@/components/Svgs"
import { Colors } from "@/constants/Colors"
import { textStyles } from "@/styles/textStyles"
import { Link, router } from "expo-router"
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from "react-native"
"react-native"

const SignIn = () => {
    return (
        <View style={{ padding: 16, flex: 1, paddingTop: 50, backgroundColor: Colors.neutral[50] }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={[textStyles.heading3]}>Create Your Account</Text>
                <Text style={[textStyles.bodySmall, { color: Colors.neutral[500] }]}>Create Your Account</Text>
                <InputText placeholder="Name" style={{ marginTop: 32, }} />
                <InputText placeholder="Email" style={{ marginVertical: 24 }} />
                <InputText placeholder="Password" style={{ marginBottom: 16 }} />
                <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 24 }}>
                    <CheckBox />
                    <Text style={[textStyles.bodySmall, { fontWeight: "semibold", marginLeft: 8, marginRight: 4, color: Colors.neutral[500] }]}>I accepted</Text>
                    <Text style={[textStyles.bodySmall, { fontWeight: "semibold", color: Colors.neutral[900] }]}>Terms & Privacy Policy</Text>
                </View>
                <PrimaryButton onPress={() => router.push("success")}>Sign Up</PrimaryButton>
                <View style={{ flexDirection: "row", alignItems: "center", marginTop: 40, gap: 11 }}>
                    <View style={{ height: 2, flex: 1, backgroundColor: Colors.neutral[300] }}></View>
                    <Text style={[textStyles.bodyMedium, { color: Colors.neutral[500], fontWeight: "medium" }]}>OR</Text>
                    <View style={{ height: 2, flex: 1, backgroundColor: Colors.neutral[300] }}></View>
                </View>
                <View style={[styles.socialContainer, { marginTop: 24, marginBottom: 16 }]}>
                    <LoginFacebookIcon style={styles.socialIcon} />
                    <Text style={styles.socialText}>Continue With Facebook</Text>
                </View>
                <TouchableOpacity style={[styles.socialContainer, , { marginBottom: 16 }]}>
                    <LoginGoogleIcon style={styles.socialIcon} />
                    <Text style={styles.socialText}>Continue With Google</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.socialContainer]}>
                    <LoginAppleIcon style={styles.socialIcon} />
                    <Text style={styles.socialText}>Continue With Apple</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: "row", justifyContent: "center", marginTop: 32, gap: 4 }}>
                    <Text style={[textStyles.bodyMedium, { color: Colors.neutral[500], fontWeight: "semibold" }]}>Already have an account ?</Text>
                    <Link href="sign-in">
                        <Text style={[textStyles.bodyMedium, { color: Colors.neutral[900], fontWeight: "semibold" }]}>Sign In</Text>
                    </Link>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}

export default SignIn

const styles = StyleSheet.create({
    socialContainer: {
        borderRadius: 24,
        borderColor: Colors.neutral[400],
        borderWidth: 1,
        paddingVertical: 14,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        position: "relative"
    },
    socialText: {
        fontWeight: "semibold",
        color: Colors.neutral[600]
    },
    socialIcon: {
        position: "absolute",
        left: 40,
        top: 14
    }

})