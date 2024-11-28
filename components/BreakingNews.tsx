import { StyleSheet, Text, View, FlatList } from 'react-native'
import React,{useState} from 'react'
import { Colors } from '@/constants/Colors'
import { NewsDataType } from '@/.expo/types'
import SliderItem from './SliderItem'
import Animated, { useAnimatedRef, useAnimatedScrollHandler, useSharedValue } from 'react-native-reanimated'

type Props = {
    newsList: Array<NewsDataType>
}

const BreakingNews = ({newsList}: Props) => {
    const [data, setData]= useState(newsList);
    const [paginationIndex, setPaginationIndex] = useState(0);
    const scrollX = useSharedValue(0);// provide the animation
    const ref = useAnimatedRef<Animated.FlatList<any>>();

    const onScrollHandler = useAnimatedScrollHandler({
        onScroll:(e)=>{
            scrollX.value = e.contentOffset.x;
        },
    });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>BreakingNews</Text>
      <View style={styles.styleWrapper}>
        <Animated.FlatList 
        ref={ref}
        data={data} 
        keyExtractor={(_, index) => `list_items${index}`}
        renderItem={({item, index})=>(
            <SliderItem slideItem={item} index={index} scrollX={scrollX}/>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        onScroll={onScrollHandler}
        scrollEventThrottle={16} 
         />
      </View>
    </View>
  )
}

export default BreakingNews

const styles = StyleSheet.create({
    container:{
        marginBottom:10,
    },
    title:{
        fontSize:18,
        fontWeight:"600",
        color: Colors.black,
        marginBottom:10,
        marginLeft:20,
    },
    styleWrapper:{
        //commented out as was preventing data from being shown
        // width:'100%',
        // flex:1,
        justifyContent:'center',
    },

})