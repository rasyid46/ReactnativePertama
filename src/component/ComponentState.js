import React from 'react';
import {
  View,
  Text
} from 'react-native';

class ComponentState extends React.Component{
   
    constructor(){
        super()
        this.state ={name : "Rico"}
    }
    componentWillMount(){
        this.setState({name: 'Denis'});
    }
    render(){
        //#3 read component state    
        return( 
           <View>
               <Text>{this.state.name}</Text>
           </View>
        );
    }
}
 
export default ComponentState;