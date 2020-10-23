/* eslint-disable prettier/prettier */
/* eslint-disable no-dupe-keys */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity
} from 'react-native';

import {
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Header from '../../../components/molecules/Header/Header';
import PesananFeature from '../../../components/molecules/PesananFeature';
import Footer from '../../../components/molecules/Footer';
import Pesanan from '../../../components/molecules/Pesanan'



const HomeScreen = () => {
  return (
    <View style={{
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-between',
    }}>
      <ScrollView style={{flex:1, backgroundColor: 'white'}} >
        <Header />
      <Pesanan />
      <PesananFeature title="Jus Jambu" time="13 : 50" price="Rp.5000" date="17/10/2019"  />
      <PesananFeature title="Jus Jambu" time="13 : 50" price="Rp.5000" date="17/10/2019"  />
      <View style={{height:30}}></View>
      </ScrollView>
      <Footer/>
    </View>
  );
};

export default HomeScreen;
