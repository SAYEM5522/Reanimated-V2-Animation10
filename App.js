import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { Dimensions, FlatList, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import SearchBar from './Component/SearchBar';
import { AntDesign } from '@expo/vector-icons';
const {width: SIZE,height} = Dimensions.get('window');
import {ChartDot, ChartPath, ChartPathProvider, monotoneCubicInterpolation} from '@rainbow-me/animated-charts';
import Animated, { Extrapolate, interpolate, useAnimatedGestureHandler, useAnimatedScrollHandler, useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated';
import Catagory from './Component/Catagory';
import { PanGestureHandler } from 'react-native-gesture-handler';
const data = [
  {x: 1453075200, y: 1.47}, {x: 1453161600, y: 1.37},
  {x: 1453258000, y: 1.53}, {x: 1453334400, y: 1.54},
  {x: 1453420800, y: 1.52}, {x: 1453507200, y: 2.03},
  {x: 1453593600, y: 2.10}, {x: 1453680000, y: 2.50},
  {x: 1453766400, y: 2.30}, {x: 1453852800, y: 2.46},
  {x: 1453939200, y: 2.55}, {x: 1454025600, y: 2.61},
  {x: 1454112000, y: 2.43}, {x: 1454198400, y: 2.70},
];
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
    width:200,
    left:20
  },
  Details:{
    flexDirection:'row',
    alignItems:"flex-start"
  },
  Graph:{
    position:'absolute',
    top:(SIZE/2)-30
  },
  ScrollContainer:{
    flex:1,
    backgroundColor:'#eff5f2'
  },
  Catagory:{
    padding:15,
    backgroundColor: '#eff5f2',
    height:height
  },
  ViewList:{
    width:80,
    height:45,
    position:'absolute',
    backgroundColor:'rgba(250,250,250,0.9)',
    left:SIZE-155,
    top:10,
    borderRadius:10
  },
  Text1:{
    fontSize:15,
    fontWeight:'bold',
    left:10
  }
});
export default function App() {
  const config={
    mass:0.1,
    damping:10,
    overshootClamping:false,
    restDisplacementThreshold:5,
    restSpeedThreshold:0
  }
  const Y=useSharedValue(0);
  const gesY=useSharedValue(0);
  function clamp(value, lowerBound, upperBound) {
    'worklet';
    return Math.max(lowerBound, Math.min(value, upperBound));
  }
  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      ctx.startX = gesY.value;
    },
    onActive: (event, ctx) => {
      gesY.value = ctx.startX + event.translationY;
    },
    onEnd: (_) => {
      gesY.value = withSpring(0,config);
    },
  });
  useEffect(()=>{
    Y.value=(!Y.value)
  },[])
  const GraphAnimation=useAnimatedStyle(()=>{
    return{
      transform:[
      //   {
      //   translateX:withTiming(interpolate(Y.value,[0,1],[-150,0],Extrapolate.CLAMP),{duration:600})
      // },
      {
        translateY:interpolate(gesY.value,[0,-50],[0,-60],Extrapolate.CLAMP)
      },
    ],
   
    }
  })
  const stylez = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: clamp(gesY.value,-370,0)
        },
      ],
     
    };
  });
 
  const ImageTransform = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY:interpolate(gesY.value,[0,-50],[0,-50],Extrapolate.CLAMP)
        },
        {
          scale:interpolate(gesY.value,[0,-50],[1,0.7],Extrapolate.CLAMP)
        }
      ],
    };
  });


  const points = monotoneCubicInterpolation({data, range: 40});
  return (
    <View style={styles.container}>
      <SearchBar/>
      <AntDesign name="left" style={styles.BackIcon} size={24} color="black" />
      <View style={styles.Details}>
        <Text style={styles.Tittle}>Choose Your CV</Text>
        <Animated.Image
        source={{uri:'https://o.remove.bg/downloads/d47e4d81-c1c0-497f-bf7b-32046e185b68/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h-removebg-preview.png'}}
        style={[styles.Image,ImageTransform]}
        />
      </View>
      <Animated.View style={[styles.Graph,GraphAnimation]}>
    <ChartPathProvider data={{ points, smoothingStrategy: 'bezier' }}>
      <ChartPath strokeWidth={4} selectedStrokeWidth={4} height={SIZE / 2} selectedOpacity={1} stroke="#dbb144" width={SIZE-100} />
      <ChartDot size={14} style={{ backgroundColor: '#dbb144'}} />
    </ChartPathProvider>
    <View style={styles.ViewList}>
     <Text style={styles.Text1}>Today</Text>
      <Text>144 Views</Text>
    </View>
     </Animated.View>
        <PanGestureHandler onGestureEvent={gestureHandler}>
        <Animated.View style={[styles.Catagory,stylez]}>
        <Catagory translationY={gesY}/>
        </Animated.View>
        </PanGestureHandler>

      <StatusBar style="auto" />
    </View>
  );
}


