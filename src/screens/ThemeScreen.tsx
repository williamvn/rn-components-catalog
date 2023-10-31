import React, { useContext } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon from "react-native-vector-icons/Ionicons";
import { globalStyles } from '../theme/AppTheme';
import { ThemeContext } from '../contexts/ThemeContext';

export const ThemeScreen = () => {
    const { theme, setDarkTheme, setLightTheme } = useContext(ThemeContext);

    return (
        <View style={globalStyles.centerContainer}>
            <TouchableOpacity onPress={() => theme.currentTheme === 'dark' ? setLightTheme() : setDarkTheme()}>
                <View style={{ ...styles.button, backgroundColor: theme.currentTheme === 'dark'? theme.colors.card: theme.colors.notification }}>
                    <Icon name="sunny-outline" color={theme.currentTheme === 'dark'? "white" : "yellow"} size={50}></Icon>
                </View>
            </TouchableOpacity>
            <Text style={{color: theme.colors.text}}>On / Off</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    button: {
        borderRadius: 5,
        backgroundColor: '#CCCCCC',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center'
    }
})