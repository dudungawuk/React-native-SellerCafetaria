import React from 'react';
import {View,Text,TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

function Pesanan(){
  const navigation = useNavigation();
    return(
        <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:30}}>
          <TouchableOpacity onPress={() => navigation.navigate('Makanan')} style={{width: 150,height: 200,backgroundColor:'#0E41C5',borderRadius:10,justifyContent:'center'}}>
            <Text style={{fontSize:20,fontWeight:'bold',color:'#FFFFFF',alignSelf:'center'}}>MAKANAN</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{width: 150,height: 200,backgroundColor:'#F88720',borderRadius:10,justifyContent:'center'}}>
            <Text style={{fontSize:20,fontWeight:'bold',color:'#FFFFFF',alignSelf:'center'}}>MINUMAN</Text>
          </TouchableOpacity>
        </View>
    );
}

export default Pesanan