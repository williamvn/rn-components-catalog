import React, { useState } from 'react'
import { ActivityIndicator, FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'

export const InfinityScrollScreen = () => {
  const [data, setData] = useState(Array.from({ length: 20 }, (_, i) => i + 1));

  const loadMoreData = () => {
    console.log("Loading More Data!")
    setTimeout(() => {
      setData((arr) => [...arr, ...Array.from({ length: 20 }, (_, i) => i + arr[arr.length - 1] + 1)])
    }, 5000);
  }

  return (
    <SafeAreaView>
      <FlatList
        data={data}
        renderItem={({ item }) => <View style={styles.cell}><Text>{item}</Text></View>}
        ItemSeparatorComponent={() => <View style={{ borderBottomWidth: 1, opacity: 0.4, borderColor: "gray" }}></View>}
        onEndReached={() => loadMoreData()}
        onEndReachedThreshold={0.1}
        ListFooterComponent={() => <View style={{height: 60}}>
          <ActivityIndicator size={25} color="#B19CD9" />
        </View>}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  cell: {
    height: 40,
    padding: 10,
    alignItems: 'center'
  }
});