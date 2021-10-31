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
  },
  Name:{
    fontSize:20,
    fontWeight:"bold",
    width:100,
    left:30,
    top:20
  },
  View:{
    fontSize:15,
    fontWeight:"bold",
    width:100,
    position:'absolute',
    bottom:20,
    alignSelf:'center'
  }
})
const CatagoryList = ({item,index}) => {
  const AnimatedTop=useAnimatedStyle(()=>{
    return{
     transform:[{
       translateY:(index%2==0)?-50:0
     }],
     backgroundColor:(index==0)?"#dbb144":"#fff"
    }
  })
  return (
    <Animated.View  style={[styles.Catagory,AnimatedTop]}>
        <Text style={styles.Name} >{item.name}</Text>
        <Text style={styles.View}>{item.price}</Text>
    </Animated.View>
  )
}

export default CatagoryList


