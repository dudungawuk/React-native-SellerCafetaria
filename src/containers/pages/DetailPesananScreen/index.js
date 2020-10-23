/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
import React from 'react';
import {View,Text,Image} from 'react-native';

function Detail(){
    return(
        <View style={{flex:1,backgroundColor:'#ffffff'}}>
            <View style={{marginHorizontal:26,flex:1}}>
                <View style={{flexDirection:'row',alignItems:'center',marginTop:30}}>
                    <Image source={require("../../../assets/icon/back.png")}></Image>
                    <Text style={{fontSize:25,fontWeight:'bold',color:'#323232',marginLeft:20}}>Detail Pesanan</Text>
                </View>
                <View style={{marginTop:30,flexDirection:'row'}}>
                    <Image style={{width:40,height:40}} source={require("../../../assets/icon/ayambakar.png")}></Image>
                    <View style={{marginLeft:10}}>
                        <Text style={{fontWeight:'600',fontSize:15,color:'#323232'}}>Ayam Bakar</Text>
                        <Text style={{fontSize:10,color:'#DFD7D7',marginTop:5}}>Rp. 15.000</Text>
                    </View>
                </View>
                <Text style={{marginTop:10,fontWeight:'600',fontSize:15,color:'#323232'}}>Catatan</Text>
                <Text style={{fontSize:10,color:'#DFD7D7',marginTop:5}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non nunc non libero congue pellentesque sit amet non quam. Vivamus in diam nisi</Text>
                <Text style={{fontWeight:'600',fontSize:15,color:'#323232',marginTop:25}}>Status</Text>
                <Text style={{color:'#30b27c',marginTop:5,fontSize:15}}>Selesai</Text>
            </View>
        <View style={{width:308,height:50,alignItems:'center',justifyContent:'center',borderWidth:1,borderRadius:5,alignSelf:'center',marginBottom:30,borderColor:'#30B27C'}}>
            <Text style={{fontSize:12,fontWeight:'600',color:'#30B27C'}}>Kembali</Text>
        </View>
        </View>
    );
}

export default Detail;