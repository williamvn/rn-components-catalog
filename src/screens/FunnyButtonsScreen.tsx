import React, { useContext } from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { globalStyles } from '../theme/AppTheme'
import { TouchableIcon } from '../components/TouchableIcon'
import { DancingButton } from '../components/DancingButton'
import { ThemeContext } from '../contexts/ThemeContext'

export const FunnyButtonsScreen = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <SafeAreaView style={[globalStyles.centerContainer, styles.dspace]}>
      <View>
        <Text style={{ ...globalStyles.textHeader, color: theme.colors.text }}>Dancing Buttons</Text>
        <View style={{ alignItems: 'center' }}>
          <View style={{ width: 150, margin: 10 }}>
            <DancingButton title='Do something' />
          </View>
          <View style={{ width: 150 }}>
            <DancingButton title='Get Your Flight' color="#FFB366" iconName='airplane-sharp' />
          </View>
          <View style={{ width: 100, margin: 10 }}>
            <DancingButton title='Lets go' color="#4CAF50" iconName='baseball-sharp' />
          </View>
        </View>
      </View>
      <View>
        <Text style={{ ...globalStyles.textHeader, color: theme.colors.text }}>Touchable Icons</Text>
        <TouchableIcon iconName='chatbubble-outline' color={globalStyles.purpleText.color} animationRatio={100} effectColor='gray' style={{ margin: 10 }} />
        <TouchableIcon iconName='caret-forward-circle-outline' color="#FFB366" animationRatio={50} effectColor={"#FFB366"} style={{ margin: 10 }} />
        <TouchableIcon iconName='finger-print-outline' color="#4CAF50" animationRatio={150} size={100} effectColor="white" style={{ margin: 10 }} />
      </View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  dspace: {
    justifyContent: "space-around"
  }
});