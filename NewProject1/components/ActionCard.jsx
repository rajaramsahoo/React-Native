import { Image, StyleSheet, Text, View, TouchableOpacity, Linking } from 'react-native'
import React from 'react'
import ElevatedCard from './ElevatedCard'

export default function ActionCard() {
  const openWebsite = (url) => {
    Linking.openURL(url)
  }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>
            What Is new in react-native
          </Text>
        </View>
        <Image source={{
          uri: "https://i.ibb.co/k8J1fnW/Whats-App-Image-2024-06-29-at-11-10-45-4d56e422.jpg"
        }} style={styles.cardImage} />
        <View style={styles.bodyContainer}>
          <Text numberOfLines={5}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit consectetur ipsam rerum recusandae voluptatibus mollitia ipsa cupiditate necessitatibus nam sed incidunt esse eaque amet, reiciendis libero sapiente blanditiis ex maxime?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque maiores molestiae sit officiis explicabo eos fuga nulla dolorum adipisci cum vitae ab, voluptates voluptatum, libero consequuntur provident repudiandae temporibus quaerat.
          </Text>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity onPress={() => openWebsite("https://portfolio.rajaramsahoo.in/")}>
            <Text style={styles.socialLink}>
              Visit My World
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => openWebsite("https://github.com/rajaramsahoo")}>
            <Text style={styles.socialLink}>
              Follow Me
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: "bold",
    paddingHorizontal: 8,
    color:"#333945"
  },
  card: {
    width: 350,
    height: 480,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 30,
  },
  elevatedCard: {
    backgroundColor: "#EAF0F1"

  },
  headingContainer: {
    height: 40,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  cardImage: {
    height: 250,
    marginBottom: 8
  }, headerText: {
    color: "#43BE31"
  },
  bodyContainer: {
    padding: 10
  },
  footerContainer: {
    padding: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly"
  },

  socialLink: {
    fontSize: 18,
    color: "white",
    backgroundColor:"#53E0BC"
  }
})