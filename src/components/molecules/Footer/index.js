import React from 'react';
import {View,Image,Text,TouchableOpacity} from 'react-native';

function PesananMasuk (){
    return(
    <View style={{height: 67, backgroundColor: 'white',flexDirection: 'row',borderTopWidth:1,borderColor:'#ddd',shadowColor:'#000',shadowOpacity:0.8,elevation:1}} >
      <TouchableOpacity style={{justifyContent:'center',alignItems:'center',flex:1}}>
        <Image style={{width:22,height:25}} source={require('../../../assets/icon/home.png')}></Image>
      </TouchableOpacity>
      <TouchableOpacity style={{justifyContent:'center',alignItems:'center',flex:1}} >
        <Image style={{width:22,height:25}} source={require('../../../assets/icon/container.png')}></Image>
      </TouchableOpacity>
      <TouchableOpacity style={{justifyContent:'center',alignItems:'center',flex:1}}>
        <Image style={{width:22,height:25}} source={require('../../../assets/icon/profile.png')}></Image>
      </TouchableOpacity>
    </View>
    );
}

export default PesananMasuk