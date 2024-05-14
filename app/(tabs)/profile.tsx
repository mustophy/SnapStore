import { ArrowBackIcon, CardIcon, ChevronRightIcon, GlobeIcon, InfoCircleIcon, LocationIcon, NotificationIcon, PhoneIcon, SecurityIcon, UserIcon2 } from "@/components/Svgs"
import { Colors } from "@/constants/Colors"
import { textStyles } from "@/styles/textStyles"
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, ScrollView } from "react-native"

const Profile = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.neutral[50], paddingHorizontal: 16, paddingTop: 50, paddingBottom: 32 }}>
      <View style={{ position: "relative", justifyContent: "center", paddingBottom: 10}}>
        <ArrowBackIcon style={{ position: "absolute", top: 7, left: 6}}/>
        <Text style={[textStyles.heading4, { textAlign: "center"}]}>My Account</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={[textStyles.heading7, { marginBottom: 27, marginTop: 30 }]}>General</Text>
        {generalProfile.map(({ icon, title, subtitle }) => (
          <View style={style.row} key={title}>
            <TouchableOpacity style={style.iconContainer}>
              {icon}
            </TouchableOpacity>
            <View style={{ marginRight: "auto" }}>
              <Text style={[textStyles.bodyMedium, style.rowTitle]}>{title}</Text>
              <Text style={[textStyles.bodySmall, style.rowSubtitle]}>{subtitle}</Text>
            </View>
            <ChevronRightIcon />
          </View>
        ))}
        <Text style={[textStyles.heading7, { marginBottom: 10, marginTop: 24 }]}>Setting</Text>
        {settingsProfile.map(({ icon, title, subtitle }) => (
          <View style={style.row} key={title}>
            <TouchableOpacity style={style.iconContainer}>
              {icon}
            </TouchableOpacity>
            <View style={{ marginRight: "auto" }}>
              <Text style={[textStyles.bodyMedium, style.rowTitle]}>{title}</Text>
              {subtitle && <Text style={[textStyles.bodySmall, style.rowSubtitle]}>{subtitle}</Text>}
            </View>
            <ChevronRightIcon />
          </View>
        ))}

        <TouchableOpacity>
          <Text style={[textStyles.bodyMedium, style.logOut]}>Log Out</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Profile

const style = StyleSheet.create({
  sectionTitle: {
    color: Colors.neutral[800]
  },
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    width: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: Colors.neutral[300]
  },
  row: {
    flexDirection: "row",
    gap: 16,
    borderBottomWidth: 1,
    paddingRight: 16,
    borderBottomColor: Colors.neutral[300],
    paddingVertical: 16,
    alignItems: "center"
  },
  rowTitle: {
    color: Colors.neutral[900],
    fontWeight: "bold",
    marginBottom: 4
  },
  rowSubtitle: {
    color: Colors.neutral[500]
  },
  logOut: {
    color: Colors.red,
    fontWeight: "semibold",
    justifyContent: "center",
    marginTop: 40,
    textAlign: "center",
  }
})

const generalProfile = [
  {
    icon: <UserIcon2 />,
    title: "Account Details",
    subtitle: "Edit your account information"
  },
  {
    icon: <CardIcon />,
    title: "Payment Method",
    subtitle: "Add your debit or credit card"
  },
  {
    icon: <LocationIcon />,
    title: "Delivery Addresses",
    subtitle: "Edit or add new address"
  },
  {
    icon: <SecurityIcon />,
    title: "Security & Password",
    subtitle: "Edit your password"
  },
]

const settingsProfile = [
  {
    icon: <NotificationIcon />,
    title: "Notification",
    subtitle: "Manage your notifications"
  },
  {
    icon: <GlobeIcon />,
    title: "Language",
  },
  {
    icon: <InfoCircleIcon />,
    title: "Privacy & Policy",
  },
  {
    icon: <PhoneIcon />,
    title: "Contact Us"
  },

]