import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import ProEx from './PropEx';  
import Ruang from './Ruang';  
// import AppStateles from './AppStatles';
import Counter from './Counter';
// import component Prof Ex line 6 dan 19

class App extends React.Component{
    state = { tipe:'ruang' };

    componentWillMount(){
      this.setState({
        tipe:'ruang'
      })
    }

    renderElement(){ 
      if (this.state.tipe === 'ruang') {
        //Return the FirstScreen as a child to set in Parent View
        return(
          <Ruang  ruang="Persegi" luas="sis X sisi" keliling="pxl" urlImage='https://facebook.github.io/react-native/img/tiny_logo.png' />   
        );
      } else if (this.state.tipe === 'orang') {
        //Return the SecondScreen as a child to set in Parent View
        return(
          <ProEx  nama="Gilang" alamat="bandung" telp="022" email="andi@yahoo.com" /> 
        );
      }  
    }

    render(){
      // tempat untuk memasukan  kode javascript
        let type = this.state.tipe;
        return(
          // tempat untuk kode RECT-NATIVE jika ingin memanggil variable js harus menggunakan {}
            <View>  
              <Text>Value stateeTipe : {type}</Text>
              <TouchableOpacity
                  style={styles.button}
                  onPress={() => this.setState({ tipe: 'ruang' })}>
                  <Text style={{ color: '#7FFF00' }}>Data Ruang</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.button}
                onPress={() => this.setState({ tipe: 'orang' })}>
                <Text style={{ color: '#ffffff' }}>Data Orang</Text>
              </TouchableOpacity>
          

          <View style={{ backgroundColor: '	#00FFFF' }}>
          {this.renderElement()}
        </View>

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

export default App;