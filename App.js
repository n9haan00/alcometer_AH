import React, { useState } from 'react';
import {  Button, StyleSheet, Text, TextInput, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import RadioForm from 'react-native-simple-radio-button';


export default function App() {
const [weight, setWeight] = useState(0);
const [bottles, setBottles] = useState(1);
const [hours, setHours] = useState(1);
const [gender, setGender] = useState('male');
const [promilles, setPromilles] = useState(0);


function calculate(){
  let L = bottles * 0.33;
  let grams = L * 8 * 4.5;
  let result;

  grams = grams - weight / 10 * hours

  if (gender === 'male'){
    result = grams / (weight * 0.7)
  } else {
    result = grams / (weight * 0.6)
  }

  if (result < 0){
    result =0;
  }

  setPromilles(result);
}

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Alcometer</Text>
      <View style={styles.field}>
      <Text>Weight</Text>
      <TextInput placeholder="Enter weight" keyboardType="numeric"
       onChangeText={text => setWeight(text)}></TextInput>
      </View>
      
        <Text>Amount of bottles</Text>
      <DropDownPicker zIndex={5000} items={[
        
        {label: '1 bottle', value: 1},
        {label: '2 bottle', value: 2},
        {label: '3 bottle', value: 3},
        {label: '4 bottle', value: 4},
        {label: '5 bottle', value: 5},
        {label: '6 bottle', value: 6},
      ]}
      
      containerStyle={{height: 50}}
      defaultValue={bottles}
      onChangeItem={item => setBottles(item.value)}>
        
      </DropDownPicker>
     
    
      <Text>Time passed</Text>
      <DropDownPicker zIndex={2000} items={[
         {label: '1 hours', value: 1},
         {label: '2 hours', value: 2},
         {label: '3 hours', value: 3},
         {label: '4 hours', value: 4},
         {label: '5 hours', value: 5},
         {label: '6 hours', value: 6},
      ]}
      containerStyle={{height: 50}}
      defaultValue={hours}
      onChangeItem={item => setHours(item.value)}>

      </DropDownPicker>
      
      <View style={styles.field}>
        <Text>Gender</Text>
        <RadioForm 
        radio_props={[
          { label: 'Male', value: 'male'},
          { label: 'Female', value: 'female'}
        ]}onPress={(value) => {setGender(value)}}>

        </RadioForm>
      </View>
      <View style={styles.field}>
        <Text>Promilles</Text>
        <Text>{promilles.toFixed(2)} </Text>
      </View>
      <Button onPress={calculate} title="Calculate"></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 60,
    marginLeft:15,
    marginRight:15,
  },
  field: {
    margin: 15
  },
  title:{
    fontSize: 20
  }
});
