import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Animated, { useAnimatedStyle } from 'react-native-reanimated'
const styles = StyleSheet.create({
  Catagory:{
    width:165,
    height:200,
    backgroundColor:'#fff',
    borderRadius:30,
    marginBottom:20,
   
  },
  Catagory1:{
    width:165,
    height:200,
    backgroundColor:'#fff',
    borderRadius:30,
    marginBottom:20
  }
})
const CatagoryList = ({item,index}) => {
  const AnimatedTop=useAnimatedStyle(()=>{
    return{
     transform:[{
       translateY:(index%2==0)?-50:0
     }]
    }
  })
  return (
    <Animated.View  style={[styles.Catagory,AnimatedTop]}>
        <Text  >hello</Text>
    </Animated.View>
  )
}

export default CatagoryList


