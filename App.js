import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import SearchBar from './Component/SearchBar';
import { AntDesign } from '@expo/vector-icons';
const {width: SIZE} = Dimensions.get('window');
import {ChartDot, ChartPath, ChartPathProvider, monotoneCubicInterpolation} from '@rainbow-me/animated-charts';
import Animated, { Extrapolate, interpolate, useAnimatedScrollHandler, useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated';
import { item } from './Component/Data';
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
  }
});
export default function App() {
  const Y=useSharedValue(0);
  const translationY = useSharedValue(0);
 
  const scrollHandler = useAnimatedScrollHandler((event) => {
    translationY.value = event.contentOffset.y;
  });
  useEffect(()=>{
    Y.value=(!Y.value)
  },[])
  const GraphAnimation=useAnimatedStyle(()=>{
    return{
      transform:[{
        translateX:withTiming(interpolate(Y.value,[0,1],[-150,0],Extrapolate.CLAMP),{duration:600})
      }],
   
    }
  })
  const stylez = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY:withSpring(-translationY.value)
        },
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
        <Image
        source={{uri:'https://o.remove.bg/downloads/49b8ef79-a540-4b65-abe5-45864cecf72b/istockphoto-1200677760-170667a-removebg-preview.png'}}
        style={styles.Image}
        />
      </View>
      <Animated.View style={[styles.Graph,GraphAnimation]}>
    <ChartPathProvider data={{ points, smoothingStrategy: 'bezier' }}>
      <ChartPath strokeWidth={4} selectedStrokeWidth={4} height={SIZE / 2} selectedOpacity={1} stroke="#dbb144" width={SIZE-100} />
      <ChartDot size={14} style={{ backgroundColor: '#dbb144'}} />
    </ChartPathProvider>
     </Animated.View>
     <Animated.View style={[styles.ScrollContainer,stylez]}>
       <Animated.ScrollView
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        >
       
         {
           item.map((item,index)=>{
             return(
                <View key={index} style={{height:100}}>
                    <Text>
                      hello
                    </Text>
                </View>
             )
           })
         }
       </Animated.ScrollView>
     </Animated.View>
      <StatusBar style="auto" />
    </View>
  );
}


