import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Welcome from './src/screens/welcome';
import Signin from './src/screens/login';
import Signup from './src/screens/register';
import Home from './src/screens/home';
import Meme from './src/screens/meme';
import Carbon from './src/screens/carbon';
import Food from './src/screens/food';
import Dishes from './src/screens/dishes';
import Match from './src/screens/match';
import Matched from './src/screens/matched';
import Chat from './src/screens/chat';


const Stack = createStackNavigator();


function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="Welcome"
    >
      <Stack.Screen 
        name="Welcome" 
        component={Welcome} 
        options={{ headerShown: false}} 
      />
      <Stack.Screen 
        name="Signin" 
        component={Signin} 
        options={{ headerShown: false}} 
      />
      <Stack.Screen 
        name="Signup" 
        component={Signup} 
        options={{ headerShown: false}} 
      />
      <Stack.Screen 
        name="Home" 
        component={Home} 
        options={{ headerShown: false}} 
      />
      <Stack.Screen 
        name="Meme" 
        component={Meme} 
        options={{ headerShown: false}} 
      />
       <Stack.Screen 
        name="Carbon" 
        component={Carbon} 
        options={{ headerShown: false}} 
      />
      <Stack.Screen 
        name="Food" 
        component={Food} 
        options={{ headerShown: false}} 
      />
      <Stack.Screen 
        name="Dishes" 
        component={Dishes} 
        options={{ headerShown: false}} 
      />
      <Stack.Screen 
        name="Match" 
        component={Match} 
        options={{ headerShown: false}} 
      />
      <Stack.Screen 
        name="Matched" 
        component={Matched} 
        options={{ headerShown: false}} 
      />
     <Stack.Screen 
        name="Chat" 
        component={Chat} 
        options={{ headerShown: false}} 
      />
    
     
      
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}