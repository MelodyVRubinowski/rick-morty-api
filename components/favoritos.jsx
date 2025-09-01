import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import { obtenerFavoritos } from './storage';

const Favoritos = () => {
  const [favoritos, setFavoritos] = useState([]);

  useEffect(() => {
    const cargarFavoritos = async () => {
      const datos = await obtenerFavoritos();
      setFavoritos(datos);
    };
    cargarFavoritos();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tus personajes favoritos</Text>
      <FlatList
        data={favoritos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  card: { marginBottom: 10, alignItems: 'center' },
  image: { width: 100, height: 100, borderRadius: 8 },
  name: { marginTop: 5, fontSize: 16 }
});

export default Favoritos;
