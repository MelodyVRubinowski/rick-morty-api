import React, { useEffect, useState } from "react";
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';

const Api = () => {
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
const navigation = useNavigation();

const renderItem = ({ item }) => (
  <TouchableOpacity
    style={styles.card}
    onPress={() => navigation.navigate("Detail", { personaje: item })}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  card: {
    flex: 1,
    margin: 8,
    padding: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    alignItems: "center",
    maxWidth: "45%"
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 8
  },
  name: {
    marginTop: 8,
    fontWeight: "bold",
    textAlign: "center"
  },
  pagination: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10
  },
  button: {
    backgroundColor: "#007bff",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8
  },
  disabled: {
    backgroundColor: "#ccc"
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold"
  }
});

export default Api;
