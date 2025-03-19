import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import { Button, View, Text, StyleSheet, SafeAreaView, TextInput } from 'react-native';
import AuthHomeScreen from './src/screens/AuthHomeScreen';
import AuthStackNavigator from './src/navigation/AuthStackNavigator';

const App = () => {
  const [name, setName] = useState('');


  const handleChangeInput = (text: string) => {
    console.log(text);
    setName(text);
  }
  return (
    <SafeAreaView>
      <NavigationContainer>
        <AuthStackNavigator />
      </NavigationContainer>
    </SafeAreaView>



  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  input: {
    flex: 1,
    borderWidth: 2,
    borderColor: 'black',
    width: 100,
    height: 50,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
});

export default App;
