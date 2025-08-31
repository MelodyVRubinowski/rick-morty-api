import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const Detalle = ({ route, navigation }) => {
  const personaje = route?.params?.personaje;

  if (!personaje) {
    return (
      <View style={styles.container}>
        <Text style={styles.error}>No se recibió ningún personaje</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: personaje.image }} style={styles.image} />
      <Text style={styles.name}>{personaje.name}</Text>
      <Text style={styles.info}>🧬 Species: {personaje.species}</Text>
      <Text style={styles.info}>❤️ Status: {personaje.status}</Text>
      <Text style={styles.info}>⚧ Gender: {personaje.gender}</Text>
      <Text style={styles.info}>🌍 Origin: {personaje.origin?.name}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#312929ff',
    flexGrow: 1
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 20
  },
  name: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10
  },
  info: {
    fontSize: 18,
    color: 'white',
    marginBottom: 5
  },
  error: {
    fontSize: 18,
    color: 'red'
  }
});

export default Detalle;
