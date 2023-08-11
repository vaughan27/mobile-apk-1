import * as React from 'react';
import { NativeBaseProvider, Box, Input } from "native-base";


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Components/Home/HomeScreen';
import DetailsScreen from './Components/Details/DetailsScreen';


const Stack = createNativeStackNavigator();

function App() {
  return (
    
    <NavigationContainer>

      <NativeBaseProvider>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
      </NativeBaseProvider> 

    </NavigationContainer>
  );
}

export default App;
