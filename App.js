import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Inicio from './components/inicio';
import Index from './components/index';     
import Detail from './components/detalle';  
import Favoritos from './components/favoritos';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio">
         <Stack.Screen
          name="Inicio"
          component={Inicio}
        />
        <Stack.Screen
          name="Index"
          component={Index}
        />
        <Stack.Screen
          name="Detail"
          component={Detail}
          />
          <Stack.Screen
  name="Favoritos"
  component={Favoritos}
/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
