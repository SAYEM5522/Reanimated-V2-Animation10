import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {item} from "./Data"
import Animated, { Extrapolate, interpolate, useAnimatedStyle, withSpring } from 'react-native-reanimated';
const styles = StyleSheet.create({
  Catagory:{
    width:165,
    height:190,
    backgroundColor:'#fff',
    borderRadius:30,
    marginBottom:20
  },
  Container:{
    flexDirection:'row',
    flexWrap:'wrap',
    alignItems:'center',
    justifyContent:'space-between',
    
  }
})
const Catagory = ({translationY}) => {
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
    <Animated.View style={[styles.Container,styleC]}>
     {
       item.map(({item,index})=>{
         return(
           <View key={index} style={styles.Catagory}>
              <Text>hello</Text>
           </View>
         )
       })
     }
    </Animated.View>
  )
}

export default Catagory


