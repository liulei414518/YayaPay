
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
export default class NextButton extends Component {
  constructor(props) {
   super(props);
   this.state = {text: ''};
  }
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPressCallback} style={NextButtonStyles.backView}>
      <Image style = {{
            marginTop: 8,
            marginLeft: 8,
            height: 32,
            width: 32,
          }} source={require('../../image/rightback@2x.png')}/>
      </TouchableOpacity>
    );
  }
}
const NextButtonStyles = StyleSheet.create({
  backView: {
    height:48,
    width: 48,
    backgroundColor: 'rgb(0,122 ,255)',
    borderRadius:24,
  },
});
