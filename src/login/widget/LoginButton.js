
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
export default class LoginButton extends Component {
  constructor(props) {
   super(props);
   this.state = {text: ''};
  }
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPressCallback} style={LoginStyles.loginTextView}>
        <Text style={LoginStyles.loginText} >
            {this.props.name}
        </Text>
      </TouchableOpacity>
    );
  }
}
const LoginStyles = StyleSheet.create({

  loginText: {
     color: '#3281DD',
     fontWeight: 'bold',
     fontSize: 19,
     fontFamily: 'PingFang-SC-Medium',
     width:100,
     alignItems: 'center',
     textAlign: 'center',

  },
  loginTextView: {
    marginTop: 10,
    height:50,
    backgroundColor: '#FFFFFF',
    borderRadius:15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems:'center',
    borderColor: '#3281DD',
    borderWidth: 1,
    borderRadius: 30,
  },
});
