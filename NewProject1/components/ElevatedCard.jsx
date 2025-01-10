import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCard() {
  return (
    <View>
      <Text style={styles.headingText}>ElevatedCard</Text>
      <ScrollView style={styles.container} horizontal={true} showsHorizontalScrollIndicator={false} >
        <View style={[styles.card, styles.cardElevated]}>
          <Text >TAP </Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text >me </Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text >to </Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text >scroll </Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text >More</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text >😁</Text>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 22,
    fontWeight: "bold",
    paddingHorizontal: 10,
  },
  container: {
    padding: 8,

  },
  card: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    height: 100,
    borderRadius: 10,
    margin:8,
  },
  cardElevated: {
    backgroundColor: "#CAD5E2",
    elevation:4,
    shadowColor:"green"
  },
})