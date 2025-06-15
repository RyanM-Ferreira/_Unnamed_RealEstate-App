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
import Advertisement from './pages/advertisement';


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Profile"
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#e91e63',
        }}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Saved" component={Saved} />
        <Tab.Screen name="Chat" component={Chat} />
        <Tab.Screen name="ChatIn" component={ChatIn} />
        <Tab.Screen name="Greetings" component={Greetings}  />
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name="Settings" component={Settings} />
        <Tab.Screen name="Login" component={Login} />
        <Tab.Screen name="SignUp" component={SignUp} />
        <Tab.Screen name="Advertisement" component={Advertisement} />
      </Tab.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
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
