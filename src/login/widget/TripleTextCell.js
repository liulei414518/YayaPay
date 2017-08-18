

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
var devideWidth = Dimensions.get('window').width;

export default class TripleTextCell extends Component {
  constructor(props) {
   super(props);
   this.state = {text: ''};
  }
  render() {
    return (
        <View style = {styles.containerStyle}>
            <Text style = {styles.cell1TextStyle}>
             {this.props.cell1Text}
            </Text>
            <Text style = {styles.cell2TextStyle}>
             {this.props.cell2Text}
            </Text>
            <Text style = {styles.cell3TextStyle}>
             {this.props.cell3Text}
            </Text>
            <View style = {styles.cellLine}>
            </View>

        </View>
    );
  }
}


const styles = StyleSheet.create({
  containerStyle: {
      flex:1,
      height:144,
      // backgroundColor:'red',
  },
  cell1TextStyle:{
    // marginLeft:24,
    marginTop:24,
    marginLeft:24,
    color:'rgb(97, 97 ,97)',
    fontSize:16,
    fontFamily:'PingFang-SC-Semibold',
    height:24,

  },
  cell2TextStyle:{

    marginTop:24,
    marginLeft:24,
    color:'rgb(33, 33, 33)',
    fontSize:19,
    fontFamily:'PingFang-SC-Semibold',
    height:24,

  },
  cell3TextStyle:{
    marginTop:0,
    marginLeft:24,
    color:'rgb(33, 33, 33)',
    fontSize:14,
    fontFamily:'PingFang-SC-Light',
    height:24,
  },
  cellLine:{
    // marginTop:11,
    marginLeft:22,
    marginRight:22,
    marginTop:24,
    backgroundColor:'rgb(238,238,238)',
    height:1,
  },

});
