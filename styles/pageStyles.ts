import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const pageStyles = StyleSheet.create({
    pageContainer: {
        paddingHorizontal: 16,
        paddingTop: 50,
        flex: 1,
        backgroundColor: Colors.neutral[50],
        zIndex: 10
    },
    header: {
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
    },
    backIcon : {
        position: "absolute",
        top: 8,
        left: 0
    },
})