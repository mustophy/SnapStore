import { InputText, PrimaryButton } from "@/components/Inputs"
import { LoginFacebookIcon, LoginGoogleIcon } from "@/components/Svgs"
import { Colors } from "@/constants/Colors"
import { textStyles } from "@/styles/textStyles"
import { Link, router } from "expo-router"
import { StyleSheet, View, Text, TouchableOpacity } from "react-native"
"react-native"

const SignIn = () => {
  return (
    <View style={{ padding: 16, flex: 1, paddingTop: 50, backgroundColor: Colors.neutral[50] }}>
      <Text style={[textStyles.heading3]}>Welcome back!</Text>
      <Text style={[textStyles.heading3]}>Sign In</Text>
      <InputText placeholder="Email" style={{ marginTop: 32, marginBottom: 24 }} />
      <InputText placeholder="Password" style={{ marginBottom: 16 }} />
      <Link href="forgot-password" style={{ textAlign: "right", marginBottom: 24}}>
        <Text style={{ marginBottom: 24, fontWeight: "medium" }}>Forgot Password?</Text>
      </Link>
      <PrimaryButton onPress={() => router.push("success")}>Sign In</PrimaryButton>
      <View style={{ flexDirection: "row", alignItems: "center", marginTop: 40, gap: 11 }}>
        <View style={{ height: 2, flex: 1, backgroundColor: Colors.neutral[300] }}></View>
        <Text style={[textStyles.bodyMedium, { color: Colors.neutral[500], fontWeight: "medium" }]}>OR</Text>
        <View style={{ height: 2, flex: 1, backgroundColor: Colors.neutral[300] }}></View>
      </View>
      <View style={[styles.socialContainer, { marginVertical: 24 }]}>
        <LoginFacebookIcon style={styles.socialIcon} />
        <Text style={styles.socialText}>Continue With Facebook</Text>
      </View>
      <TouchableOpacity style={[styles.socialContainer]}>
        <LoginGoogleIcon style={styles.socialIcon} />
        <Text style={styles.socialText}>Continue With Google</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ flexDirection: "row", justifyContent: "center", marginTop: 32, gap: 4 }}>
        <Text style={[textStyles.bodyMedium, { color: Colors.neutral[500], fontWeight: "semibold" }]}>Don't have an account ?</Text>
        <Link href="/sign-up">
          <Text style={[textStyles.bodyMedium, { color: Colors.neutral[900], fontWeight: "semibold" }]}>Sign Up</Text>
        </Link>
      </TouchableOpacity>
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