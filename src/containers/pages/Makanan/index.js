/* eslint-disable no-undef */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable keyword-spacing */
/* eslint-disable prettier/prettier */
import { Textarea } from 'native-base';
import React, { useState } from 'react';
import { TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native';
import {View,Text,Image,Modal,TouchableHighlight} from 'react-native';
import { useNavigation } from '@react-navigation/native';


function Makanan(){
  const [modalDeleteVisible, setModalDeleteVisible] = useState(false);
  const [modalEditAfterSaveVisible, setModalEditAfterSaveVisible] = useState(false);
  const [modalEdit1Visible, setModalEdit1Visible] = useState(false);
  const [modalAfterDeleteVisible, setModalAfterDeleteVisible] = useState(false)
  const navigation = useNavigation();

  state = {
    visibleModal : false,
  };
    return(
        <View style={{flex:1,backgroundColor:'#ffffff'}}>

        <Modal transparent={true} visible={modalAfterDeleteVisible}>
        <TouchableOpacity style={{backgroundColor: '#000000',flex:1,position: 'absolute',top: 0,bottom: 0,left: 0,right: 0,opacity: 0.5,}} onPress={() => {
              setModalAfterDeleteVisible(!modalAfterDeleteVisible);}} />
        <View style={{justifyContent:'center', flex:1}}>
            <View style={{marginHorizontal:30,position:'relative',width: 300,height: 230,backgroundColor:'#ffffff',borderRadius: 5,opacity: 1.5,alignSelf:'center'}}>
                <Text style={{marginTop:30,marginHorizontal:37,alignSelf:'center',fontWeight:'600',fontSize:15,color:'#323232'}}>Makanan Berhasil dihapus</Text>
                <Image source={require('../../../assets/icon/modaldelete.png')} style={{width:110,height:110,marginTop:20   ,alignSelf:'center'}}></Image>
                <Text style={{fontSize:15,color:'#FB5C5C',alignSelf:'flex-end',marginRight:26}}>Kembali</Text>
            </View>
        </View>
        </Modal>

        <Modal
      transparent={true}
      visible={modalDeleteVisible}
    >
      <TouchableOpacity style={{backgroundColor: '#000000',flex:1,position: 'absolute',top: 0,bottom: 0,left: 0,right: 0,opacity: 0.5,}} onPress={() => {
              setModalDeleteVisible(!modalDeleteVisible);}} />
        <View style={{justifyContent:'center', flex:1}}>
            <View style={{marginHorizontal:30,position:'relative',width: 300,height: 230,backgroundColor:'#ffffff',borderRadius: 5,opacity: 1.5,alignSelf:'center'}}>
                <TouchableOpacity onPress={() => {setModalDeleteVisible(!modalDeleteVisible);}}>
                    <Image source={require('../../../assets/icon/x.png')} style={{alignSelf:'flex-end',marginTop:12,marginRight:12}}></Image>
                </TouchableOpacity>
                <Text style={{marginTop:5,marginHorizontal:37,alignSelf:'center',fontWeight:'600',fontSize:15,color:'#323232'}}>Hapus makanan dari menu?</Text>
                <Image source={require('../../../assets/icon/modaldelete.png')} style={{width:110,height:110,marginTop:20   ,alignSelf:'center'}}></Image>
                <TouchableOpacity onPress={() => {setModalAfterDeleteVisible(!modalAfterDeleteVisible);}}>
                    <Text style={{fontSize:15,color:'#FB5C5C',alignSelf:'flex-end',marginRight:26}}>Hapus</Text>
                </TouchableOpacity>
            </View>
        </View>
    </Modal>
    <Modal transparent={true}
      visible={modalEdit1Visible}> 
        <TouchableOpacity style={{backgroundColor: '#000000',flex:1,position: 'absolute',top: 0,bottom: 0,left: 0,right: 0,opacity: 0.5,}} onPress={() => {
              setModalEdit1Visible(!modalEdit1Visible);}} />
        <View style={{justifyContent:'center',flex:1}}>
            <View style={{marginHorizontal:30,position:'relative',width: 300,height: 450,backgroundColor:'#ffffff',borderRadius: 5,opacity: 1.5,alignSelf:'center'}}>
                <TouchableOpacity onPress={() => {setModalEdit1Visible(!modalEdit1Visible);}}>
                    <Image source={require('../../../assets/icon/x.png')} style={{alignSelf:'flex-end',marginTop:12,marginRight:12}}></Image>
                </TouchableOpacity> 
                    <View style={{marginHorizontal:26,flex:1}}>
                        <Text style={{fontSize:15,fontWeight:'bold',color:'#323232',marginTop:5,marginBottom:20}}>Edit</Text>
                        <TextInput  style={{ height: 40, borderColor: 'gray', borderWidth: 1,borderColor:'#C4C4C4',borderRadius:4,paddingHorizontal:15,fontSize:12}} placeholder='Foto Makanan' placeholderTextColor='#c4c4c4'/>
                        <TextInput  style={{ marginTop: 10,height: 40, borderColor: 'gray', borderWidth: 1,borderColor:'#C4C4C4',borderRadius:4,paddingHorizontal:15,fontSize:12}} placeholder='Nama Makanan' placeholderTextColor='#c4c4c4'/>
                        <TextInput  style={{ marginTop: 10,height: 40, borderColor: 'gray', borderWidth: 1,borderColor:'#C4C4C4',borderRadius:4,paddingHorizontal:15,fontSize:12}} placeholder='Harga' placeholderTextColor='#c4c4c4'/>
                        <Textarea  style={{ justifyContent:'flex-start',marginTop: 10,height: 155, borderColor: 'gray', borderWidth: 1,borderColor:'#C4C4C4',borderRadius:4,paddingHorizontal:15,fontSize:12}} placeholder='Deskripsi' placeholderTextColor='#c4c4c4'/>
                        <TouchableOpacity onPress={() => {setModalEditAfterSaveVisible(!modalEditAfterSaveVisible);}}>
                            <Text style={{color:'#30B27C',alignSelf:'flex-end',fontSize:15}}>Simpan</Text>
                        </TouchableOpacity>
                    </View>
            </View>
        </View>
    </Modal>
    <Modal
      transparent={true}
      visible={modalEditAfterSaveVisible}
    >
      <TouchableOpacity style={{backgroundColor: '#000000',flex:1,position: 'absolute',top: 0,bottom: 0,left: 0,right: 0,opacity: 0.5,}} onPress={() => {
              setModalEditAfterSaveVisible(!modalEditAfterSaveVisible);}} />
        <View style={{justifyContent:'center', flex:1}}>
            <View style={{marginHorizontal:30,position:'relative',width: 300,height: 448,backgroundColor:'#ffffff',borderRadius: 5,opacity: 1.5,alignSelf:'center'}}>
                <TouchableOpacity onPress={() => {setModalEditAfterSaveVisible(!modalEditAfterSaveVisible);}}>
                    <Image source={require('../../../assets/icon/x.png')} style={{alignSelf:'flex-end',marginTop:12,marginRight:12}}></Image>
                </TouchableOpacity>
                <View style={{marginHorizontal: 26,flex:1}}>
                    <Text style={{fontSize:15,fontWeight:'bold',color:'#323232',marginTop:5,marginBottom:20}}>Edit</Text>
                    <View style={{flexDirection:'row'}}>
                        <Image style={{width:50,height:50}} source={require('../../../assets/icon/ayambakar.png')}></Image>
                        <View>
                            <View style={{flexDirection:'row'}}>
                            <Text style={{marginHorizontal:20,fontWeight:'500',fontSize:15,color:'#323232'}}>Ayam Bakar</Text>
                            <TouchableOpacity style={{width:15,height:15,justifyContent:'center',alignItems:'center',backgroundColor:'#30B27C',borderRadius:2}}>
                                <Image source={require("../../../assets/icon/edit.png")}></Image>
                            </TouchableOpacity>
                            </View>
                            <View style={{flexDirection:'row',marginTop:5}}>
                            <Text style={{marginHorizontal:20,color:'#DFD7D7',fontSize:10,alignSelf:'center'}}>Rp. 15.000</Text>
                            <TouchableOpacity style={{width:15,height:15,justifyContent:'center',alignItems:'center',backgroundColor:'#30B27C',borderRadius:2}}>
                                <Image source={require("../../../assets/icon/edit.png")}></Image>
                            </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={{flexDirection:'row',marginTop:5}}>
                            <Text style={{marginRight:20,color:'#323232',fontSize:15}}>Deskripsi</Text>
                            <TouchableOpacity style={{alignSelf:'center',width:15,height:15,justifyContent:'center',alignItems:'center',backgroundColor:'#30B27C',borderRadius:2}}>
                                <Image source={require("../../../assets/icon/edit.png")}></Image>
                            </TouchableOpacity>
                    </View>
                    <Text style={{color:'#DFD7D7',fontSize:10,alignSelf:'center',marginTop:5}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non nunc non libero congue pellentesque sit amet non quam. Vivamus in diam nisi.</Text>
                </View>
                <TouchableOpacity onPress={() => {setModalEditAfterSaveVisible(!modalEditAfterSaveVisible);}}>
                    <Text style={{alignSelf:'flex-end',marginRight:26,marginBottom:30,color:'#30B27C',fontSize:15}}>Simpan</Text>
                </TouchableOpacity>
            </View>
        </View>
    </Modal>
            <View style={{marginHorizontal:26,marginTop:15,alignContent:'center'}}>
                <View style={{flexDirection:'row',justifyContent:'space-between',alignContent:'center'}}>
                    <Image source={require('../../../assets/icon/back.png')}></Image>
                    <Text style={{fontSize:16,fontWeight:'bold',color:'#323232'}}>Makanan</Text>
                    <Text style={{color:'#ffffff'}}>p</Text>
                </View>
                <View style={{width:360,height:1,backgroundColor:'#323232',alignSelf:'center',marginTop:20}}></View>
                <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:40}}>
                    <TouchableOpacity onPress={() => navigation.navigate('Detail')} style={{flexDirection:'row'}}>
                        <Image source={require("../../../assets/icon/ayambakar.png")} style={{width:40,height:40,alignSelf:'center',borderRadius:2}}></Image>
                        <View style={{marginLeft:10}}>
                            <Text style={{fontSize:15,fontWeight:'600',color:'#323232'}}>Ayam Bakar</Text>
                            <Text style={{fontSize:10,color:'#DFD7D7'}}>Rp. 15.000</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={{flexDirection:'row',alignSelf:'center'}}>
                        <TouchableOpacity onPress={() => {setModalDeleteVisible(true);}} style={{width:20,height:20,backgroundColor:'#EA2D2D',borderRadius: 2,justifyContent:'center',alignItems:'center',marginRight: 10}}>
                            <Image source={require('../../../assets/icon/delete.png')}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {setModalEdit1Visible(true);}} style={{width:20,height:20,backgroundColor:'#30B27C',borderRadius: 2,justifyContent:'center',alignItems:'center'}}>
                            <Image source={require('../../../assets/icon/edit.png')}></Image>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:30}}>
                    <View style={{flexDirection:'row'}}>
                        <Image source={require("../../../assets/icon/ayambakar.png")} style={{width:40,height:40,alignSelf:'center',borderRadius:2}}></Image>
                        <View style={{marginLeft:10}}>
                            <Text style={{fontSize:15,fontWeight:'600',color:'#323232'}}>Ayam Bakar</Text>
                            <Text style={{fontSize:10,color:'#DFD7D7'}}>Rp. 15.000</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:'row',alignSelf:'center'}}>
                        <View style={{width:20,height:20,backgroundColor:'#EA2D2D',borderRadius: 2,justifyContent:'center',alignItems:'center',marginRight: 10}}>
                            <Image source={require('../../../assets/icon/delete.png')}></Image>
                        </View>
                        <View style={{width:20,height:20,backgroundColor:'#30B27C',borderRadius: 2,justifyContent:'center',alignItems:'center'}}>
                            <Image source={require('../../../assets/icon/edit.png')}></Image>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
}

export default Makanan;
