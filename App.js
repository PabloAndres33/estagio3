import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Home, Login, Cadastro, Principal} from './views';
import {Test} from './views';


export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} 
          options={{
            title:"Bem Vindo ao TechPhone!",
            headerStyle:{backgroundColor:"#8c52ff"},
            headerTintColor:'#333',
            headerTitleStyle:{fontWeight:'bold', alignSelf:'center'}
            }}/>
          <Stack.Screen name="Login" options={{headerShown:false}} component={Login} />
          <Stack.Screen name="Cadastro" options={{headerShown:false}} component={Cadastro} />
          <Stack.Screen name="Principal" component={Principal} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
