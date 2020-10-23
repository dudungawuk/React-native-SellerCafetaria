import React, { useState } from 'react';
import{View,Text,Image,TouchableOpacity,Modal} from 'react-native';
import { useNavigation } from '@react-navigation/native';

function Header() {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false)
  return (
    <View>
      <Modal
        transparent={true}
        visible={modalVisible}
      >
        <TouchableOpacity style={{backgroundColor: '#000000',flex:1,position: 'absolute',top: 0,bottom: 0,left: 0,right: 0,opacity: 0.5,}} onPress={() => {
                setModalVisible(!modalVisible);}}>
        </TouchableOpacity>
        <View style={{marginHorizontal:8,position:'relative',marginTop: 32,width: 250,height: 400,backgroundColor:'#ffffff',borderRadius: 5,alignSelf:'flex-end',opacity: 1.5}}>
            <TouchableOpacity onPress={() => {
                setModalVisible(!modalVisible);
              }}>
              <Image source={require('../../../assets/icon/notification1.png')} style={{alignSelf:'flex-end',marginTop: 8,marginRight :8}}></Image>
            </TouchableOpacity>
            <View style={{flexDirection:'row',alignItems:'center',marginBottom: 10}}>
              <Image style={{height:45,width:45,marginLeft:10}} source={require("../../../assets/icon/image.png")}></Image>
              <View style={{marginLeft: 9}}>
                <Text style={{fontSize:10,fontWeight:'600',color:'#323232'}}>Pesanan dari Raihan</Text>
                <Text style={{fontSize:10,fontWeight:'normal',color:'#DFD7D7'}}>Ayam Geprek boncabe,esteh</Text>
              </View>
            </View>
            
            <View style={{flexDirection:'row',alignItems:'center',marginBottom: 10}}>
              <Image style={{height:45,width:45,marginLeft:10}} source={require("../../../assets/icon/image.png")}></Image>
              <View style={{marginLeft: 9}}>
                <Text style={{fontSize:10,fontWeight:'600',color:'#323232'}}>Pesanan dari Raihan</Text>
                <Text style={{fontSize:10,fontWeight:'normal',color:'#DFD7D7'}}>Ayam Geprek boncabe,esteh</Text>
              </View>
            </View>

              <View style={{width:210,backgroundColor:'#323232',height:1,alignSelf:'center'}} />

          </View>
      </Modal>
    <View style={{ height: 183, backgroundColor: '#30B27C' }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <Image style={{ marginLeft: 15, marginTop: 39 }} source={require('../../../assets/icon/image.png')}></Image>
        </TouchableOpacity>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity>
          <Image style={{ marginTop: 39, marginRight: 20 }} source={require('../../../assets/icon/search.png')}></Image>
          </TouchableOpacity>
          <TouchableOpacity 
        onPress={() => {
          setModalVisible(true);
        }}>
          <Image style={{ marginRight: 15, marginTop: 39 }} source={require('../../../assets/icon/notification.png')}></Image>
          </TouchableOpacity>
        </View>   
      </View>
      <View style={{ marginLeft: 15, marginTop: 15 }}>
        <Text style={{ marginBottom: 7, color: '#FFFFFF', fontWeight: '600', fontSize: 15 }}>Halo,</Text>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#FFFFFF', marginRight: 5 }}>Pak Dudung's</Text>
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#989898' }}>Cafe</Text>
        </View>
      </View>
    </View>
  </View>
  );
}

export default Header