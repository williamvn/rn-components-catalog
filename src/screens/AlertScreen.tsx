import React from 'react'
import { Alert, Button, Platform, Text, View } from 'react-native'
import { globalStyles } from '../theme/AppTheme'
import prompt from 'react-native-prompt-android';

export const AlertScreen = () => {
    const showAlert = () => Alert.alert('Alert Title', "This is an alert message, did you understand?", [
        { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'destructive' },
        { text: 'Ok', onPress: () => console.log('Ok Pressed'), style: 'default' },
    ], { cancelable: true });

    const showNativeIOsPrompt = () => Alert.prompt(
        "IOS Prompt",
        "Enter Password",
        (value: string) => console.log("info:", value),
        'login-password',
        'Default Value'
    );

    const showPrompt = () => prompt( //external package, not recommended but hey here it is
        'Enter password',
        'Enter your password to claim your $1.5B in lottery winnings',
        [
            { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
            { text: 'OK', onPress: password => console.log('OK Pressed, password: ' + password) },
        ],
        {
            type: 'secure-text',
            cancelable: false,
            defaultValue: 'test',
            placeholder: 'placeholder'
        });

    return (
        <View style={globalStyles.centerContainer}>
            <Button title='Alert 1' onPress={showAlert} />
            <View style={{margin: 5}}></View>
            <Button title='Prompt' onPress={showPrompt} />
            <View style={{margin: 5}}></View>
            {Platform.OS === 'ios' && <Button title='Native IOS Prompt ' onPress={showNativeIOsPrompt} />}
        </View>
    );
}