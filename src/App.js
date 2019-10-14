import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import ProEx from './PropEx';  
import Ruang from './Ruang';  
// import component Prof Ex line 6 dan 19

class App extends React.Component{
  state = { tipe: 1 };

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
        <Ruang  ruang="Jajar Genjang" luas="sis X sisi X tinngi" keliling="pxlXt" urlImage='https://laelitm.com/wp-content/uploads/2019/07/rumus-luas-jajar-genjang.jpg' />   
      );
    } 

     
    }
    componentWillMount(){
      this.setState({
        tye:2
      })
    }
    render(){
        console.log('Hello Word')
        let type = this.state.tipe;
       
        return(
            <View> 
              <Text>{this.state.tipe}</Text>
              <ProEx  nama="Gilang" alamat="bandung" telp="022" email="andi@yahoo.com" /> 
              <TouchableOpacity
            style={styles.button}
            onPress={() => this.setState({ tipe: 1 })}>
            <Text style={{ color: '#ffffff' }}>1st View</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => this.setState({ tipe: 2 })}>
            <Text style={{ color: '#ffffff' }}>2st View</Text>
          </TouchableOpacity>
          

          <View style={{ backgroundColor: '#ffffff' }}>
          {this.renderElement()}
        </View>

            </View>
            
         );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    padding: 8,
    marginTop: 30,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#808080',
    padding: 10,
    margin: 2,
  },
});

export default App;