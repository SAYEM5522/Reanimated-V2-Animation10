import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import SearchBar from './Component/SearchBar';
import { AntDesign } from '@expo/vector-icons';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eff5f2',
  
  },
  BackIcon:{
    backgroundColor:'#fff',
    borderRadius:10,
    width:50,
    height:45,
    left:20,
    top:25,
    padding:10
  },
  Tittle:{
    fontSize:30,
    width:150,
    height:100,
    fontWeight:'bold',
    top:40,
    left:30
  },
  Image:{
    height:350,
    width:200
  },
  Details:{
    flexDirection:'row',
    alignItems:"flex-start"
  }
});
export default function App() {
  return (
    <View style={styles.container}>
      <SearchBar/>
      <AntDesign name="left" style={styles.BackIcon} size={24} color="black" />
      <View style={styles.Details}>
        <Text style={styles.Tittle}>Choose Your CV</Text>
        <Image
        source={{uri:'https://o.remove.bg/downloads/49b8ef79-a540-4b65-abe5-45864cecf72b/istockphoto-1200677760-170667a-removebg-preview.png'}}
        style={styles.Image}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}


