

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

export default class HistoryCell extends Component {
  constructor(props) {
   super(props);
   this.state = {text: ''};
  }
  render() {
    return (
        <View style = {styles.containerStyle}>
            <Image style={styles.iconStyle}
              source={this.props.leftIcon}
            />
             <View style = {styles.backViewStyle}>
              <Text style = {styles.leftTextStyle}>
               {this.props.leftText}
              </Text>
            </View >

            <Text style = {styles.rightTextStyle}>
             {this.props.rightText}
            </Text>

            <Image style={styles.rightIconStyle}
              source={require('../../image/backblack@2x.png')}
            />
        </View>
    );
  }
}


const styles = StyleSheet.create({
  containerStyle: {
      flex:1,
      height:50,
      // alignItems:'center',
      flexDirection:'row',
      justifyContent:'center',
      // marginBottom:5,
  },
  backViewStyle:{
    marginLeft:12,
    width :devideWidth - 150,
    height:24,

  },
  leftTextStyle:{
      marginLeft:0,
      color:'rgb(33, 33, 33)',
      fontSize:19,
      fontFamily:'PingFang-SC-Light',
      // backgroundColor:'blue',
  },
  iconStyle:{
      // marginTop:10,
      marginLeft:19,
      // backgroundColor:'red',
      width:24,
      height:24,
  },
  rightTextStyle:{
    marginRight:0,
    color:'rgb(33, 33, 33)',
    fontSize:19,
    fontFamily:'PingFang-SC-Light',
    // backgroundColor:'red',
    height:26,
    textAlign:'center',
    width:60,


  },
  rightIconStyle:{
    // alignSelf:'flex-end',
    // marginLeft:0,
    backgroundColor:'#0000',
    marginRight:24,
    width:24,
    height:24,
  },

});
