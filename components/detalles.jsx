import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const Detalle = ({ route }) => {
  const { personaje } = route.params;

  const getStatusColor = (status) => {
    switch (status) {
      case 'Alive':
        return '#28a745';
      case 'Dead':
        return '#dc3545';
      default:
        return '#6c757d';
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContent}>
      <Image source={{ uri: personaje.image }} style={styles.image} />
      <View style={styles.card}>
        <Text style={styles.name}>{personaje.name}</Text>

        <View style={styles.infoRow}>
          <Text style={styles.label}>Status:</Text>
          <Text style={[styles.badge, { backgroundColor: getStatusColor(personaje.status) }]}>
            {personaje.status}
          </Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.label}>Species:</Text>
          <Text style={styles.value}>{personaje.species}</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.label}>Gender:</Text>
          <Text style={styles.value}>{personaje.gender}</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.label}>Origin:</Text>
          <Text style={styles.value}>{personaje.origin?.name || 'Unknown'}</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.label}>Location:</Text>
          <Text style={styles.value}>{personaje.location?.name || 'Unknown'}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContent: {
    padding: 20,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
  },
  image: {
    width: 220,
    height: 220,
    borderRadius: 12,
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    width: '100%',
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  infoRow: {
    flexDirection: 'row',
    marginVertical: 6,
    alignItems: 'center',
  },
  label: {
    fontWeight: '600',
    width: 90,
    color: '#333',
  },
  value: {
    fontSize: 16,
    color: '#555',
    flexShrink: 1,
  },
  badge: {
    color: '#fff',
    fontWeight: 'bold',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    overflow: 'hidden',
  },
});

export default Detalle;
