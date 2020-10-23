import { func } from 'prop-types';
import React from 'react';
import {View,Text,Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Footer from '../../../components/molecules/Footer';
import ProfileSection from '../../../components/molecules/ProfileSection';

function Profile(){
    return(
        <View style={{flex: 1,justifyContent:'space-between'}}>
            <View style={{marginHorizontal: 32}}>
            <View style={{flexDirection: 'row', marginTop: 30,justifyContent:'space-between'}}>
                <View style={{flexDirection: 'row'}}>
                    <Image style={{width:65,height:65,borderRadius:5}} source={require('../../../assets/icon/image.png')}></Image>
                    <View style={{marginLeft:17}}>
                        <Text style={{fontWeight:'700',fontSize: 20}}>Fikri Nabil</Text>
                        <Text style={{fontWeight: '400', fontSize: 12,color:'#989898'}}>Pak Dudung Cafe</Text>
                        <Text style={{fontWeight: '400', fontSize: 12,color:'#989898'}}>088983254339</Text>
                    </View>
                </View>
                <View style={{width: 20,height: 20,backgroundColor: '#30B27C',justifyContent:'center',alignItems:'center',borderRadius:2}}>
                    <Image source={require('../../../assets/icon/edit.png')}></Image>
                </View>
            </View>
            <ProfileSection Title='Email' />
            <ProfileSection Title='Kata Sandi'/>
            <ProfileSection Title='Nomer Ponsel'/>
            <ProfileSection Title='Tentang Aplikasi'/>
            <ProfileSection Title='Bantuan'/>
            <View style={{width:308,height: 1,backgroundColor:'#323232',marginTop:20,alignSelf:'center'}}></View>
            </View>
            <Footer></Footer>
        </View>
    );
}

export default Profile