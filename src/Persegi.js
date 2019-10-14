import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Button
} from 'react-native';

class Persegi extends React.Component{
    //1# inisialisai State
    state = { panjang:0,lebar:null,luas:null };

    //#2 Method untuk merubah state luas 
    hitungLuas=()=>{
        let panjang = this.state.panjang;  // tampung nilai state akhir pada variable panjang
        let lebar = this.state.lebar; // tampung nilai state akhir pada variabel lebar 
        let luas = parseInt(panjang) * parseInt(lebar); // menghitung luas persegi variabel panjang dan luas harus di konvesikan ke int karena asalny string
        this.setState({luas  : luas}) // set state Luas
    }


    render(){
        //#3 read component state
        let currentValue = this.state.value
        return( 
            <View>
                <Text>  Hitung Luas Persegi  </Text> 
                <TextInput
                  style={{height: 40}}
                  placeholder="Masukan Panjang"
                  onChangeText={(InputPanjang) => this.setState({panjang: InputPanjang})}
                  value={this.state.panjang}
                />

                <TextInput
                  style={{height: 40}}
                  placeholder="Masukan Lebar"
                  onChangeText={(InputLebar) => this.setState({lebar: InputLebar})}
                  value={this.state.lebar}
                />

                <Button
                  title="Hitung Luas"
                  onPress={() => {
                    this.hitungLuas()
                  }}
                />

                 <Text>{this.state.luas}</Text>
                    

                
                

                 
            </View>
        );
    }
}

const styles = StyleSheet.create({
  
    button: {
      alignItems: 'center',
      backgroundColor: '#808080',
      padding: 20,
      margin: 4,
    },
  });
export default Persegi;