import { Pressable, StyleSheet, Text, TextInput, View, SafeAreaView } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'

const PlacesScreen = () => {
    const route = useRoute();
    console.log(route.params)
  return (
    <SafeAreaView>
    
      <Pressable>
            <Pressable
            onPress={() => setModalVisible(!modalVisible)}
            style={{ flexDirection: "row", padding: 10, backgroundColor: "white", marginHorizontal: 20, shadowOffset:{width:0, height:0}, shadowColor:"black", shadowOpacity: 0.2, borderRadius:10,elevation:1, marginTop:15}}
            >
            <TextInput placeholder={""}/>
            </Pressable>
            
        </Pressable>
      <Text>PlacesScreen</Text>
    </SafeAreaView>
  )
}

export default PlacesScreen

const styles = StyleSheet.create({})