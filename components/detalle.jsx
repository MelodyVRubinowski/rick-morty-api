import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

function Detail({ route }) {
  const { character } = route.params;
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: character.image }} style={styles.image} />
      <Text style={styles.name}>{character.name}</Text>

      <View style={styles.infoBlock}>
        <Text style={styles.label}>🧬 Status:</Text>
        <Text style={styles.value}>{character.status}</Text>
      </View>

      <View style={styles.infoBlock}>
        <Text style={styles.label}>🧪 Species:</Text>
        <Text style={styles.value}>{character.species}</Text>
      </View>

      <View style={styles.infoBlock}>
        <Text style={styles.label}>⚧ Gender:</Text>
        <Text style={styles.value}>{character.gender}</Text>
      </View>

      <View style={styles.infoBlock}>
        <Text style={styles.label}>🌍 Origin:</Text>
        <Text style={styles.value}>{character.origin?.name}</Text>
      </View>

      <View style={styles.infoBlock}>
        <Text style={styles.label}>📍 Location:</Text>
        <Text style={styles.value}>{character.location?.name}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  image: {
    width: 240,
    height: 240,
    borderRadius: 12,
    marginBottom: 16
  },
  name: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center'
  },
  infoBlock: {
    width: '100%',
    marginBottom: 12
  },
  label: {
    fontWeight: 'bold',
    fontSize: 16
  },
  value: {
    fontSize: 16,
    marginTop: 4
  }
});

export default Detail;