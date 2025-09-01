import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Inicio = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenida a Rick & Morty App</Text>
      <Text style={styles.subtitle}>Explorá personajes y descubrí sus historias</Text>
      <Button title="Comenzar" onPress={() => navigation.navigate('Index')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f0f8ff'
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center'
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center'
  }
});

export default Inicio;
