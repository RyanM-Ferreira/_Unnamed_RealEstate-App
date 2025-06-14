import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './pages/home';
import Saved from './pages/saved';
import Chat from './pages/chat';
import ChatIn from './pages/chatIn';
import Greetings from './pages/greetings';
import Profile from './pages/profile';
import Settings from './pages/settings';
import Login from './pages/login';
import SignUp from './pages/signup';


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
