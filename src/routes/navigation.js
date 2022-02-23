
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScreenHome from '../screens/Home/ScreenHome';
import ScreenDetails from '../screens/Details/ScreenDetails';

const Stack = createNativeStackNavigator();

export default()=> {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
       headerShown: false
      }}>
        <Stack.Screen name="Home" component={ScreenHome} />
        <Stack.Screen name="Details" component={ScreenDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

