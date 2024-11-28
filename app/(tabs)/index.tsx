import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Header from '@/components/Header'
import SearchBar from '@/components/SearchBar'
import axios from 'axios'
import { NewsDataType } from '@/.expo/types'
import BreakingNews from '@/components/BreakingNews'

type Props = {}

const Page = (props: Props) => {
  const {top: safeTop}= useSafeAreaInsets();
  const [breakingNews, setBreakingNews] = useState<NewsDataType[]>([]);
  //to check why data isnt showing
  const [isLoading, setIsLoading]=useState(true);

  useEffect(() => {
    getBreakingNews()
  }, []);

  //function to get from api
  const getBreakingNews= async()=>{
    try{
      const URL =`https://newsdata.io/api/1/news?apikey=${process.env.EXPO_PUBLIC_API_KEY}&country=ie,nz,gb,us&language=en&image=1&removeduplicate=1&size=5`
      const response = await axios .get(URL);

      console.log(response.data);

      if(response && response.data){
        setBreakingNews(response.data.results); //nested obj's
        setIsLoading(false);
      }
    }catch(err:any){
      console.log('Error Message', err.Message);
    }
  }

  return (
    <View style={[styles.container, {paddingTop:safeTop}]}>
      <Header/>
      <SearchBar/>
      {/* {breakingNews.map((item,index) => (
        <Text>{item.title}</Text>
      ))} */}
      {/* now lets check if is loading */}
      {isLoading? (
        <ActivityIndicator size={'large'}/> //isLoading is true display this
      ):(
        <BreakingNews newsList={breakingNews}/> //if isloading is false display breakingNews
      )}
    </View>
  )
}

export default Page

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
  },
})