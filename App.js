import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Image, StyleSheet } from 'react-native';

import StylesGlobal from './stylesGlobal';
import { Colors } from './stylesGlobal';

// For the bottom Tab
import Home from './pages/home';
import Saved from './pages/saved';
import Chat from './pages/chat';
import Settings from './pages/settings';
import Profile from './pages/profile';

// Other Pages
import ChatIn from './pages/chatIn';
import Greetings from './pages/greetings';
import Advertisement from './pages/advertisement';
import Login from './pages/login';
import SignUp from './pages/signup';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: styles.tabBarStyle
        }}>
        <Tab.Screen name="Home" component={Home} options={{ tabBarIcon: ({ color, size }) => (<Image style={styles.tabBarIconStyle} source={require('./assets/icons/normal/homeIcon.svg')} />), }} />
        <Tab.Screen name="Saved" component={Saved} options={{ tabBarIcon: ({ color, size }) => (<Image style={styles.tabBarIconStyle} source={require('./assets/icons/normal/savedIcon.svg')} />), }} />
        <Tab.Screen name="Chat" component={Chat} options={{ tabBarIcon: ({ color, size }) => (<Image style={styles.tabBarIconStyle} source={require('./assets/icons/normal/contactIcon.svg')} />), }} />
        <Tab.Screen name="Settings" component={Settings} options={{ tabBarIcon: ({ color, size }) => (<Image style={styles.tabBarIconStyle} source={require('./assets/icons/normal/settingsIcon.svg')} />), }} />
        <Tab.Screen name="Profile" component={Profile} options={{ tabBarIcon: ({ color, size }) => (<Image style={styles.tabBarIconStyle} source={require('./assets/icons/normal/personIcon.svg')} />), }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tabBarStyle: {
    position: 'absolute',
    margin: 15,
    backgroundColor: '#fff',
    borderRadius: 8,
    height: 48,
    padding: 8,
    borderColor: Colors.primaryColor,
    borderWidth: 2,
  },
  tabBarIconStyle: {
    width: 20,
    margin: 0,
    justifyContent: 'center',
    resizeMode: 'contain',
  }
});