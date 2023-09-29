import React, { useRef } from 'react'
import { Animated, PanResponder, StyleSheet, Text, View } from 'react-native'

export const DraggableBoxScreen = () => {
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }], { useNativeDriver: false }),
    onPanResponderRelease: () => {
      Animated.spring(pan, { toValue: { x: 0, y: 0 }, useNativeDriver: false }).start()
    }
  });

  return (
    <View style={styles.container}>
      <Animated.View {...panResponder.panHandlers} style={[styles.blueBox, pan.getLayout()]}></Animated.View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  blueBox: {
    backgroundColor: "#A6E7FF",
    width: 100,
    height: 100,
    borderRadius: 6
  }
})