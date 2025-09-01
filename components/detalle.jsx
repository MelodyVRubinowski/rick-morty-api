import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { agregarFavorito } from './storage';
import { Button } from 'react-native';

const Detail = ({ route }) => {
  const { character } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: character.image }} style={styles.image} />
      <Text style={styles.name}>{character.name}</Text>
      <Text style={styles.info}>Status: {character.status}</Text>
      <Text style={styles.info}>Species: {character.species}</Text>
      <Text style={styles.info}>Gender: {character.gender}</Text>
      <Text style={styles.info}>Origin: {character.origin.name}</Text>
    <Button title="Agregar a favoritos" onPress={() => agregarFavorito(character)} />
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff'
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 20
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  },
  info: {
    fontSize: 16,
    marginBottom: 5
  }
});

export default Detail;
