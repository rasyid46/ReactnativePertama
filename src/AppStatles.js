import React from 'react';
import {
  View,
  Text
} from 'react-native';

const AppStatles = (props) => ( 
   
    <View>
        <Text> Component Stateles  Stateles</Text> 
        <Text> Nama : {props.nama}  </Text> 
        <Text> Alamat  : {props.alamat} </Text> 
        <Text> Telp  : {props.telp} </Text> 
        <Text> Email  : {props.email} </Text> 
    </View>
   
)  
export default AppStatles ;