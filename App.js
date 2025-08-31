import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Index from './components';
import Detalle from './components/detalles';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

import Detalle from './components/';

import Detalles from './Detalle';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
<<<<<<< HEAD
      <Stack.Navigator initialRouteName="List">
        <Stack.Screen name="List" component={Index} />
       <Stack.Screen name="Detail" component={Detalle} />
=======
      <Stack.Navigator>
        <Stack.Screen name="Personajes" component={Index} />
        <Stack.Screen name="Detalles" component={Detalles} />
>>>>>>> 18e5c20562f572a2b3b8f193fa185183d5781672
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#312929ff',
    alignItems: 'center',
    justifyContent: 'center',
    color : 'white'
  },
});