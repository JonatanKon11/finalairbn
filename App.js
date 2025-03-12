import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StackNavigator from './StackNavigator';
import { ModalPortal } from 'react-native-modals';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { AuthProvider } from './context/AuthProvider';
import { ProfilesProvider } from './context/ProfilesContext';
import { Children } from 'react';
import { HousesProvider } from './context/HousesContext';
import { RentalsProvider} from './context/RentalsContext';


export default function App() {
  return (
        <GestureHandlerRootView style={{ flex: 1 }}>
        <>
          <AuthProvider>
            <ProfilesProvider>
              <HousesProvider>
                <RentalsProvider>
                  <StackNavigator/>
                  <ModalPortal/> 
                </RentalsProvider>  
              </HousesProvider>
            </ProfilesProvider>
          </AuthProvider>  
        </>
        </GestureHandlerRootView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
