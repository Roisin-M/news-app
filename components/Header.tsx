import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { Colors } from '@/constants/Colors'

type Props = {}

const Header = (props: Props) => {
  return (
    <View style={styles.container}>
        <View style={styles.userInfo}>
            <Image source={{uri:'https://xsgames.co/randomusers/assets/avatars/female/63.jpg'}}
            style={styles.userImg}></Image>
            <View style={{gap:3}}>
                <Text style={styles.welcomeTxt}>Welcome</Text>
                <Text style={styles.userName}>John Doe</Text>
            </View>
        </View>
        <TouchableOpacity >
            <Ionicons name='notifications-outline'
            size={24} 
            color={Colors.black}></Ionicons>
        </TouchableOpacity>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container:{
       paddingHorizontal:20,
       paddingVertical:10, 
       flexDirection:'row',
       justifyContent:'space-between',
       alignItems:'center',
       marginBottom:20,
    },
    userImg:{
        paddingHorizontal:20,
        width:50,
        height:50,
        borderRadius:30,
    },
    userInfo:{
        flexDirection:'row',
        alignItems:'center',
        gap:10,
    },
    welcomeTxt:{
        fontSize:12,
        color:Colors.darkGrey,
    },
    userName:{
        fontSize:14,
        fontWeight:700,
        color:Colors.black,
    },
})