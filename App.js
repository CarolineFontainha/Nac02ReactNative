import React, {Component} from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import RenderizaUsuario from './components/RenderizaUsuario'


// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default class App extends Component {
  
    render(){

      return( 
        <View style={styles.loader}>
        <RenderizaUsuario/> 
        </View>
      )
    }

}
const styles = StyleSheet.create({
  loader:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
   }
});