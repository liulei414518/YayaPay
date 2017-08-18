
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity
} from 'react-native';
export default class RegisteButton extends Component {
  constructor(props) {
   super(props);
   this.state = {text: ''};
  }
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPressCallback} style={RegisteStyles.loginTextView}>
        <Text style={RegisteStyles.loginText} >
            {this.props.name}
        </Text>
      </TouchableOpacity>
    );
  }
}
const RegisteStyles = StyleSheet.create({

  loginText: {
     color: '#ffffff',
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
    backgroundColor: '#3281DD',
    borderRadius:30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems:'center',
  },
});
