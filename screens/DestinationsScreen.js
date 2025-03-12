import { StyleSheet, Text, View, SafeAreaView, TextInput, FlatList } from 'react-native'
import React, { useState } from 'react'

import Feather from '@expo/vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import SearchResults from '../components/Explore/SearchResults';

const cities = require('../components/Explore/cities.json');

const DestinationsScreen = () => {
    const [input, setInput] = useState("");

    const data = [
        {
          "name": "El Tarter",
          "lat": "42.57952",
          "lng": "1.65362",
          "country": "AD",
          "admin1": "02",
          "admin2": ""
        },
        {
          "name": "Sant Julià de Lòria",
          "lat": "42.46372",
          "lng": "1.49129",
          "country": "AD",
          "admin1": "06",
          "admin2": ""
        },
        {
          "name": "Pas de la Casa",
          "lat": "42.54277",
          "lng": "1.73361",
          "country": "AD",
          "admin1": "03",
          "admin2": ""
        },
        {
          "name": "Ordino",
          "lat": "42.55623",
          "lng": "1.53319",
          "country": "AD",
          "admin1": "05",
          "admin2": ""
        },
        {
          "name": "les Escaldes",
          "lat": "42.50729",
          "lng": "1.53414",
          "country": "AD",
          "admin1": "08",
          "admin2": ""
        },
        {
          "name": "la Massana",
          "lat": "42.54499",
          "lng": "1.51483",
          "country": "AD",
          "admin1": "04",
          "admin2": ""
        },
        {
          "name": "Encamp",
          "lat": "42.53474",
          "lng": "1.58014",
          "country": "AD",
          "admin1": "03",
          "admin2": ""
        },
        {
          "name": "Canillo",
          "lat": "42.5676",
          "lng": "1.59756",
          "country": "AD",
          "admin1": "02",
          "admin2": ""
        },
    ];

  return (
    <SafeAreaView>
        <View
         style={{ 
            flexDirection: "row",
            padding: 10,
            backgroundColor: "white",
            marginHorizontal: 20,
            shadowOffset:{width:0, height:0},
            shadowColor:"black",
            shadowOpacity: 0.2,
            borderRadius:10,
            elevation:1,
            marginTop:15
        }}
         
        >
            <Feather 
            onPress={() => navigator.navigate("Search")}
            name="arrow-left" size={24} color="black" 
            />
            
            <TextInput
            value={input}
            onChangeText={(text) => setInput(text)}
            placeholder='  Explorar Destinos'
            />
        </View>
       {/* <SearchResults data={data} input={input} setInput={setInput}/> {/* pasa resultados */} 
       <SearchResults data={cities} input={input} setInput={setInput}/>
      </SafeAreaView>
  )
}

export default DestinationsScreen

const styles = StyleSheet.create({})