import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SearchBar from './Component/SearchBar';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  
  },
});
export default function App() {
  return (
    <View style={styles.container}>
      <SearchBar/>
      <StatusBar style="auto" />
    </View>
  );
}


