import React, { useEffect, useState } from "react";
import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import styles from "./styles";
import { useNavigation } from '@react-navigation/native';

const Api = ({ navigation }) => {
  const [personajes, setPersonajes] = useState([]);
  const [info, setInfo] = useState({});
  const url = "https://rickandmortyapi.com/api/character";

  const getPersonajes = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setPersonajes(data.results);
      setInfo(data.info);
    } catch (err) {
      console.error("Error al obtener personajes:", err);
    }
  };

  useEffect(() => {
    getPersonajes(url);
  }, []);

  const onPrevius = () => {
    if (info.prev) getPersonajes(info.prev);
  };

  const onNext = () => {
    if (info.next) getPersonajes(info.next);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate("Detalles", { id: item.id })}
    >
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
    </TouchableOpacity>
  );

  return ( 
    <View style={styles.container}>
      <FlatList
        data={personajes}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        renderItem={renderItem}
        contentContainerStyle={{ padding: 10 }}
      />

      <View style={styles.pagination}>
        <TouchableOpacity
          style={[styles.button, !info.prev && styles.disabled]}
          onPress={onPrevius}
          disabled={!info.prev}
        >
          <Text style={styles.buttonText}>◀ Prev</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, !info.next && styles.disabled]}
          onPress={onNext}
          disabled={!info.next}
        >
          <Text style={styles.buttonText}>Next ▶</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Api;
