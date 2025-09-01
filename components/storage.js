import AsyncStorage from '@react-native-async-storage/async-storage';

// Guardar última búsqueda
export const guardarBusqueda = async (termino) => {
  try {
    await AsyncStorage.setItem('ultimaBusqueda', termino);
  } catch (error) {
    console.error('Error al guardar búsqueda:', error);
  }
};

export const obtenerBusqueda = async () => {
  try {
    const valor = await AsyncStorage.getItem('ultimaBusqueda');
    return valor;
  } catch (error) {
    console.error('Error al obtener búsqueda:', error);
    return null;
  }
};

// Guardar personaje favorito
export const agregarFavorito = async (personaje) => {
  try {
    const favoritos = await AsyncStorage.getItem('favoritos');
    const lista = favoritos ? JSON.parse(favoritos) : [];
    lista.push(personaje);
    await AsyncStorage.setItem('favoritos', JSON.stringify(lista));
  } catch (error) {
    console.error('Error al guardar favorito:', error);
  }
};

export const obtenerFavoritos = async () => {
  try {
    const favoritos = await AsyncStorage.getItem('favoritos');
    return favoritos ? JSON.parse(favoritos) : [];
  } catch (error) {
    console.error('Error al obtener favoritos:', error);
    return [];
  }
};
