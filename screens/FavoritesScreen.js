import { StyleSheet, Text, View,SafeAreaView, Pressable } from 'react-native'
import React from 'react'

const FavoritesScreen = () => {
  return (
    <SafeAreaView>
      <Pressable>
      <Text
      style={{fontSize:30, marginHorizontal:20 }}
      >Lista de Favoritos</Text>
      </Pressable>
    </SafeAreaView>
  )
}

export default FavoritesScreen

const styles = StyleSheet.create({})