import React from 'react';
import {
  View,
  Text,
  Image
} from 'react-native';

class Ruang extends React.Component{
    render(){
        return( 
            <View>

                <Text> Nama  Ruang: {this.props.ruang}  </Text> 
                <Text> Luas  : {this.props.luas} </Text> 
                <Text> Keliling  : {this.props.keliling} </Text>
                <Image style={{width: 50, height: 50}} source={{uri: 'https://facebook.github.io/react-native/img/tiny_logo.png'}}
        />
            </View>
        );
    }
}

export default Ruang;