import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Button
} from 'react-native';

var devideWidth  = Dimensions.get('window').width;
var imgW = 24;
var inputW = devideWidth - imgW - 50-100;


export default class TelCodeEditView extends Component {
  constructor(props) {
   super(props);
   this.state = {text: ''};
 }
 _onPressButton() {
   alert("You tapped the button!");
 }
  render() {
    return (
      <View style={LoginStyles.backViewStyle}>
        <View style={LoginStyles.TextInputView}>
            <View style={LoginStyles.btnCodeBackStyle}>
                 <TouchableOpacity onPress={this.props.codeBtnClick}>
                     <Text style={LoginStyles.btnText}>
                         {this.props.telCode}
                     </Text>
                 </TouchableOpacity>
             </View>
           <TextInput style={LoginStyles.TextInput}

             onChangeText={
               (text) => {
                 this.setState({text});
                 this.props.onChangeText(text);
               }
            }
           />
           <Image style = {{
                 marginRight:5,
                //  marginTop:8,
                 height: imgW,
                 width: imgW,
               }} source={require('../../image/correct@2x.png')}/>
         </View>
         <Text style={{
            marginTop:5,
            backgroundColor:'rgb(238,238 ,238)',
            height:1,
         }}></Text>
      </View>
    );
  }
}

const onButtonPress = () => {
     alert('123')
 }


const LoginStyles = StyleSheet.create({
  backViewStyle:{
    // backgroundColor: 'red',
    height:50,
    marginLeft:22,
    marginRight:22,
  },
  btnCodeBackStyle:{
    backgroundColor:'blue',
    borderRadius:5,
    width:48,
    // height:27,
    borderColor:'#0000',
    justifyContent: 'center',
    alignItems:'center',

  },

  btnText:{
    fontSize:21,
    // fontFamily:'GalanoGrotesque-Medium',
    color:'#ffffff',


  },
  TextInputView: {
    height:40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center',
  },
  TextInput: {
    textAlign:'left',
    width:inputW,
    fontSize:17,
    color:'rgb(66 ,66 ,66)',
    fontFamily:'PingFang-SC-Semibold',
  },
});
