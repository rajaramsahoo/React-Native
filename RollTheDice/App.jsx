/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import DiceOne from "./assets/One.png"
import DiceTwo from './assets/Two.png'
import DiceThree from './assets/Three.png'
import DiceFour from './assets/Four.png'
import DiceFive from './assets/Five.png'
import DiceSix from './assets/Six.png'

function App() {
  const [diceImage, setDiceImage] = useState()
  // console.log(DiceOne)
  const rollTheDice = () => {
    let randomNumber = Math.floor(Math.random() * 6) + 1
    switch (randomNumber) {
      case 1:
        setDiceImage(DiceOne)
        break;
      case 2:
        setDiceImage(DiceTwo)
        break;
      case 3:
        setDiceImage(DiceThree)
        break;
      case 4:
        setDiceImage(DiceFour)
        break;
      case 5:
        setDiceImage(DiceFive)
        break;
      case 6:
        setDiceImage(DiceSix)
        break;
      default:
        setDiceImage(DiceOne)
        break;
    }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Roll The Dice</Text>
      <View style={styles.diceContainer}>
        <Image source={diceImage} style={styles.diceImage} />

      </View>
      <Pressable
        onPress={rollTheDice}
      >
        <Text
          style={styles.rollDiceBtnText}
        >
          Roll 
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF2F2',
  },
  diceContainer: {
    margin: 12,
  },
  diceImage: {
    width: 200,
    height: 200,
  },
  rollDiceBtnText: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#E5E0FF',
    fontSize: 16,
    color: '#487EB0',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  headingText:{
    color: '#74B9FF',
    fontSize: 20,
    fontWeight: '900',

  }
});

export default App;
