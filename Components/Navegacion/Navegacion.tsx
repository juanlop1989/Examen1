import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Inicio from '../Inicio/Inicio';
import Transferencias from '../Transferencias/Transferencias';
import Historico from '../Historico/Historico';


export default function Navegacion() {

  const tab = createBottomTabNavigator()

  return (
    <NavigationContainer>
        <tab.Navigator>
        <tab.Screen name="Inicio" component={Inicio} ></tab.Screen>
        <tab.Screen name="Transferencias" component={Transferencias} ></tab.Screen>
        <tab.Screen name="Historico" component={Historico} ></tab.Screen>
        </tab.Navigator>
    </NavigationContainer>
   
  )
}
