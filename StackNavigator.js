import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import TripsScreen from './screens/TripsScreen';
import MessagesScreen from './screens/MessagesScreen';
import ProfilesScreen from './screens/ProfilesScreen';
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';
import { NavigationContainer } from "@react-navigation/native";

import SearchScreen from './screens/SearchScreen';
import ResultScreen from './screens/ResultScreen';
import DestinationsScreen from './screens/DestinationsScreen';
import PlacesScreen from './screens/PlacesScreen';
import CreateAdScreen from './screens/CreateAdScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';


const StackNavigator = () => {
  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();

  function BottomTabs() {
    return (
      <Tab.Navigator>
        <Tab.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ 
            tabBarLabel: "Home",
            headerShown: false, 
            tabBarIcon:({focused}) => 
              focused ? (
          <Entypo name="home" size={24} color="#fd5c63" />
        ):(
          <AntDesign name="home" size={24} color="black" />
        ) }} 
         />

      <Tab.Screen 
        name="Favorites" 
        component={FavoritesScreen} 
        options={{ 
          tabBarLabel: "Favorites", 
          headerShown: false, 
          tabBarIcon:({focused}) => 
            focused ? (
          <AntDesign name="heart" size={24} color="#fd5c63" />
        ):(
          <AntDesign name="hearto" size={24} color="black" />
        ) }} 
         />

      <Tab.Screen 
        name="Trips" 
        component={TripsScreen} 
        options={{ 
          tabBarLabel: "Trips", 
          headerShown: false, 
          tabBarIcon:({focused}) => 
            focused ? (
          <FontAwesome6 name="airbnb" size={24} color="#fd5c63" />
        ):(
          <FontAwesome6 name="airbnb" size={24} color="black" />
        ) }} 
         />

      <Tab.Screen 
        name="Messages" 
        component={MessagesScreen} 
        options={{ 
          tabBarLabel: "Messages", 
          headerShown: false, 
          tabBarIcon:({focused}) => 
            focused ? (
          <MaterialCommunityIcons name="message" size={24} color="#fd5c63" />
        ):(
          <Feather name="message-square" size={24} color="black" />
        ) }} 
         />

      <Tab.Screen 
        name="Profile" 
        component={ProfilesScreen} 
        options={{ 
          tabBarLabel: "Profiles", 
          headerShown: false, 
          tabBarIcon:({focused}) => 
            focused ? (
          <Ionicons name="person" size={24} color="#fd5c63" />
        ):(
          <Ionicons name="person-outline" size={24} color="black" />
        ),
       }} 
         />
      </Tab.Navigator>
    );
  }
  return(
    <NavigationContainer>
        <Stack.Navigator>
           <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}} />
           <Stack.Screen name="Register" component={RegisterScreen} options={{headerShown:false}} />
           <Stack.Screen name="Main" component={BottomTabs} options={{headerShown:false}}/>
           <Stack.Screen name="Search" component={SearchScreen} options={{headerShown:false}}/>  
           <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
           <Stack.Screen name="Destinations" component={DestinationsScreen} options={{headerShown: false}} />
           <Stack.Screen name="Result" component={ResultScreen} options={{headerShown:false}} /> 
           <Stack.Screen name="Places" component={PlacesScreen} options={{headerShown:false}}/>
           <Stack.Screen name="Create" component={CreateAdScreen} options={{headerShown:false}}/>
        </Stack.Navigator>
    </NavigationContainer>
 );
};

export default StackNavigator

const styles = StyleSheet.create({})