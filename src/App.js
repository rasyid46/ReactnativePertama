import React from 'react';
import {
  View,
  Text,
  Image 
} from 'react-native';
import ProEx from './PropEx';  
import Ruang from './Ruang';  
// import component Prof Ex line 6 dan 19

class App extends React.Component{

    render(){
        console.log('Hello Word')
        return(

            <View> 
              <ProEx  nama="Gilang" alamat="bandung" telp="022" email="andi@yahoo.com" /> 
              <ProEx  nama="Reza" alamat="sukabumi" telp="123" email="reza@yahoo.com" />   
              <Ruang  ruang="Persegi" luas="sis X sisi" keliling="pxl"  />   
            </View>
            
         );
    }
}

export default App;