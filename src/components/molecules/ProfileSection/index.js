import React from 'react';
import {View,Text,Image} from 'react-native';

function ProfileSection(props){
    return(
        <View>
        <View style={{justifyContent:'center',alignItems:'center',marginTop:30}}>
        <View style={{width:308,height: 1,backgroundColor:'#323232',}}></View>
    </View>
    <View style={{justifyContent:'center',alignItems:'center'}}>
    <View style={{flexDirection:'row',justifyContent:'space-between',width: 308,marginTop:20    }}>
        <Text style={{fontSize:15,fontWeight:'400'}}>{props.Title}</Text>
        <Image source={require('../../../assets/icon/slide.png')}></Image>
    </View>
    </View>
    </View>
    );
}

export default ProfileSection