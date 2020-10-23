import React from 'react';
import {View,Text,Image} from 'react-native'

function PesananFeature(props) {
    return (
        <View>
      <View style={{marginHorizontal:26,marginTop:30}}>
      <View style={{justifyContent:'space-between',flexDirection:'row'}}>
        <View style={{flexDirection:'column'}}>
          <Text style={{color:'#989898',fontSize:15,fontWeight:'normal',fontStyle:'normal'}}>PESANAN MASUK</Text>
          <View style={{width:60,height: 1,marginTop: 5,backgroundColor: '#989898'}} />
        </View>
        <Image source={require('../../../assets/icon/slide.png')}></Image>
      </View>
    </View>
        <View style={{ flexDirection: 'row', marginHorizontal: 26, marginTop: 30, justifyContent: 'space-between', flexDirection: 'row' }}>
            <View style={{ flexDirection: 'row' }}>
                <Image source={require('../../../assets/icon/image.png')} style={{ width: 60, height: 60 }}></Image>
                <View style={{ flexDirection: 'column', marginLeft: 15, marginTop: 3 }}>
                    <Text style={{ fontSize: 13, fontWeight: 'bold', color: '#323232' }}>{props.title}</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 5 }}>
                        <Image source={require('../../../assets/icon/clock.png')}></Image>
    <Text style={{ marginLeft: 5, fontSize: 10, color: '#989898' }}>{props.time}</Text>
                    </View>
                </View>
            </View>
            <View style={{ flexDirection: 'column', marginLeft: 15, marginTop: 3 }}>
    <Text style={{ fontSize: 13, fontWeight: 'bold', color: '#323232' }}>{props.price}</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 5 }}>
                    <Image source={require('../../../assets/icon/clock.png')}></Image>
                    <Text style={{ marginLeft: 5, fontSize: 10, color: '#989898' }}>{props.date}</Text>
                </View>
            </View>
        </View>        
        <View style={{ flexDirection: 'row', marginHorizontal: 26, marginTop: 15, justifyContent: 'space-between', flexDirection: 'row' }}>
            <View style={{ flexDirection: 'row' }}>
                <Image source={require('../../../assets/icon/image.png')} style={{ width: 60, height: 60 }}></Image>
                <View style={{ flexDirection: 'column', marginLeft: 15, marginTop: 3 }}>
                    <Text style={{ fontSize: 13, fontWeight: 'bold', color: '#323232' }}>{props.title}</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 5 }}>
                        <Image source={require('../../../assets/icon/clock.png')}></Image>
    <Text style={{ marginLeft: 5, fontSize: 10, color: '#989898' }}>{props.time}</Text>
                    </View>
                </View>
            </View>
            <View style={{ flexDirection: 'column', marginLeft: 15, marginTop: 3 }}>
    <Text style={{ fontSize: 13, fontWeight: 'bold', color: '#323232' }}>{props.price}</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 5 }}>
                    <Image source={require('../../../assets/icon/clock.png')}></Image>
                    <Text style={{ marginLeft: 5, fontSize: 10, color: '#989898' }}>{props.date}</Text>
                </View>
            </View>
        </View>
        </View>
    );
}

export default PesananFeature