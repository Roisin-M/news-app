import { ImageBackground, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { Colors } from "@/constants/Colors";
import Animated ,{ FadeInDown, FadeInRight } from "react-native-reanimated";

const Page = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <ImageBackground 
      source={require("@/assets/images/getting-started.jpg")}
       style={{flex: 1}} 
       resizeMode="cover">
       <View style={styles.wrapper}>
        {/* <StatusBar style="light"/> */}
          <Animated.Text style={styles.title} entering={FadeInRight.delay(300).duration(500)} >Stay Updated</Animated.Text>
          <Animated.Text style={styles.description} entering={FadeInRight.delay(700).duration(500)}>Get breaking news and personalised updates directly to your feed</Animated.Text>
          {/*replace animation or psuh  -> push allows user to swipe back
          but replace doesnt allow this
          Animated cannot be applied to touchableopacity but we can put it in a view */}
          <Animated.View entering={FadeInDown.delay(1200).duration(500)}>
            <TouchableOpacity style={styles.btn} onPress={() => router.replace("/(tabs)")}>
              <Text style={styles.btnText}>Get Started</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </ImageBackground>
    </View>
    //separate view so that the text appears above the image within the view
  );
};

export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
  },
  wrapper:{
    flex:1,
    justifyContent:'flex-end',
    paddingBottom: 50,
    paddingHorizontal: 30,
    gap: 10,
    backgroundColor:'rgba(0, 0, 0, 0.5)',//opacity
  },
  title:{
    color: Colors.white,
    fontSize: 24,
    fontWeight: '600',
    letterSpacing: 1.5,
    lineHeight : 30,
    textAlign: 'center',
  },
  description:{
    color: Colors.white,
    fontSize:16,
    fontWeight:'500',
    letterSpacing: 1.2,
    lineHeight: 22,
    textAlign:'center',
  },
  btn:{
    backgroundColor:Colors.tint,
    paddingVertical:15,
    marginVertical:20,
    alignItems:'center',
    borderRadius:10,
  },
  btnText:{
    color:Colors.white,
    fontSize: 16,
    fontWeight: '700',
  },
});
