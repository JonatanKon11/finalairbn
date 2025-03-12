import React, { useContext, useEffect } from 'react'
import { useReducer } from 'react'
import umbnbApi from '../api/umbnbApi'
import AsyncStorage from '@react-native-async-storage/async-storage';

import { types } from '../types/types'
import { AuthContext } from './AuthContext'
import { authReducer } from './AuthReducer'
import { Alert } from 'react-native';
import { ProfilesContext } from './ProfilesContext';
import { HousesContext } from './HousesContext';

const initialState = {
    // Esto es para comprobar que si se esta checkeando se muestra el loading
    isAuthenticated: 'checking',
    token: null,
    user: null
}

export const AuthProvider = ({children}) => {

    const [ authState, dispatch ] = useReducer(authReducer, initialState)

    // Este useEffect se dispara solo una vez, cuando el componente se renderiza por primera vez
    useEffect(() => {
      
      validateToken()
      // loadProfile(id)
  
    }, [])

    const validateToken = async () => {
        try {
            const token = await AsyncStorage.getItem('token')
            
            // Si no hay token, hacer logout
            if (!token) return dispatch({ type: types.logout })

            // Obtener el ID del usuario del token (asumiendo que es un JWT)
            const tokenData = JSON.parse(atob(token.split('.')[1]))
            const id = tokenData.id

            // Obtener datos del usuario
            const userData = await umbnbApi.get(`/user/${id}`)
            const user = userData.data
            
            const action = {
                type: types.login,
                payload: {
                    token: token,
                    user: id,
                    host: user.host,
                    userData: user
                }
            }

            dispatch(action)

        } catch (error) {
            console.log('Error validating token:', error)
            dispatch({ type: types.logout })
        }
    }
    
 
    const login = async( { email, password } ) => {


        try{

          const resp = await umbnbApi.post(
            '/login',
            {
              email,
              password
            }
          )

          console.log(resp.data)
          const { access_token } = resp.data.data
          const { id } = resp.data.data


          const userData = await umbnbApi.get(
            `/user/${id}`
          )

          const user = userData.data

          const action = {
            type: types.login,
            payload: {
              token: access_token,
              user: id,
              host: user.host,
              // host: false,
              userData: user
            },
          }
          dispatch(action)
          await AsyncStorage.setItem('token', access_token)

        }catch(error){
          console.log(error)
          //TODO: mostrar error
          Alert.alert('Error', 'Email or password incorrect')
        }

        // el login va a terminar dispachando una accion
    }

    const logout = async() => {
        const action = {
          type: types.logout
          }
          // el login va a terminar dispachando una accion
          dispatch(action)
          await AsyncStorage.removeItem('token')
        }

    const register = async( { name,  age, email, password,  province } ) => {
      try{

        const resp = await umbnbApi.post(
          '/user',
          {
            name,
            age,
            email,
            password,
            province
          }
        );
         // Manejar la respuesta exitosa
         console.log(resp.data); // Mostrar la respuesta del servidor en la consola
         Alert.alert('Success', 'User registered successfully');
          //TODO: agregar la navegacion a la pantalla de login.

      }catch(error){
        console.log(error)
        //TODO: mostrar error

        // Manejar el error
    let errorMessage = 'An error occurred';
    if (error.response && error.response.data && error.response.data.message) {
      errorMessage = error.response.data.message; // Extraer el mensaje de error del servidor
    }else if(error.response && error.response.status){
        errorMessage = `Error: ${error.response.status}`
    }

        Alert.alert('Error', 'Check the values')
      }
     };



  return (
    <AuthContext.Provider value={{
        ...authState,
        login: login,
        register: register,
        logout: logout
    }}>
        { children }
    </AuthContext.Provider>
  )
}
