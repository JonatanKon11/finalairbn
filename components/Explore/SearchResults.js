import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const SearchResults = ( {data, input, setInput}) => {
    const navigation= useNavigation();
  return (
    <View style={{padding:10}}>
        <FlatList 
            data={data} 
                renderItem={({ item }) => {
                    if (item.name.toLowerCase().includes(input.toLowerCase())) {
                        if(input === ""){
                            return null;
                        }
                return (
                    <Pressable 
                    onPress={() => {
                        setInput(item.name);
                        navigation.navigate("Search",{
                            input:item.name
                        })
                    }} style={{flexDirection:"row", alignItems:"center", marginVertical:10}}>

                        <View style={{marginLeft:10}}>
                            <Text style={{fontSize:15,fontWeight:"500"}}>{item.name}</Text>
                            <Text style={{marginVertical:4}}>{item.country}</Text>s
                        </View>
                    </Pressable>
                )
            }
        }}
    />
      <Text>SearchResults</Text>
    </View>
  )
}

export default SearchResults

const styles = StyleSheet.create({})