import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CalendarScreen from './screens/CalendarScreen';
import DayScreen from './screens/DayScreen';
import EditScreen from './screens/EditScreen';
import PendingScreen from './screens/PendingScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Calendario" component={CalendarScreen} />
        <Stack.Screen name="Día" component={DayScreen} />
        <Stack.Screen name="Editar" component={EditScreen} />
        <Stack.Screen name="Pendientes" component={PendingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
