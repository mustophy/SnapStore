import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const textStyles = StyleSheet.create({
    heading1: {
        fontWeight: "bold",
        fontSize: 48,
        lineHeight: 52,
        color: Colors.neutral[900]
    },
    heading2: {
        fontWeight: "bold",
        fontSize: 40,
        lineHeight: 44,
        color: Colors.neutral[900]
    },
    heading3: {
        fontWeight: "bold",
        fontSize: 32,
        lineHeight: 42,
        color: Colors.neutral[900]
    },
    heading4: {
        fontWeight: "bold",
        fontSize: 24,
        lineHeight: 32,
        color: Colors.neutral[900]
    },
    heading5: {
        fontWeight: "bold",
        fontSize: 20,
        lineHeight: 24,
        color: Colors.neutral[900]
    },
    heading6: {
        fontWeight: "bold",
        fontSize: 18,
        lineHeight: 22,
        color: Colors.neutral[900]
    },
    heading7: {
        fontWeight: "bold",
        fontSize: 16,
        lineHeight: 18,
        color: Colors.neutral[900]
    },
    bodyXlarge: {
        fontWeight: "regular",
        fontSize: 18,
        lineHeight: 27,
        letterSpacing: 0.3,
        color: Colors.neutral[900]
    },
    bodyLarge: {
        fontWeight: "regular",
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0.3,
        color: Colors.neutral[900]
    },
    bodyMedium: {
        fontWeight: "regular",
        lineHeight: 22,
        fontSize: 14,
        letterSpacing: 0.3,
        color: Colors.neutral[900]
    },
    bodySmall: {
        fontWeight: "regular",
        fontSize: 12,
        lineHeight: 18,
        letterSpacing: 0.3,
        color: Colors.neutral[900]
    },
    bodyXsmall: {
        fontWeight: "regular",
        fontSize: 10,
        lineHeight: 15,
        letterSpacing: 0.3,
        color: Colors.neutral[900]
    }
})