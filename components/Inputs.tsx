import { Colors } from "@/constants/Colors"
import { textStyles } from "@/styles/textStyles";
import { ReactNode, useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import { CheckMarkIcon } from "./Svgs";


type InputTextProps = {
    placeholder?: string;
    style?: {};
    value?: string;
    maxLength?: number;
    onChangeText?: (text: string) => void;
    dark?: boolean
}
export const InputText = ({ placeholder, dark, style, onChangeText, value, maxLength = 30 }: InputTextProps) => {
    return (
        <TextInput
            value={value}
            onChangeText={onChangeText}
            placeholderTextColor={dark ? Colors.neutral[500] : Colors.neutral[900]}
            placeholder={placeholder}
            maxLength={maxLength}
            style={[
                inputTextStyle.textInput,
                dark && { ...inputTextStyle.darkContainer, ...inputTextStyle.darkText },
                style
            ]} />
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
            <Text style={[textStyles.bodyLarge, inputTextStyle.buttonText]}>{children}</Text>
        </TouchableOpacity>
    )
}

type SwitchProps = {
    isActive?: boolean;
    setIsActive: (isActive: boolean) => void
}
export const Switch = ({ isActive = false, setIsActive }: SwitchProps) => {
    return (
        <Pressable style={[SwitchStyle.container, isActive && SwitchStyle.activeContainer]} onPress={() => setIsActive(!isActive)}>
            <View style={[SwitchStyle.switch]}>

            </View>
        </Pressable>
    )
}

const SwitchStyle = StyleSheet.create({
    container: {
        height: 24,
        width: 44,
        backgroundColor: Colors.neutral[300],
        borderRadius: 1000,
        justifyContent: "flex-start",
        padding: 2
    },
    activeContainer: {
        backgroundColor: "#00AB67",
        flexDirection: "row",
        justifyContent: "flex-end"
    },
    switch: {
        height: "100%",
        aspectRatio: 1,
        borderRadius: 20,
        backgroundColor: Colors.neutral[100]
    }
})

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
    darkContainer: {
        backgroundColor: Colors.neutral[900]
    },
    buttonText: {
        lineHeight: 24,
        fontWeight: "semibold",
        color: Colors.neutral[50]
    },
    darkText: {
        color: Colors.neutral[50]
    }
})

export const CheckBox = () => {
    const [isActive, setIsActive] = useState(false)
    return (
        <TouchableOpacity style={[checkBoxStyle.container, { backgroundColor: isActive ? Colors.neutral[900] : "transparent" }]} onPress={() => setIsActive(!isActive)}>
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