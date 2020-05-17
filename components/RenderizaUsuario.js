import React, {Component} from 'react'
import { Text, View, Image } from 'react-native'

export default class RenderizaUsuario extends Component {
   constructor(props) {
      super(props);

      this.state = {
        foto : '',
        id : 0,
        primeiro_nome : '',
        sobrenome : '',
        email : ''
      };
  }

  componentDidMount(){
    this.fetchJSON();

  }

  fetchJSON(){
    fetch("https://reqres.in/api/users/4")
    .then(item => item.json())
    .then((item)=> {

      var foto = item['data']['avatar']
      var id = item['data']['id'];
      var primeiro_nome = item['data']['first_name']
      var sobrenome = item['data']['last_name']
      var email = item['data']['email']

      this.setState({
        foto : foto,
        id : id,
        primeiro_nome : primeiro_nome,
        sobrenome : sobrenome,})

    })
    .catch(error=>console.log(error))
  }
  
  
  render() {
    return(
      <View>
      <Image source={{url:this.state.image}}> </Image>
      <Text>{this.state.id}</Text>
      <Text>{this.state.primeiro_nome}</Text>
      <Text>{this.state.sobrenome}</Text>
      <Text>{this.state.email}</Text>
      </View>
    )
  }
}