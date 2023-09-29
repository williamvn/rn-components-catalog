import React from 'react'
import { Alert, Button, Platform, Text, View } from 'react-native'
import { globalStyles } from '../theme/AppTheme'

export const AlertScreen = () => {
    const showAlert = () => Alert.alert('Alert Title', "This is an alert message, did you understand?", [
        { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'destructive' },
        { text: 'Ok', onPress: () => console.log('Ok Pressed'), style: 'default' },
    ], { cancelable: true });

    const showPrompt = () => Alert.prompt(
        "IOS Prompt",
        "some message",
        (value: string) => console.log("info:", value),
        'login-password',
        'Default Value'
    )

    return (
        <View style={globalStyles.centerContainer}>
            <Button title='Alert 1 ' onPress={showAlert} />
            {Platform.OS === 'ios' && <Button title='IOS Prompt ' onPress={showPrompt} />}
        </View>
    );
}