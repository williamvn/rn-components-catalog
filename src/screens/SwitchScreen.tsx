import React, { useContext, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Switch } from 'react-native-gesture-handler';
import { globalStyles } from '../theme/AppTheme';
import { ThemeContext } from '../contexts/ThemeContext';

export const SwitchScreen = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const { theme } = useContext(ThemeContext);
  
  return (
    <View style={[globalStyles.centerContainer, styles.displayRow]}>
      <Switch
        trackColor={{ false: "#CCCCCC", true: theme.colors.primary }}
        thumbColor={isEnabled ? 'white' : '#f4f3f4'}
        ios_backgroundColor="#CCCCCC"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      <Text style={globalStyles.label}> {isEnabled ? "ON" : "OFF"}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  displayRow: {
    flexDirection: 'row'
  }
})