import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';
const SearchBar = () => {
  return (
    <View style={styles.Container}>
    <FontAwesome5 name="search" style={styles.Icon} size={24} color="white" />
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
  Container:{
    position:'absolute',
    bottom:20,
    alignSelf:'center',
    width:95,
    height:80,
    borderRadius:20,
    backgroundColor:'black',
    zIndex:1000
  },
  Icon:{
   left:35,
   top:25
    
  }
})
