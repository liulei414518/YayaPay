

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
export default class CellScreen extends Component {
  constructor(props) {
   super(props);
   this.state = {text: ''};
  }
  render() {
    return (
        <View style = {CellStyles.containerStyle}>
           <Text style = {CellStyles.cellStyle}>
            {this.props.title}
           </Text>
           <Text style = {CellStyles.lineStyle}>
           </Text>
        </View>
    );
  }
}
const CellStyles = StyleSheet.create({
  containerStyle: {
      flex:1,
      height:75,
      // backgroundColor:'red',
      // flexDirection
      marginBottom:5,
  },
  cellStyle:{

      alignItems:'center',
      justifyContent:'center',
      color:'rgb(33, 33, 33)',
      fontSize:19,
      fontFamily:'PingFang-SC-Light',
      margin:24,
  },
  lineStyle:{
    marginLeft:24,
    marginRight:24,
    height:1,
    backgroundColor:'rgb(238, 238, 238)',
  }

});
