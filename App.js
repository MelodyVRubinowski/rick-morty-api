import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Index from './components';     
import Detail from './components/detalle';  

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Index">
        <Stack.Screen
          name="Index"
          component={Api}
          options={{ title: 'Personajes' }}
        />
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={{ title: 'Detalle del personaje' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
