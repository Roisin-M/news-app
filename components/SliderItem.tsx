import { StyleSheet, Text, View, Dimensions, Image } from 'react-native'
import React from 'react'
import { NewsDataType } from '@/.expo/types'
import { SharedValue } from 'react-native-reanimated'
import {LinearGradient} from 'expo-linear-gradient'

type Props = {
    slideItem: NewsDataType, //single item
    index: number
    scrollX: SharedValue<number>
}

const {width} = Dimensions.get('screen'); // get the screenwidth of the device

const SliderItem = ({slideItem, index, scrollX}: Props) => {
  return (
    <View style={styles.itemWrapper}>
      <Image source={{uri: slideItem.image_url}} style={styles.image}/>
        <LinearGradient colors={["transparent", 'rgba(0,0,0,0.8)']} style={styles.background}>
        <Text>{slideItem.title}</Text>
        </LinearGradient>
    </View>
  )
}

export default SliderItem

const styles = StyleSheet.create({
    itemWrapper:{
        // position:'relative',
        width: width,
        justifyContent:'center',
        alignItems: 'center',
    },
    image:{
        width:width-60,
        height:100,
        borderRadius:20,
    },
    background:{
        position: 'absolute',
        //left:30,
        right:0,
        top:0,
        width:width-60,
        height:180,
        borderRadius:20,
        padding:20,
    }
})