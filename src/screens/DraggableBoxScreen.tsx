import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const DraggableBoxScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.blueBox}></View>
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
    borderRadius: 4
  }
})