import { StyleSheet, Text, View, SafeAreaView, KeyboardAvoidingView,TextInput, Pressable, ScrollView } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { useForm } from '../hook/useForm';
import { AuthContext } from '../context/AuthContext';

export default function Register2Screen( { navigation}) {

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previusState => !previusState);

    const { name, age, email, province, password, onInputChange } = useForm({
        name: '',
        age: 0,
        email: '',
        province: '',
        password: ''
    })

    useEffect(() => {
        navigation.setOptions({
            headerBackTitle: "Back"
        })
    }, [])

    const { register } = useContext(AuthContext)

    const onRegister = () => {
        register({name, age, email, province, password})
        navigation.navigate("Login")
    }
    return(
        <ScrollView>
         <SafeAreaView  style={{
                flex: 1,
                backgroundColor: "white",
                padding: 10,
                alignItems: "center",
              }}>
            <KeyboardAvoidingView>
                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: 100,
                  }}
                >
                  <Text style={{ color: "#003580", fontSize: 17, fontWeight: "700" }}>
                    Register
                  </Text>
        
                  <Text style={{ marginTop: 15, fontSize: 18, fontWeight: "500" }}>
                   Create an Account
                  </Text>
                </View>

                
        
                <View style={{ marginTop: 50 }}>


                <View>
                    <Text style={{ fontSize: 18, fontWeight: "600", color: "gray" }}>
                      Nombre
                    </Text>
        
                    <TextInput
                      value={name}
                      onChangeText={ (value) => onInputChange(value, 'name') }
                      placeholder="enter your email id"
                      placeholderTextColor={"black"}
                      onSubmitEditing={ onRegister }
                      style={{
                        fontSize: name ? 18 : 18,
                        borderBottomColor: "gray",
                        borderBottomWidth: 1,
                        marginVertical: 10,
                        width: 300,
                      }}
                    />
                  </View>

                  <View style={{ marginTop: 15 }}>
                    <Text style={{ fontSize: 18, fontWeight: "600", color: "gray" }}>
                      Edad
                    </Text>
        
                    <TextInput
                      value={age}
                      onChangeText={ (value) => onInputChange(value, 'age') }
                      placeholder="edad"
                      placeholderTextColor={"black"}
                      onSubmitEditing={ onRegister }
                      style={{
                        fontSize: age ? 18 : 18,
                        borderBottomColor: "gray",
                        borderBottomWidth: 1,
                        marginVertical: 10,
                        width: 300,
                      }}
                    />
                  </View>

                  <View>
                    <Text style={{ fontSize: 18, fontWeight: "600", color: "gray" }}>
                      Email
                    </Text>
        
                    <TextInput
                      value={email}
                      onChangeText={ (value) => onInputChange(value, 'email') }
                      keyboardType='email-address'
                      autoCapitalize='none'
                      autoCorrect={false}
                      placeholder="enter your email id"
                      placeholderTextColor={"black"}
                      onSubmitEditing={ onRegister }
                      style={{
                        fontSize: email ? 18 : 18,
                        borderBottomColor: "gray",
                        borderBottomWidth: 1,
                        marginVertical: 10,
                        width: 300,
                      }}
                    />
                  </View>
        
                  <View style={{ marginTop: 15 }}>
                    <Text style={{ fontSize: 18, fontWeight: "600", color: "gray" }}>
                      Contraseña
                    </Text>
        
                    <TextInput
                      value={password}
                      onChangeText={ (value) => onInputChange(value, 'password') }
                      secureTextEntry={true}
                      placeholder="Password"
                      placeholderTextColor={"black"}
                      style={{
                        fontSize: password ? 18 : 18,
                        borderBottomColor: "gray",
                        borderBottomWidth: 1,
                        marginVertical: 10,
                        width: 300,
                      }}
                    />
                  </View>

                  <View>
                    <Text style={{ fontSize: 18, fontWeight: "600", color: "gray" }}>
                      provincia
                    </Text>
        
                    <TextInput
                      value={province}
                      onChangeText={ (value) => onInputChange(value, 'province') }
                      placeholder="provincia"
                      placeholderTextColor={"black"}
                      onSubmitEditing={ onRegister }
                      style={{
                        fontSize: province ? 18 : 18,
                        borderBottomColor: "gray",
                        borderBottomWidth: 1,
                        marginVertical: 10,
                        width: 300,
                      }}
                    />
                  </View>
        

                </View>
        
                <Pressable
                onPress={onRegister}
                  style={{
                    width: 200,
                    backgroundColor: "#003580",
                    padding: 15,
                    borderRadius: 7,
                    marginTop: 50,
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                >
                  <Text style={{textAlign:"center",color:"white",fontSize:17,fontWeight:"bold"}}>Register</Text>
                </Pressable>
        
                <Pressable onPress={() => navigation.goBack("Login")} style={{marginTop:20}}>
                    <Text style={{textAlign:"center",color:"gray",fontSize:17}}>Already have an account? Sign In</Text>
                </Pressable>
              </KeyboardAvoidingView>
            </SafeAreaView>
            </ScrollView>
    )

}

const styles = StyleSheet.create({})