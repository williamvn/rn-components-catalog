import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Switch } from 'react-native-gesture-handler';
import { globalStyles } from '../theme/AppTheme';

export const SwitchScreen = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  
    return (
      <View style={styles.container}>
        <Switch
          trackColor={{false: "#CCCCCC", true: '#4CAF50'}}
          thumbColor={isEnabled ? 'white' : '#f4f3f4'}
          ios_backgroundColor="#CCCCCC"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
        <Text style={globalStyles.label}> {isEnabled? "ON": "OFF"}</Text>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    }
})