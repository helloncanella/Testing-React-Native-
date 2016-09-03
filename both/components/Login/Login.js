import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableHighlight,
} from 'react-native';
import Meteor from 'react-native-meteor';
import { Actions } from 'react-native-router-flux';

export default class Login extends React.Component {
  constructor(props){
    super(props);
    
    this.state = {
      email: null,
      password: null,
    };
  }
  
  render(){
    return (
      <View>
        <TextInput
          secureTextEntry={true}
          onChangeText={val => this.setState({email: val})}
        />
        <TextInput
          keyboardType="secure"
          onChangeText={val => this.setState({password: val})}
        />
        <TouchableHighlight
          onPress={this._login.bind(this)}
        />
      </View>  
    );
  }
  
  _login(){
    const { email, password } = this.state;
    
    Meteor.loginWithPassword(email, password, error => {
      if(error) return;
      
      Actions.dashboard();
    });
  }
}