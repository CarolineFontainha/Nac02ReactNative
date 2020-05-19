import React, {Component} from 'react';
import { Text, View, StyleSheet,FlatList } from 'react-native';
import Constants from 'expo-constants';
import RenderizaUsuario from './components/RenderizaUsuario'
import UsuarioListar from './components/UsuarioListar'


// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

  
export default class App extends Component {
  
  
    render(){

      return( 
        <View style={styles.loader}>
        <RenderizaUsuario/>
        <UsuarioListar/>
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