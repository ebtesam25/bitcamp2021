import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Button, ImageBackground, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Svg, { Line, Circle } from 'react-native-svg';
import { Icon } from 'react-native-elements'
import { useFonts } from 'expo-font';





export default function Welcome() {
    const navigation = useNavigation();
    const [fontLoaded] = useFonts({
        B: require('../assets/fonts/b.ttf'),
        M: require('../assets/fonts/m.ttf'),
        S: require('../assets/fonts/s.ttf'),

      });


      if (!fontLoaded) {
        return null;
      }
      
    
   
    return (
        <View style={styles.container}>
            <View style={{ alignSelf:'center', marginTop:'45%' }}>
            <Image source={require('../assets/logo.png')} style={{width:100, height:100, resizeMode:'contain', alignSelf:'center'}}></Image>
              <View style={{alignSelf:'center', width:'70%'}}>
                <Text style={{fontFamily:'B', fontSize:35, color:'#F14848', textAlign:'center'}}>BasedMatch</Text>
                <Text style={{fontFamily:'M', fontSize:20, color:'#745E5E', textAlign:'center', marginTop:'5%'}}>Connecting you with like-minded people</Text>

              </View>
            </View>
            <TouchableOpacity onPress={()=>navigation.navigate('Signin')}><View style={{paddingHorizontal:'30%', paddingVertical:'5%', alignSelf:'center', borderRadius:50, backgroundColor:"#F14848", marginTop:'50%'}}>
                  <Text style={{fontFamily:'S', fontSize:17, color:"#FFF", textAlign:'center', textAlignVertical:'center'}}>Sign In</Text></View></TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('Signup')}><View style={{paddingHorizontal:'17.5%', paddingVertical:'5%', alignSelf:'center', borderRadius:50, borderWidth:2, borderColor:"#F14848", backgroundColor:"#FFF", marginTop:'5%'}}>
                  <Text style={{fontFamily:'S', fontSize:17, color:"#F14848", textAlign:'center', textAlignVertical:'center'}}>Create an account</Text></View></TouchableOpacity>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        position: 'relative',
        backgroundColor: '#FFF'
    },
    header: {
        height: '55%',
        width: '100%',
        marginTop: '-5%',
        resizeMode: 'contain',
        alignSelf: 'center'
    },

});