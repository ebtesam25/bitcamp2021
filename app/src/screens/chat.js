import React, { useState, useCallback, useEffect } from 'react'
import { GiftedChat, Bubble } from 'react-native-gifted-chat'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Image, ImageBackground, TouchableOpacity, Text } from 'react-native';
import { Icon } from 'react-native-elements';

export default function Chat({route}) {
  const [messages, setMessages] = useState([]);
    const [avatar, setAvatar] = useState([]);
    const [name1, setName] = useState([]);
    const [img, setImg] = useState([]);
    const {name,img1} = route.params;
  useEffect(() => {
      setName(name);
      setImg(img1);

    async function _getName() {
        try {
            const avatar = await AsyncStorage.getItem('@avatar')
            if(avatar !== null) {
              console.log(avatar);
              setAvatar(avatar);
            }
          } catch(e) {
            // error reading value
          }
        
    }
    _getName();
    setMessages([
      {
        _id: 1,
        text: 'Say Hello!',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'G',
          avatar: img1.toString(),
        },
      },
    ])
  }, [img1, avatar, name])

   

  


  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  }, [])

  return (
      <View style={{height:'100%', flex:1}}>
          <ImageBackground source={require('../assets/matcheswall.png')} style={{height:100, width:'100%',}} imageStyle={{resizeMode:'cover'}}>
         <View style={{flexDirection:'row', display:'flex', marginHorizontal:'10%'}}>
               <TouchableOpacity><Icon name="chevron-left" type="entypo" size={30} color="#F14848"  style={{alignSelf:'flex-start'}}></Icon>
               <Text style={{textAlign:'left',fontSize:30, fontFamily:'B', marginTop:'20%', marginLeft:'5%', color:"#F14848"}}>{name1.toString()}</Text></TouchableOpacity>
                </View>
          </ImageBackground>
          
          
    <GiftedChat
    
        textInputStyle={{fontFamily:'B', color:'red'}}
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: 1,
      }}
      
    /></View>
  )
}