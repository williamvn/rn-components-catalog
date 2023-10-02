import React, { useState } from 'react'
import { Platform, StyleSheet, Switch, Text, View } from 'react-native'
import { globalStyles } from '../theme/AppTheme';

interface SwitchProps {
    title: string;
    disabledTitle?: string;
    onChange: (isEnables: boolean) => void;
    value: boolean;
}

export const CustomSwitch = ({ value, onChange, title, disabledTitle }: SwitchProps) => {
    const [isEnabled, setIsEnabled] = useState(value);
    const toggleSwitch = () => {
        setIsEnabled(previousState => !previousState);
        onChange(!isEnabled);
    }
    const titleEl = <Text style={globalStyles.label}> {isEnabled ? title : (disabledTitle ?? title)}</Text>;
    return (
        <View style={styles.displayRow}>
            {Platform.OS === 'android' && titleEl}
            <Switch
                trackColor={{ false: "#CCCCCC", true: '#4CAF50' }}
                thumbColor={isEnabled ? 'white' : '#f4f3f4'}
                ios_backgroundColor="#CCCCCC"
                onValueChange={toggleSwitch}
                value={isEnabled}
            />
            {Platform.OS === 'ios' && titleEl}
        </View>
    );
}

const styles = StyleSheet.create({
    displayRow: {
        flexDirection: 'row',
        alignItems: 'center'
    }
});