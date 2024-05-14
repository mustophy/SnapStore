import { Colors } from "@/constants/Colors"
import { textStyles } from "@/styles/textStyles";
import { ReactNode, useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import { CheckMarkIcon } from "./Svgs";


type InputTextProps = {
    placeholder?: string;
    style?: {}
}
export const InputText = ({ placeholder, style } : InputTextProps) => {
    return (
        <TextInput placeholderTextColor={Colors.neutral[400]} placeholder={placeholder} style={[inputTextStyle.textInput, style]}/>
    )
}

type ButtonProps = {
    children: ReactNode;
    onPress?: () => void;
    style?: {}
}
export const PrimaryButton = ({ children, onPress, style }: ButtonProps) => {
    return (
        <TouchableOpacity onPress={onPress} style={[inputTextStyle.buttonContainer, style]}>
            <Text style={[inputTextStyle.buttonText, textStyles.bodyLarge]}>{children}</Text>
        </TouchableOpacity>
    )
}

const inputTextStyle = StyleSheet.create({
    textInput: {
        padding: 16,
        color: Colors.neutral[900],
        fontSize: 14,
        borderRadius: 16,
        backgroundColor: "white",
        borderWidth: 2,
        borderColor: Colors.neutral[300]
    },
    buttonContainer: {
        paddingVertical: 16,
        alignItems: "center",
        flexShrink: 0,
        justifyContent: "center",
        backgroundColor: Colors.neutral[900],
        borderRadius: 10
    },
    buttonText: {
        lineHeight: 24,
        fontWeight: "semibold",
        color: Colors.neutral[50]
    }
})

export const CheckBox = () => {
    const [isActive, setIsActive] = useState(false)
    return (
        <TouchableOpacity style={[checkBoxStyle.container, {backgroundColor: isActive ? Colors.neutral[900] : "transparent"}]} onPress={() => setIsActive(!isActive)}>
            {isActive && <CheckMarkIcon />}
        </TouchableOpacity>
    )
}

const checkBoxStyle = StyleSheet.create({
    container: {
        height: 20,
        width: 20,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 4,
        borderWidth: 1,
        borderColor: Colors.neutral[900]
    }
})