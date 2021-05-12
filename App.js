import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Dimensions, ImageBackground, StyleSheet,FlatList, Text, Button, View, Image, ScrollView, Pressable, Alert, Platform, } from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Screens/HomeScreen.js';
import Profile from './Screens/Profile.js';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import {styles, margin} from './components/styles.js';

const Stack = createStackNavigator();

function App() {
  return (
    <SafeAreaProvider>
    <NavigationContainer  independent={true}>
      <Stack.Navigator
        screenOptions={{
          headerShown:false
        }}
        initialRouteName="Home">
        <Stack.Screen name="Home" headerMode="none" component={Home} />
        <Stack.Screen name="Profile" headerMode="none" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaProvider>
  );
}
export default App;
