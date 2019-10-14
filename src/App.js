import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import ProEx from './PropEx';  
import Ruang from './Ruang';  
import AppStateles from './AppStatles';
// import component Prof Ex line 6 dan 19

class App extends React.Component{
    state = { tipe: 1 };
    
    componentWillMount(){
      this.setState({
        tipe:1
      })
    }

    renderElement(){
      console.log(this.state);
      if (this.state.tipe === 1) {
        //Return the FirstScreen as a child to set in Parent View
        return(
          <Ruang  ruang="Persegi" luas="sis X sisi" keliling="pxl" urlImage='https://facebook.github.io/react-native/img/tiny_logo.png' />   
        );
      } else if (this.state.tipe === 2) {
        //Return the SecondScreen as a child to set in Parent View
        return(
          <ProEx  nama="Gilang" alamat="bandung" telp="022" email="andi@yahoo.com" /> 
        
        );
      }  
    }

    render(){
        console.log('Hello Word')
        let type = this.state.tipe;
       
        return(
            <View> 
              <Text>Value stateeTipe : {this.state.tipe}</Text>
              <TouchableOpacity
                  style={styles.button}
                  onPress={() => this.setState({ tipe: 1 })}>
                  <Text style={{ color: '#ffffff' }}>Data Ruang</Text>
              </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => this.setState({ tipe: 2 })}>
              <Text style={{ color: '#ffffff' }}>Data Orang</Text>
            </TouchableOpacity>
          

          <View style={{ backgroundColor: '#ffffff' }}>
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