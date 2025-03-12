import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, Pressable,SafeAreaView } from 'react-native'
import React, { useContext } from 'react'
import { useForm } from '../hook/useForm'
import { AuthContext } from '../context/AuthContext';
import { ScrollView } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import {AuthProvider} from '../context/AuthProvider';

export default function LogineScreen( { navigation }) {
    const { email, password, onInputChange } = useForm({
        email: '',
        password: ''
    })
 
  const { login } = useContext(AuthContext)

    const onLogin = async () => {
     login({ email, password })
        navigation.navigate("Main")
    }

 return (
    <SafeAreaView
       style={{
        flex:1,
        backgroundColor:"white",
        padding:10,
        alignItems:"center"
        }}
      >

    <KeyboardAvoidingView>
      <View 
        style={{
          justifyContent:"center",
          alignItems:"center",
          marginTop:100
          }}
        >
        <Text style={{color:"#003580", fontSize:17,fontWeight:"700"}}>
          Sign In
        </Text>

      <Text style={{marginTop:15, fontSize:18,fontWeight:"500"}}>
        Sign In to Your Account
      </Text>
      </View>

      <View style={{marginTop:50}}>

        <Text style={{fontSize:18, fontWeight:"600", color:"gray"}}>
          Email
        </Text>

        <TextInput
        value={email}
        onChangeText={(value) => onInputChange(value, 'email')}
        //onChangeText={(text) => setEmail(text)}
        placeholder='enter your email id'
        placeholderTextColor={"black"}
        onSubmitEditing={ onLogin}
        style={{
              fontSize:email ? 18 : 18,
            borderBottomColor:"gray",
            borderBottomWidth:1,
            marginVertical:10,
            width:300
        }}
        />
        </View>

        <View style={{marginTop:15}}>
          <Text style={{fontSize:18,fontWeight:"600", color:"gray"}}>
            Password
          </Text>

        <TextInput
        value={password}
        onChangeText={(value) => onInputChange(value, 'password')}
        //onChangeText={(text) => setPassword(text)}
        secureTextEntry={true}
           placeholder='Password'
           placeholderTextColor={"black"}
           onSubmitEditing={ onLogin}
           style={{
                fontSize:password ? 18 : 18,
               borderBottomColor:"gray",
               borderBottomWidth:1,
               marginVertical:10,
               width:300
           }}
        />
      </View>

      <Pressable
      onPress={onLogin}
      style={{
        width:200,
        backgroundColor:"#003580",
        padding:15,
        borderRadius:7,
        marginTop:50,
        marginLeft:"auto",
        marginRight:"auto"
        }}
      >
        <Text 
          style={{
            textAlign:"center",
            color:"white",
            fontSize:17,
            fontWeight:"bold"
            }}
            >
              Login
        </Text>
      </Pressable>

      <Pressable 
        onPress={() => navigation.navigate("Register")} 
        style={{marginTop:20}}
      >
        <Text style={{textAlign:"center",color:"gray",fontSize:17}}>
          Don't have an account? Sing up 
        </Text>
      </Pressable>
    </KeyboardAvoidingView>
    </SafeAreaView>
  );
}




const styles = StyleSheet.create({})