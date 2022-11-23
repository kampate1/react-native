import React, { useState } from "react";
import { Text, View, StyleSheet,Image, ScrollView, StatusBar, TextInput, SafeAreaView,Button, Switch, FlatList } from 'react-native';
import Constants from 'expo-constants';
// You can import from local files
import AssetExample from './components/AssetExample';
// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
export default function
App() {
 const [firstN, onChangeFN] = React.useState("" )
 const [lastN, onChangeLN] = React.useState("")
 const [email, onChangeEmail] = React.useState("")
 const [title, onChangeTitle] = React.useState("Submit")
 var onPressed = () => {   onChangeTitle("Thank You")  
                           this.textInput1.clear()
                           this.textInput2.clear()
                           this.textInput3.clear()}
 
 return (
   <View style={mystyle.pinkie}>
     <TextInput ref={input => { this.textInput1 = input }}
     style={mystyle.input}
     placeholder={"First Name"}
     onChangeText={onChangeFN}>
     </TextInput>
     <TextInput ref={input => { this.textInput2 = input }}
     style={mystyle.input}
     placeholder={"Last Name"}
     onChangeText={onChangeLN}>
     </TextInput>
      <TextInput  ref={input => { this.textInput3 = input }}
     style={mystyle.input}
     placeholder={"example@gmail.com"}
     onChangeText={onChangeEmail}>
     </TextInput>
     <Button title={title} onPress={onPressed}/>
   </View>
 );
}

const mystyle = StyleSheet.create(
 {
   pinkie:{backgroundColor:"pink", ...StyleSheet.absoluteFill},
   input:{height: 40,
   margin: 12,
   borderWidth: 1,
   padding:10,
   backgroundColor:"white"},
   print: {textAlign: "center"}
 }
);
