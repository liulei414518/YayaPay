
/**
 * [devideWidth description]
 * @type {[type]}
 * 交易历史页面的cell
 */
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

export default class HistoryNewCell extends Component {
  constructor(props) {
   super(props);
   this.state = {text: ''};
  }
  render() {
    return (
        <View style = {styles.containerStyle}>
           <View style = {styles.cellContainer}>
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
            <Text style ={styles.bottomTextStyle}>{this.props.bottomText}
            </Text>
        </View>
    );
  }
}


const styles = StyleSheet.create({
  containerStyle: {
      flex:1,
      height:66,
      // backgroundColor:'red',
  },
  cellContainer:{
    height:24,
    marginTop:12,
    // alignItems:'center',
    flexDirection:'row',
    justifyContent:'center',
    // backgroundColor:'blue',

  },
  backViewStyle:{
    marginLeft:12,
    width :devideWidth - 150,
    height:24,
  },
  leftTextStyle:{
      // marginLeft:0,
      color:'rgb(33, 33, 33)',
      fontSize:19,
      fontFamily:'PingFang-SC-Light',
      textAlign:'left',
      marginTop:-2,
      // backgroundColor:'orange',

  },
  iconStyle:{
      // marginTop:10,
      marginLeft:26,
      // backgroundColor:'red',
      width:24,
      height:24,
  },
  rightTextStyle:{
    marginRight:0,
    color:'rgb(33, 33, 33)',
    fontSize:19,
    fontFamily:'PingFang-SC-Light',
    marginTop:-2,
    height:24,
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
  bottomTextStyle:{
    marginLeft:60,
    color:'rgb(97, 97, 97)',
    fontSize:14,
    fontFamily:'PingFang-SC-Regular'

  },
  cellLine:{
    // marginTop:1,
    marginLeft:22,
    marginRight:22,
    // backgroundColor:'rgb(238,238,238)',
    height:1,
    // display:
  },

});
