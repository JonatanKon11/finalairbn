import { StyleSheet, Text, View, SafeAreaView, Pressable} from 'react-native'
import React from 'react'

import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
navigator

const ProfilesScreen = () => {

  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <Pressable
      style={{flexDirection: "row", 
        alignItems:"center",
        padding: 10,
        marginTop:15,
        width:400,
        padding:10,
        borderRadius:10,
        marginRight:"auto",
        justifyContent: "space-between"
      }}
      >
      <Text
      style={{fontSize:30, marginHorizontal:15 }}  
    >Perfil
    </Text>
    <Ionicons name="notifications-outline" size={30} color="black"/>
    </Pressable>
  <Pressable>
    <Pressable>
    <Text
      style={{fontSize:30, marginHorizontal:15 }}
    >Ser anfitrion</Text>
    </Pressable>
    <Pressable
    onPress={() =>{
      navigation.navigate("Create")
    }}
    style={{flexDirection:"row", alignItems:"center", padding:10, marginTop:15, marginRight:"auto", fontSize:24}}
    >
    <MaterialCommunityIcons name="home-plus-outline" size={24} color="black" />
    <Text>  Publica tu anuncio</Text>
    </Pressable>
  </Pressable>
    </SafeAreaView>
  )
}

export default ProfilesScreen

const styles = StyleSheet.create({})