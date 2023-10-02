import React, { useState } from 'react'
import { KeyboardTypeOptions, StyleSheet, Text, TextInput, View } from 'react-native'
import { globalStyles } from '../theme/AppTheme';

interface InputProps {
    title: string;
    placeholder?: string;
    value?: string;
    keyboardType?: KeyboardTypeOptions;
    valueChange: (value: string) => void;
}

export const CustomInput = ({ title, placeholder, value, valueChange, keyboardType }: InputProps) => {
    return (
        <View style={styles.inputWrapper}>
            <Text style={globalStyles.label}>{title}</Text>
            <TextInput
                style={[styles.input, globalStyles.label]}
                onChangeText={valueChange}
                value={value}
                placeholder={placeholder}
                placeholderTextColor={globalStyles.label.color}
                keyboardType={keyboardType}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    inputWrapper: {
        marginBottom: 10
    },
    input: {
        height: 40,
        padding: 10,
        borderWidth: 1,
        borderRadius: 4,
        borderColor: globalStyles.label.color,
        marginTop: 5
    },
});