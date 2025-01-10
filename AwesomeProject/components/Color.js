import React from 'react'
import { Text, View ,useColorScheme,StyleSheet, Image, TextInput} from 'react-native'

const Color = () => {
    const isDarkMode = useColorScheme() === "dark"
    const getFullName = (firstName, secondName) => {
        return firstName + ' ' + secondName  ;
      };
      const Cat = props => {
        return(
            <View>
                <Text>Hello , I am {props.name}</Text>
            </View>
        )
      }
  return (
   <View style={styles.container}>
    <Text style={styles.textarea}>Color Scheme</Text>
    <Image
        source={{
          uri: 'https://reactnative.dev/docs/assets/p_cat1.png',
        }}
        style={{width: 200, height: 200,backgroundColor:"red"}}
      />
      <Text>{getFullName("Rajaram","Sahoo")}</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
        }}
        defaultValue="Name me!"
      />
<Cat name="meru"/>
<Cat name="raja's cat"/>

   </View>
  )
}
const styles = StyleSheet.create({
container:{
    flex:1,
    alignItems:"center",
    justifyContent:"center",


},
textarea :{
    color:"red",
}
})
export default Color
// know about the View,Text Compoents they are not the html elemnent they are components