import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Index from './components';

export default function App() {
  return (
    <View style={styles.container}>
      <Index/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#312929ff',
    alignItems: 'center',
    justifyContent: 'center',
    color : 'white'
  },
});
