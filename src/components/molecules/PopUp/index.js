import React ,{useState} from 'react';
import {Modal,View,Text,TouchableOpacity,Image} from 'react-native';

function PopUp(){
  const [modalVisible, setModalVisible] = useState(false)
    return(
        
      <Modal
      transparent={true}
      visible={modalVisible}
    >
      <TouchableOpacity style={{backgroundColor: '#000000',flex:1,position: 'absolute',top: 0,bottom: 0,left: 0,right: 0,opacity: 0.5,}} onPress={() => {
              setModalVisible(!modalVisible);}} />
      <View style={{marginHorizontal:8,position:'relative',marginTop: 32,width: 250,height: 400,backgroundColor:'#ffffff',borderRadius: 5,alignSelf:'flex-end',opacity: 1.5}}>
          <TouchableOpacity onPress={() => {
              setModalVisible(!modalVisible);
            }}>
            <Image source={require('../../../assets/icon/notification1.png')} style={{alignSelf:'flex-end',marginTop: 8,marginRight :8}} />
          </TouchableOpacity>
          <View style={{flexDirection:'row',alignItems:'center',marginBottom: 10}}>
            <Image style={{height:45,width:45,marginLeft:10}} source={require('../../../assets/icon/image.png')} />
            <View style={{marginLeft: 9}}>
              <Text style={{fontSize:10,fontWeight:'600',color:'#323232'}}>Pesanan dari Raihan</Text>
              <Text style={{fontSize:10,fontWeight:'normal',color:'#DFD7D7'}}>Ayam Geprek boncabe,esteh</Text>
            </View>
          </View>
          
          <View style={{flexDirection:'row',alignItems:'center',marginBottom: 10}}>
            <Image style={{height:45,width:45,marginLeft:10}} source={require('../../../assets/icon/image.png')} />
            <View style={{marginLeft: 9}}>
              <Text style={{fontSize:10,fontWeight:'600',color:'#323232'}}>Pesanan dari Raihan</Text>
              <Text style={{fontSize:10,fontWeight:'normal',color:'#DFD7D7'}}>Ayam Geprek boncabe,esteh</Text>
            </View>
          </View>

            <View style={{width:210,backgroundColor:'#323232',height:1,alignSelf:'center'}} />

        </View>
    </Modal>
    );
}

export default PopUp