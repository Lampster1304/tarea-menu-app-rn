import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { Text } from 'react-native'

import InicioScreen from './src/screens/InicioScreen'
import SumadoraScreen from './src/screens/SumadoraScreen'
import TraductorScreen from './src/screens/TraductorScreen'
import TablaScreen from './src/screens/TablaScreen'
import ExperienciaScreen from './src/screens/ExperienciaScreen'
import { colores } from './src/theme'

const Drawer = createDrawerNavigator()

// Ícono de cada opción del menú (emoji simple, sin librerías extra)
function icono(emoji) {
  return ({ size }) => <Text style={{ fontSize: (size ?? 22) - 2 }}>{emoji}</Text>
}

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <StatusBar style="light" />
        <Drawer.Navigator
          initialRouteName="Inicio"
          screenOptions={{
            headerStyle: { backgroundColor: colores.azul },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: '700' },
            drawerActiveBackgroundColor: colores.azulClaro,
            drawerActiveTintColor: colores.azulOsc,
            drawerLabelStyle: { fontSize: 15, marginLeft: -8 },
          }}
        >
          <Drawer.Screen
            name="Inicio"
            component={InicioScreen}
            options={{ title: 'Página Inicial', drawerIcon: icono('🏠') }}
          />
          <Drawer.Screen
            name="Sumadora"
            component={SumadoraScreen}
            options={{ title: 'Sumadora', drawerIcon: icono('➕') }}
          />
          <Drawer.Screen
            name="Traductor"
            component={TraductorScreen}
            options={{ title: 'Números a Letras', drawerIcon: icono('🔤') }}
          />
          <Drawer.Screen
            name="Tabla"
            component={TablaScreen}
            options={{ title: 'Tabla de Multiplicar', drawerIcon: icono('✖️') }}
          />
          <Drawer.Screen
            name="Experiencia"
            component={ExperienciaScreen}
            options={{ title: 'Experiencia Personal', drawerIcon: icono('🎬') }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  )
}
