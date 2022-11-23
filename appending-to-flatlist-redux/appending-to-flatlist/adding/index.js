import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  StatusBar,
  FlatList, 
  SafeAreaView, 
  ScrollView
} from 'react-native';
import { connect } from 'react-redux';
import { useState } from 'react';
import { Add } from '../redux/actions/index';

const print = ({item}) => {
  return (
    <View>
      <Text style={styles.item}>{item}</Text>
    </View>
  )
}

const Adding = ({ list, Add}) => {
  const [output, setOutput] = useState('');
  return(
    <SafeAreaView style={styles.container}>
        <TextInput
            style={styles.input}
            onChangeText={setOutput}
            multiline
            value={output}
            placeholder={"Enter Value Here"}
            textAlign={'center'}
          />
          <Button 
            title="Add VaLues to Flatlist"
            disabled={ output.length >= 1 ? false : true}
            onPress={() => {
              Add(output)
              setOutput('')}}
            style={styles.button}
          />
      
      <FlatList
      data={list}
      renderItem={print}
      
      />
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  input: {
    borderWidth: 2,
    padding: '5px',
    marginLeft: '15%',
    borderColor: "green",
    borderRadius: 5,
    height: '30',
    width: '70%',
    position: 'center',
    marginBottom: '5px',
    marginTop: '5px',
  },
  item:{
    margin:5,
    borderColor:"black",
    padding:10,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius:5,
    backgroundColor:"lightgreen",  
    
  },
  button: {
    color: "green",
    borderRadius: 5,
    backgroundColor: "green",
    padding:10,
    margin: 5
  },
  container: {
    padding: StyleSheet.hairlineWidth * 10,
    paddingTop: StatusBar.currentHeight,
  },
});

const mapDispatch = { Add };
const mapState = (state) => ({ list: state.adder.list });
export default connect(mapState, mapDispatch)(Adding);