import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, ImageBackground, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Svg, { Line, Circle } from 'react-native-svg';
import { Icon } from 'react-native-elements'
import { useFonts } from 'expo-font';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { Chip } from 'react-native-paper';





export default function Home() {
    const navigation = useNavigation();
    const [fontLoaded] = useFonts({
        B: require('../assets/fonts/b.ttf'),
        M: require('../assets/fonts/m.ttf'),
        R: require('../assets/fonts/m.ttf'),
        S: require('../assets/fonts/s.ttf'),

      });
    const [cowmilk,setCowMilk] = useState(false);
    const [eggs,setEggs] = useState(false);
    const [peanut,setPeanut] = useState(false);
    const [fish,setFish] = useState(false);
    const [wheat,setWheat] = useState(false);
    const [soy,setSoy] = useState(false);
    const [shellfish,setShellfish] = useState(false);
    const [gluten,setGluten] = useState(false);
      if (!fontLoaded) {
        return null;
      }
   
    return (
        <View style={styles.container}>
            <View style={{ marginTop: '20%', marginHorizontal:'5%' }}>
                <View style={{flexDirection:'row', display:'flex'}}><Image source={require('../assets/logo.png')} style={{height:50, width:50, resizeMode:'contain'}}></Image>
                </View>
                <Text style={{textAlign:'justify', color:"#F14848",fontSize:25, fontFamily:'B', marginHorizontal:'5%', marginTop:'15%'}}>Hey Mark, </Text>
                <Text style={{textAlign:'justify', color:"#000",fontSize:20, fontFamily:'R', marginHorizontal:'5%', marginTop:'0.5%'}}>What would you like to do today? </Text>
            </View>
            <ScrollView><View style={{marginHorizontal:'2.5%', marginTop:'5%'}}>
                
                <TouchableOpacity><Image source={require('../assets/opt0.png')}></Image></TouchableOpacity>
                <TouchableOpacity><Image source={require('../assets/opt3.png')}></Image></TouchableOpacity>
                <TouchableOpacity><Image source={require('../assets/opt2.png')}></Image></TouchableOpacity>
                <TouchableOpacity><Image source={require('../assets/opt1.png')}></Image></TouchableOpacity>
               
                
            </View></ScrollView>

            

          
            
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
        height: 450,
        width: '100%',
        marginTop: '-10%',
        resizeMode: 'contain',
        alignSelf: 'center'
    },

});