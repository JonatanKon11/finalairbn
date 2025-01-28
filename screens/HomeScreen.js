import { SafeAreaView, StyleSheet, Text, View, TextInput, ScrollView, Image, Dimensions, Pressable } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import Ionicons from '@expo/vector-icons/Ionicons';

import Category from '../components/Explore/Category';
import Home from '../components/Explore/Home';

const {height,width} = Dimensions.get('window')

const HomeScreen = () => {
    const route = useRoute();
    const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown:false
    })

  },[])
  return (
    <SafeAreaView style={{flex:1 }}>
      <View style={{flex:1,}}>
        <View style={{ height: 80, backgroundColor:"white", borderBottomWidth: 1, borderBottomColor: '#dddddd', paddingTop:20}}>
          <Pressable 
          onPress={() => navigation.navigate("Search")}
          style={{ flexDirection: "row", padding: 10, backgroundColor: "white", marginHorizontal: 20, shadowOffset:{width:0, height:0}, shadowColor:"black", shadowOpacity: 0.2, borderRadius:20,elevation:1}}>
          <Ionicons name="search" size={24} color="black" />
          <TextInput
          underlineColorAndroid="transparent"
            placeholder='¿ A donde vas?'
            placeholderTextColor={"grey"}
            style={{ flex: 1, fontWeight: '700', backgroundColor: "white"}}
          />
          </Pressable>
        </View>
        <ScrollView
          scrollEventThrottle={16}
        >
          <View style={{flex: 1, backgroundColor:"white", paddingTop: 20}}>
            <Text style={{fontSize: 24, fontWeight: '700', paddingHorizontal:20}}>
            ¿Qué podemos ayudarte a encontrar?
            </Text>
            <View style={{height: 130, marginTop: 20}}>
              <ScrollView 
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              >
                <Category imageUri={require('../assets/home.jpg')}
                  name="Alojamiento"
                  />
                
                <Category imageUri={require('../assets/experiences.jpg')}
                  name="Experiencias"
                  />
                
                <Category imageUri={require('../assets/restaurant.jpg')}
                  name="Resturant"
                  />
              </ScrollView>
            </View>
              <View style={{ marginTop: 40, paddingHorizontal: 20}}>
                <Text style={{fontSize: 24, fontWeight: "700"}}>
                  Presentamos Airbnb Plus
                </Text>
                <Text style={{fontWeight:"100", marginTop:10}}>
                  Una nueva selección de viviendas verificadas por calidad y comodidad
                </Text>
                <View style={{width: width - 40, height: 200, marginTop: 20}}>
                  <Image
                    style={{flex:1, height: null, width: null, resizeMode: 'cover', borderRadius: 5, borderWidth: 1, borderColor:"#ddddddd"}}
                    source={require('../assets/home.jpg')}
                  />
                </View>
              </View>
          </View>
          <View style={{marginTop: 40}}>
            <Text style={{fontSize:24 , fontWeight:'700', paddingHorizontal: 20}}>
              Casas en todo el mundo
            </Text>
            <View style={{paddingHorizontal: 20, marginTop:20, flexDirection: "row", flexWrap: "wrap", justifyContent:"space-between"}}>
              
                <Home width={width}
                  name="The Cozy Place"
                  type="PRIVATE ROOM - 2 BEDS"
                  price={82}
                />
                <Home width={width}
                name="The Cozy Place"
                type="PRIVATE ROOM - 2 BEDS"
                price={82}
                />
                <Home width={width}
                name="The Cozy Place"
                type="PRIVATE ROOM - 2 BEDS"
                price={82}
                />
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})