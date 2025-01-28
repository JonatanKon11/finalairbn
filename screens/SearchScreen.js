import { StyleSheet, Text, View, SafeAreaView, ScrollView, Pressable, TextInput, Alert} from 'react-native'
import React,{useState} from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import { Calendar } from 'react-native-calendars';


import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';

import DateTimePicker from 'react-native-ui-datepicker';
import dayjs from 'dayjs';
import { BottomModal, ModalButton, ModalContent, ModalFooter, ModalTitle, SlideAnimation } from 'react-native-modals';


const SearchScreen = () => {

    const navigation = useNavigation();
    const [date, setDate] = useState(dayjs());
    const [dates, setDates] = useState({
        startDate: '',
        endDate:'',
    });
    const [selectedDates, setSelectedDates] = useState();
    const route = useRoute();
    const [rooms, setRooms] = useState(1);
    const [adults, setAdults] = useState(2);
    const [children, setChildren] = useState(0);
    const [modalVisible, setModalVisible]= useState(false);


    const handleDayPress = (day) => {
        if (!dates.startDate || (dates.startDate && dates.endDate)) {
            //seleccionar la fecha de inico
            setDates({ startDate: day.dateString, endDate: ''});
        } else {
            //Seleccionar la fecha de fin
            setDates((prev) => ({
                ...prev,
                endDate: day.dateString,
            }));
        }
    };

    console.log(route.params)

    const searchPlaces = (name) => {
        if(!route.params || !dates){
            Alert.alert(
                "Datos Incompletos",
                "Seleccione los Datos Correctamente",
                [
                    {
                        text:"Cancel",
                        onPress: () => console.log("Cancel"),
                        style: "cancel"
                    },
                    { text: "OK", onPress:() => console.log("OK")}
                ],
                {cancelable: false}
            );
        }

        if(route.params && dates){
            navigation.navigate("Places", {
                rooms:rooms,
                adults:adults,
                children:children,
                dates:dates,
                selectedDates:selectedDates,
                name:name
            })
        }
    };

  return (
    <> 
    <SafeAreaView> 
    <ScrollView>

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
        <View 
        style={{ padding: 20, backgroundColor: "white", marginHorizontal: 20, shadowOffset:{width:0, height:0}, shadowColor:"black", shadowOpacity: 0.2, borderRadius:20,elevation:1}}
        >
            {/* Cuadro 1 */}
            <Pressable>
            <Text style={{fontSize:30, marginHorizontal:20}}> A donde vas?</Text>
            </Pressable>
            <Pressable
            onPress={() => navigation.navigate("Destinations")}
            style={{ flexDirection: "row", padding: 10, backgroundColor: "white", marginHorizontal: 20, shadowOffset:{width:0, height:0}, shadowColor:"black", shadowOpacity: 0.2, borderRadius:10,elevation:1, marginTop:15}}
            >
            <Ionicons name="search" size={24} color="black" />
            <TextInput 
            placeholderTextColor="black"
            placeholder={route?.params ? route.params.input : "Explorar destinos"}/>
            </Pressable>
        </View>
 
{/* otra prueba*/}
        <View
        style={{  flexDirection: "row",padding: 20, backgroundColor: "white", marginHorizontal: 20, shadowOffset:{width:0, height:0}, shadowColor:"black", shadowOpacity: 0.2, borderRadius:20,elevation:1, marginTop:25}}
        >
           {/* <AntDesign name="calendar" size={24} color="black" /> */} 
            {/*cuadro 2*/}
            <View style={styles.container}>
            
            <Text style={{fontSize:20}}>  Selecciona un rango de fechas</Text>
      < Calendar
        onDayPress={handleDayPress}
        markedDates={{
            [dates.startDate]: {
                startingDay: true,
                color: 'blue',
                textColor: 'white'
            },
            [dates.endDate]: {
                endingDay: true,
                color: 'blue',
                textColor: 'white',
            },
            ...(dates.startDate && dates.endDate && {
                ...getRangeMarkedDates(dates.startDate, dates.endDate),
            }),
        }}
        markingType={'period'}
      />
      <View style={styles.dates}>
        <Text>Fecha de inicio: {dates.startDate || 'No seleccionada' }</Text>
        <Text>Fecha de fin: {dates.endDate || 'No seleccionada' }</Text>
      </View>
             </View>
    </View>

        <View 
        style={{ padding: 20, backgroundColor: "white", marginHorizontal: 20, shadowOffset:{width:0, height:0}, shadowColor:"black", shadowOpacity: 0.2, borderRadius:20,elevation:1, marginTop:25}}
        >
            {/* Cuadro 3 */}
            <Pressable>
            <Text style={{fontSize:20, marginHorizontal:20}}> Viajeros</Text>
            </Pressable>
            <Pressable
            onPress={() => setModalVisible(!modalVisible)}
            style={{ flexDirection: "row", padding: 10, backgroundColor: "white", marginHorizontal: 20, shadowOffset:{width:0, height:0}, shadowColor:"black", shadowOpacity: 0.2, borderRadius:10,elevation:1, marginTop:15}}
            >
            <Ionicons name="person-outline" size={24} color="black" />
            <TextInput placeholder={`${rooms} habitacion - ${adults} adultos - ${children} niños`}/>
            </Pressable>
        </View>
       
        <View>
              {/*search buttom */}
          <Pressable 
          onPress ={() => searchPlaces(route?.params.input)}
          style={{paddingHorizontal:10,borderColor:"#FF5A5F",borderWidth:2,paddingVertical:15,backgroundColor:"#fd5c63", marginHorizontal: 20, shadowOffset:{width:0, height:0}, shadowOpacity: 0.2, borderRadius:20,elevation:1, marginTop:25 }}>
              <Text style={{color:"white", textAlign:"center", fontSize:15, fontWeight:"500"}}>Search</Text>
          </Pressable>
        </View>
    </ScrollView>
    </SafeAreaView> 

    <BottomModal 
    swipeThreshold={200} 
    onBackdropPress={() => setModalVisible(!modalVisible)}
    swipeDirection={['up', 'down']}
    footer={<ModalFooter>
        <ModalButton 
            text='Seleccionar'
            style={{ 
                marginBottom: 20, 
                color:"white", 
                backgroundColor:"white"
            }}
        onPress={() => setModalVisible(!modalVisible)}
        />
    </ModalFooter>
    } 
    modalTitle={<ModalTitle  title='¿Quien Viene?'/>}
    modalAnimation={
        new SlideAnimation({
        slideFrom:"bottom",
        })
    }
    onHardwareBackPress={() => setModalVisible(!modalVisible)}
    visible={modalVisible}
    onTouchOutside={() => setModalVisible(!modalVisible)}
    >
        <ModalContent style={{width:"100%", height:310}}>
            <View 
            style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between", marginVertical:15}}>
                <Text 
                style={{textAlign:"center", fontSize:25, fontWeight:"600", paddingHorizontal: 6}}>Habitaciones</Text>
                <Pressable 
                style={{flexDirection:"row",alignItems:"center"}}>
                 <Pressable 
                 onPress={() => setRooms(Math.max(1,rooms - 1))}
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

            <View 
            style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between", marginVertical:15}}>
                <Text 
                style={{textAlign:"center", fontSize:25, fontWeight:"600", paddingHorizontal: 6}}>Adultos</Text>
                <Pressable 
                style={{flexDirection:"row",alignItems:"center"}}>
                 <Pressable 
                 onPress={() => setAdults(Math.max(1,adults - 1))}
                 style={{width: 26, height:26, borderRadius: 13, borderColor:"#BEBEBE", backgroundColor:"#E0E0E0"}}>
                    <Text 
                    style={{textAlign:"center", fontSize:25, fontWeight:"600", paddingHorizontal: 6}}>-</Text>
                 </Pressable>
                 <Pressable>
                 <Text 
                 style={{textAlign:"center", fontSize:25, fontWeight:"600", paddingHorizontal: 6}} >{adults}</Text>
                 </Pressable>
                 <Pressable 
                 onPress={() => setAdults((c) => c + 1)}
                 style={{width: 26, height:26, borderRadius: 13, borderColor:"#BEBEBE", backgroundColor:"#E0E0E0"}}>
                 <Text 
                 style={{textAlign:"center", fontSize:25, fontWeight:"600", paddingHorizontal: 6}}>+</Text>
                 </Pressable>
                </Pressable>
            </View>

            <View 
            style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between", marginVertical:15}}>
                <Text 
                style={{textAlign:"center", fontSize:25, fontWeight:"600", paddingHorizontal: 6}}>Niños</Text>
                <Pressable 
                style={{flexDirection:"row",alignItems:"center"}}>
                 <Pressable 
                 onPress={() => setChildren(Math.max(0,children - 1))}
                 style={{width: 26, height:26, borderRadius: 13, borderColor:"#BEBEBE", backgroundColor:"#E0E0E0"}}>
                    <Text 
                    style={{textAlign:"center", fontSize:25, fontWeight:"600", paddingHorizontal: 6}}>-</Text>
                 </Pressable>
                 <Pressable>
                 <Text 
                 style={{textAlign:"center", fontSize:25, fontWeight:"600", paddingHorizontal: 6}} >{children}</Text>
                 </Pressable>
                 <Pressable 
                 onPress={() => setChildren((c) => c + 1)}
                 style={{width: 26, height:26, borderRadius: 13, borderColor:"#BEBEBE", backgroundColor:"#E0E0E0"}}>
                 <Text 
                 style={{textAlign:"center", fontSize:25, fontWeight:"600", paddingHorizontal: 6}}>+</Text>
                 </Pressable>
                </Pressable>
            </View>
        </ModalContent>
    </BottomModal>
    </>
  )
}
const getRangeMarkedDates = (startDate, endDate) => {
    const markedDates= {};
    let currentDate = new Date(startDate);
    while (currentDate <= new Date(endDate)) {
        const dateString = currentDate.toISOString().split('T')[0];
        markedDates[dateString] = {
            color: 'lightblue',
            textColor: 'black',
        };
        currentDate.setDate(currentDate.getDate() + 1);
    }
    return markedDates;
};

export default SearchScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: '#F5FCFF',
        backgroundColor: "white",
        padding:20  
      },
      header: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
      },
      dates: {
        marginTop: 20,
      },
});