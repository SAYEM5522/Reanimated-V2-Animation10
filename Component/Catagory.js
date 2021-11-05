import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import {item} from "./Data"
import Animated, { Extrapolate, interpolate, useAnimatedStyle, withSpring } from 'react-native-reanimated';
import CatagoryList from './CatagoryList';
const styles = StyleSheet.create({
  Catagory:{
    width:165,
    height:200,
    backgroundColor:'#fff',
    borderRadius:30,
    marginBottom:20,
   
  },
  Container:{
    flexDirection:'row',
    flexWrap:'wrap',
    alignItems:'center',
    justifyContent:'space-between',
    
    
  },
  Catagory1:{
    width:165,
    height:200,
    backgroundColor:'#fff',
    borderRadius:30,
    marginBottom:20
  }
})


const Catagory = ({translationY}) => {
  const renderItem=({item,index})=>{
    return(
      <View style={{padding:10,top:50}}>
        <CatagoryList item={item} index={index}/>
      </View>
    )
  }
 
  const styleC = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY:withSpring(interpolate(translationY.value,[0,100],[0,translationY.value],Extrapolate.CLAMP),)
        },
      ],
     
    };
  });
  return (
    <Animated.View style={[styles.Container]}>
      <FlatList
      data={item}
      keyExtractor={(item)=>item.id}
      showsVerticalScrollIndicator={false}
      renderItem={renderItem}
      numColumns={2}
      />
    </Animated.View>
  )
}

export default Catagory


