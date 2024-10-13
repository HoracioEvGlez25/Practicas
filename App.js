import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import SettingsScreen from './src/screens/SettingsScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options ={{title:'Home', headerStyle: {backgroundColor:'red'}, headerTintColor:' #ffffff'}}/>
        <Stack.Screen name="Details" component={DetailsScreen} options ={{title:'Home', headerStyle: {backgroundColor:'red'}, headerTintColor:' #ffffff'}}/>
        <Stack.Screen name="Settings" component={SettingsScreen} options ={{title:'Home', headerStyle: {backgroundColor:'red'}, headerTintColor:' #ffffff'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
