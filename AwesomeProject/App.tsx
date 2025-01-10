/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type { PropsWithChildren } from 'react';
import Color from './components/Color';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';



function App() {


  return (<>

    <Text style={{ fontSize: 20 }}>React Native Application</Text>
    <Text>hiii</Text>
    <Button title='press here'>
    </Button>
    <View>
      <Text style={{ fontSize: 20 }}>React Native Application</Text>
      <Text>hiii</Text>
    </View>
    <Color/>
  </>

  );
}

export default App;
