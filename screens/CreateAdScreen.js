import { StyleSheet, Text, View, SafeAreaView, Button, TextInput, Pressable, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Picker } from '@react-native-picker/picker';
import { useForm } from '../hook/useForm';
import Feather from '@expo/vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

const CreateAdScreen = () => {
    
    const navigation = useNavigation();

    const [persons, setPersons] = useState(0);
    const [rooms, setRooms] = useState(0);

    const { address, city, name, personsNumber, price, province, review, roomsNumber, onInputChange } = useForm({
        address: '',
        city: '',
        name: '',
        personsNumber: 0,
        price: 0,
        province: '',
        review: 0,
        roomsNumber: 0,
    })

    const HandleShipping = () => {
        console.log ({ type, direction, city})
    };
  return (
<ScrollView>
    <SafeAreaView>
          <View
         style={{marginTop:10, marginHorizontal: 10, padding: 10}}
         >
        <Pressable
         onPress={() => navigation.navigate("Main")}
         > 
            {/*X volver */}
            <Feather name="x" size={24} color="black" />
        </Pressable>
        </View>
       
        
        
        <Pressable>
        <View
            style={{ padding: 20, backgroundColor: "white", marginHorizontal: 20, shadowOffset:{width:0, height:0}, shadowColor:"black", shadowOpacity: 0.2, borderRadius:20,elevation:1}}
        >
            <Text style={{fontSize:30, marginHorizontal:20}}>Crear nueva vivienda</Text>
            <Pressable
            style={{ flexDirection: "row", padding: 10, backgroundColor: "white", marginHorizontal: 20, shadowOffset:{width:0, height:0}, shadowColor:"black", shadowOpacity: 0.2, borderRadius:10,elevation:1, marginTop:15}}
            >
            <TextInput
            placeholder='Nombre'
            onChangeText={(value) => onInputChange(value, 'name') }
            value={name}
            />
            </Pressable>

            <Pressable
            style={{ flexDirection: "row", padding: 10, backgroundColor: "white", marginHorizontal: 20, shadowOffset:{width:0, height:0}, shadowColor:"black", shadowOpacity: 0.2, borderRadius:10,elevation:1, marginTop:15}}
            >
            <TextInput
            placeholder='Direccion'
            onChangeText={(value) => onInputChange ( value, 'address')}
            value={ address }
            />
            </Pressable>


            <Pressable
            style={{ flexDirection: "row", padding: 10, backgroundColor: "white", marginHorizontal: 20, shadowOffset:{width:0, height:0}, shadowColor:"black", shadowOpacity: 0.2, borderRadius:10,elevation:1, marginTop:15}}
            >
            <TextInput
            placeholder='Review'
            keyboardType='numeric'
            onChangeText={(value) => onInputChange ( value, 'review')}
            value={ review }
            />
            </Pressable>


            <Pressable
            style={{ flexDirection: "row", padding: 10, backgroundColor: "white", marginHorizontal: 20, shadowOffset:{width:0, height:0}, shadowColor:"black", shadowOpacity: 0.2, borderRadius:10,elevation:1, marginTop:15}}
            >
            <TextInput
            placeholder='Precio'
            keyboardType='number-pad'
            onChangeText={(value) => onInputChange ( value, 'price')}
            value={ price }
            />
            </Pressable>
        </View>
        </Pressable>


        {/* agregar picker */}
        <Pressable>
        <View
             style={{ padding: 20, backgroundColor: "white", marginHorizontal: 20, shadowOffset:{width:0, height:0}, shadowColor:"black", shadowOpacity: 0.2, borderRadius:20,elevation:1,marginVertical:10}}
        >
            <Text style={{fontSize:30, marginHorizontal:20}}>Ubicacion</Text>
            <Pressable
            style={{ flexDirection: "row", padding: 10, backgroundColor: "white", marginHorizontal: 20, shadowOffset:{width:0, height:0}, shadowColor:"black", shadowOpacity: 0.2, borderRadius:10,elevation:1, marginTop:15}}
            >
            <TextInput
            placeholder='Provincia'
            onChangeText={(value) => onInputChange ( value, 'province')}
            value={ province }
            />
            </Pressable>

            <Pressable
            style={{ flexDirection: "row", padding: 10, backgroundColor: "white", marginHorizontal: 20, shadowOffset:{width:0, height:0}, shadowColor:"black", shadowOpacity: 0.2, borderRadius:10,elevation:1, marginTop:15}}
            >
            <TextInput
            placeholder='City'
            onChangeText={(value) => onInputChange ( value, 'city')}
            value={ city }
            />
            </Pressable>
        </View>
        </Pressable>

        <Pressable>
            <View
            style={{ padding: 20, backgroundColor: "white", marginHorizontal: 20, shadowOffset:{width:0, height:0}, shadowColor:"black", shadowOpacity: 0.2, borderRadius:20,elevation:1,marginVertical:10}} 
            >
            <Text style={{fontSize:30, marginHorizontal:20}}>Datos basicos sobre tu espacio</Text>  

                 <Pressable>
                 <View 
                     style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between", marginVertical:15}}>
                <Text 
                style={{textAlign:"center", fontSize:25, fontWeight:"600", paddingHorizontal: 6}}>  Personas</Text>
                     <Pressable 
                         style={{flexDirection:"row",alignItems:"center"}}>
                    <Pressable 
                     onPress={() => setPersons(Math.max(1, persons - 1))}
                     style={{width: 26, height:26, borderRadius: 13, borderColor:"#BEBEBE", backgroundColor:"#E0E0E0"}}>
                     <Text 
                        style={{textAlign:"center", fontSize:25, fontWeight:"600", paddingHorizontal: 6}}>-</Text>
                     </Pressable>
                     <Pressable>
                     <Text 
                     style={{textAlign:"center", fontSize:25, fontWeight:"600", paddingHorizontal: 6}} >{persons}</Text>
                     </Pressable>
                     <Pressable 
                        onPress={() => setPersons((c) => c + 1)}
                    style={{width: 26, height:26, borderRadius: 13, borderColor:"#BEBEBE", backgroundColor:"#E0E0E0"}}>
                    <Text 
                     style={{textAlign:"center", fontSize:25, fontWeight:"600", paddingHorizontal: 6}}>+</Text>
                    </Pressable>
                    </Pressable>
                 </View>
                </Pressable>

                <Pressable>
                    <View
                     style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between", marginVertical:15}}
                    >
                         <Text 
                style={{textAlign:"center", fontSize:25, fontWeight:"600", paddingHorizontal: 6}}> Habitaciones</Text>
                     <Pressable 
                         style={{flexDirection:"row",alignItems:"center"}}>
                    <Pressable 
                     onPress={() => setRooms(Math.max(1, rooms - 1))}
                     style={{width: 26, height:26, borderRadius: 13, borderColor:"#BEBEBE", backgroundColor:"#E0E0E0"}}>
                     <Text 
                        style={{textAlign:"center", fontSize:25, fontWeight:"600", paddingHorizontal: 6}}>-</Text>
                     </Pressable>
                     <Pressable>
                     <Text 
                     style={{textAlign:"center", fontSize:25, fontWeight:"600", paddingHorizontal: 6}} >{rooms}</Text>
                     </Pressable>
                     <Pressable 
                        onPress={() => setRooms((c) => c + 1)}
                    style={{width: 26, height:26, borderRadius: 13, borderColor:"#BEBEBE", backgroundColor:"#E0E0E0"}}>
                    <Text 
                     style={{textAlign:"center", fontSize:25, fontWeight:"600", paddingHorizontal: 6}}>+</Text>
                    </Pressable>
                    </Pressable>

                    </View>
                </Pressable>
            </View>
        </Pressable>

        <View>
              {/*search buttom */}
          <Pressable 
           onPress={ () => addHouse ({
            address,
            city,
            name, 
           personsNumber: persons,
           price: parseInt(price),
           province,
           review: parseInt(review),
           roomsNumber: rooms,
            }, navigation)
    }
          style={{paddingHorizontal:10,borderColor:"#FF5A5F",borderWidth:2,paddingVertical:15,backgroundColor:"#fd5c63", marginHorizontal: 20, shadowOffset:{width:0, height:0}, shadowOpacity: 0.2, borderRadius:20,elevation:1, marginTop:25 }}>
              <Text style={{color:"white", textAlign:"center", fontSize:15, fontWeight:"500"}}>Crear</Text>
          </Pressable>
        </View>

    </SafeAreaView>
    </ScrollView>
  )
}

export default CreateAdScreen

const styles = StyleSheet.create({})