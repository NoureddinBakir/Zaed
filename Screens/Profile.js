import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Dimensions, ImageBackground, StyleSheet,FlatList, Text, Button, View, onPress, Image, ScrollView, Pressable, Alert, Platform } from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider, SafeAreaView,useSafeArea } from 'react-native-safe-area-context';
import {styles, margin} from '../components/styles.js';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const CustomData = require('../files/userData.json');
const margins = 10;


export default function Profile(){

  const insets = useSafeArea();

  return(
    <SafeAreaProvider style={[styles.safeAreaViewStyle]}>
    <ScrollView contentContainerStyle={[styles.scrollView, {paddingTop: insets.top, paddingBottom: insets.bottom}]}>
      <View style={styles.header}>
        <Image style={{width: '100%', height: '100%', borderRadius: 100}} source={require('../files/profilePic.png')} />
      </View>
      <View style={{}}>
        <Text style={styles.name}>{CustomData[0].name}</Text>
      </View>
    </ScrollView>
    </SafeAreaProvider>
  );
}
