import React, { useState } from "react";
import { Text, View, StyleSheet,Image, ScrollView, StatusBar, TextInput, SafeAreaView,Button, Switch, FlatList } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
          <Stack.Screen name="Register" component={HomeScreen} />
          <Stack.Screen name="Thank You" component={ThankYouScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const HomeScreen = ({ navigation }) => {
  const [firstN, onChangeFN] = React.useState("")
 const [lastN, onChangeLN] = React.useState("")
 const [email, onChangeEmail] = React.useState("")
 const [password, onChangePassword] = React.useState("")
 
  return (
    <View style={styles.container}>
      <TextInput
      style={styles.input}
      placeholder="First Name"
      onChangeText={onChangeFN}>
      </TextInput>

      <TextInput
      style={styles.input}
      placeholder="Last Name"
      onChangeText={onChangeLN}>
      </TextInput>

        <TextInput
      style={styles.input}
      placeholder="Email"
      onChangeText={onChangeEmail}>
      </TextInput>

      <TextInput
      style={styles.input}
      secureTextEntry={true}
      placeholder="Password"
      onChangeText={onChangePassword}>
      </TextInput>

      <Button 
      title={"Registor"}  
      disabled={ firstN.length > 0 && lastN.length > 0 && email.length > 0 && password.length > 8 ? false : true}
      onPress={() => {
        navigation.navigate('Thank You', {email: email, fName: firstN, lName: lastN})
        }}/>
    </View>
  );
};


const ThankYouScreen = ({ navigation, route }) => {
  const { email, fName, lName} = route.params;
  return (
    <View style={styles.container}>
      <Text>Thank you, {fName} {lName}, for registering with us! We have sent you an email at {email}</Text>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    padding: 20,
  },
  input:{height: 40,
   margin: 12,
   borderBottomWidth: 1,
   padding:10,
   backgroundColor:"white"},
});
