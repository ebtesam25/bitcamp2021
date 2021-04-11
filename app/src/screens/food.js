import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, ImageBackground, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Svg, { Line, Circle } from 'react-native-svg';
import { Icon } from 'react-native-elements'
import { useFonts } from 'expo-font';
import { TextInput } from 'react-native-gesture-handler';
import { Chip } from 'react-native-paper';





export default function Food() {
    const navigation = useNavigation();
    const [fontLoaded] = useFonts({
        B: require('../assets/fonts/b.ttf'),
        M: require('../assets/fonts/m.ttf'),
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
            <ImageBackground source={require('../assets/foodbg.png')} style={{width:'100%', height:300, resizeMode:'contain'}}>
            <View style={{ marginTop: '10%', marginHorizontal:'5%' }}>
                
                <View style={{flexDirection:'row', display:'flex', marginTop:'15%'}}><Icon name="chevron-left" type="entypo" size={30} color="#FF7B30"></Icon>
                </View>
                <Text style={{textAlign:'left', color:"#FF7B30",fontSize:30, fontFamily:'B', marginHorizontal:'5%', marginTop:'15%'}}>Explore restaurants and dishes </Text>
            </View>
            </ImageBackground>


            <Text style={{textAlign:'left', color:"#FF7B30",fontSize:25, width:'80%', fontFamily:'B', marginHorizontal:'5%', marginTop:'5%'}}>Hey Mark, what kind of food do you prefer?</Text>
            <Text style={{textAlign:'left', color:"#9C7569",fontSize:17, width:'80%', fontFamily:'R', marginHorizontal:'5%', marginTop:'1%'}}>(select all that apply)</Text>



            <View style={{marginHorizontal:'7.5%', marginTop:'5%', flexDirection:'row', display:'flex', flexWrap:'wrap'}}>
               <View>
                   <Image source={require('../assets/everything.png')} style={{height:70, width:70, resizeMode:'contain'}}></Image>
                   <Text style={{fontFamily:'M', marginLeft:'10%', fontSize:12}}>Everything</Text>
                </View>
                <View>
                   <Image source={require('../assets/vegan.png')} style={{height:70, width:70, resizeMode:'contain'}}></Image>
                   <Text style={{fontFamily:'M', marginLeft:'15%', fontSize:12}}>Vegan</Text>
                </View>
                <View>
                   <Image source={require('../assets/halal.png')} style={{height:70, width:70, resizeMode:'contain'}}></Image>
                   <Text style={{fontFamily:'M', marginLeft:'15%', fontSize:12}}>Halal</Text>
                </View>
                <View>
                   <Image source={require('../assets/fastfood.png')} style={{height:70, width:70, resizeMode:'contain'}}></Image>
                   <Text style={{fontFamily:'M', marginLeft:'7.5%', fontSize:12}}>Fast Food</Text>
                </View>
                <View>
                   <Image source={require('../assets/chinese.png')} style={{height:70, width:70, resizeMode:'contain'}}></Image>
                   <Text style={{fontFamily:'M', marginLeft:'15%', fontSize:12}}>Chinese</Text>
                </View>
                <View>
                   <Image source={require('../assets/thai.png')} style={{height:70, width:70, resizeMode:'contain'}}></Image>
                   <Text style={{fontFamily:'M', marginLeft:'18%', fontSize:12}}>Thai</Text>
                </View>
                <View>
                   <Image source={require('../assets/bakery.png')} style={{height:70, width:70, resizeMode:'contain'}}></Image>
                   <Text style={{fontFamily:'M', marginLeft:'13%', fontSize:12}}>Pastry</Text>
                </View>
                <View>
                   <Image source={require('../assets/coffee.png')} style={{height:70, width:70, resizeMode:'contain'}}></Image>
                   <Text style={{fontFamily:'M', marginLeft:'12.5%', fontSize:12}}>Coffee</Text>
                </View>
                <View>
                   <Image source={require('../assets/glutenfree.png')} style={{height:70, width:70, resizeMode:'contain'}}></Image>
                   <Text style={{fontFamily:'M', marginLeft:'10%', fontSize:12}}>Gluten-free</Text>
                </View>
                <View>
                   <Image source={require('../assets/organic.png')} style={{height:70, width:70, resizeMode:'contain'}}></Image>
                   <Text style={{fontFamily:'M', marginLeft:'10%', fontSize:12}}>Organic</Text>
                </View>
                <View>
                   <Image source={require('../assets/kosher.png')} style={{height:70, width:70, resizeMode:'contain'}}></Image>
                   <Text style={{fontFamily:'M', marginLeft:'12.5%', fontSize:12}}>Kosher</Text>
                </View>
                <View>
                   <Image source={require('../assets/other.png')} style={{height:70, width:70, resizeMode:'contain'}}></Image>
                   <Text style={{fontFamily:'M', marginLeft:'12.5%', fontSize:12}}>Others</Text>
                </View> 
            </View>
   
            <View style={{flexDirection:'row', display:'flex', marginHorizontal:'5%'}}>
            <TouchableOpacity onPress={()=>navigation.navigate('Dishes')}><View style={{marginTop:'25%', width:'90%', backgroundColor:'#FF8533', marginLeft:'10%', borderRadius:50, display:'flex', flexDirection:'row'}}>
                <Text style={{fontFamily:'S', color:'#FFF', fontSize:15, textAlign:'center', marginLeft:'15%', marginVertical:'2.5%', textAlignVertical:'center', paddingVertical:'2.5%'}} >Next  </Text><Icon name="arrow-forward-circle" type="ionicon" color="#FFF" size={20} style={{textAlignVertical:'center', marginVertical:'50%'}}></Icon>
            </View></TouchableOpacity>
            <Text style={{fontFamily:'B', textAlign:'center', fontSize:15, marginTop:'2.5%',color:'#FF8533', textDecorationStyle:'solid', textDecorationLine:'underline', marginLeft:'35%', marginTop:'15%'}} onPress={()=>navigation.navigate('Signup')}>or skip</Text>
           </View>
            

          
            
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