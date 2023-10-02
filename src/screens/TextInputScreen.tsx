import React, { useState } from 'react'
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native'
import { globalStyles } from '../theme/AppTheme';


export const TextInputScreen = () => {
    const [text, setText] = useState("");

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={globalStyles.centerContainer}>
                    <TextInput
                        style={[styles.input, globalStyles.label]}
                        onChangeText={setText}
                        value={text}
                        placeholder='Write a story'
                        placeholderTextColor={globalStyles.label.color}
                    />
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    input: {
        height: 40,
        margin: 12,
        padding: 10,
    },
});