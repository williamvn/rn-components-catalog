import React, { useRef, useState } from 'react'
import { Animated, Button, Easing, StyleSheet, View } from 'react-native'
import { globalStyles } from '../theme/AppTheme';

export const Animation101Screen = () => {
  const opacity = useRef(new Animated.Value(0)).current;
  const top = useRef(new Animated.Value(-200)).current;

  const [toValue, setToValue] = useState(1);
  const toggleFade = () => {
    const topAnimation = Animated.timing(top, { toValue: toValue, duration: 700, useNativeDriver: true, easing: Easing.bounce });
    Animated.timing(opacity, { toValue: toValue, duration: 500, useNativeDriver: true }).start(() => !toValue && topAnimation.reset());
    topAnimation.start();
    setToValue(Number(!toValue));
  }

  return (
    <View style={globalStyles.centerContainer}>
      <Animated.View style={{ ...styles.purpleBox, opacity: opacity, transform: [{ translateY: top }] }}></Animated.View>
      <Button title={toValue ? 'Fade In' : 'Fade Out'} onPress={toggleFade} />
    </View>
  )
}

const styles = StyleSheet.create({
  purpleBox: {
    backgroundColor: '#8A2BE2',
    width: 100,
    height: 100,
    margin: 10
  }
})