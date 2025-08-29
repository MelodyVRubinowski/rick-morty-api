import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, ActivityIndicator } from 'react-native';
import { useRoute } from '@react-navigation/native';

const Detalles = () => {
    const route = useRoute();
    const { id } = route.params;
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
            .then(res => res.json())
            .then(json => {
                setData(json);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color="#00bfff" />
            </View>
        );
    }

    if (!data) {
        return (
            <View style={styles.container}>
                <Text style={styles.error}>No se encontró información del personaje.</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Image source={{ uri: data.image }} style={styles.image} />
            <Text style={styles.name}>{data.name}</Text>
            <Text style={styles.info}>Especie: {data.species}</Text>
            <Text style={styles.info}>Estado: {data.status}</Text>
            <Text style={styles.info}>Origen: {data.origin?.name}</Text>
        </View>
    );
};
