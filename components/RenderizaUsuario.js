import React, {Component} from 'react'
import { Text, View, Image } from 'react-native'

export default class RenderizaUsuario extends Component {
   constructor(props) {
      super(props);

      this.state = {
        first_name: '',
        last_name: '',
      };
  }

  componentDidMount(){
    this.fetchJSON();

  }

  fetchJSON(){
    fetch("https://reqres.in/api/users/4")
    .then(item => item.json())
    .then((item)=> {

      var primeiro_nome = item['data']['first_name']
      var sobrenome = item['data']['last_name']

      this.setState({first_name: primeiro_nome,
                  last_name: sobrenome,})

    })
    .catch(error=>console.log(error))
  }
  
  
  render() {
    return(
      <View>
      <Image> Avatar do imbuste</Image>
      <Text>id</Text>
      <Text>nome do usuario</Text>
      <Text></Text>
      </View>
    )
  }
}