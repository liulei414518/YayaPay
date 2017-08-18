import React, {
  Component
} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  Dimensions,
  AsyncStorage,
  Alert,
} from 'react-native';

import EditView from './widget/EditView';
import NetUitl from './widget/NetUtil';
import NextButton from './widget/NextButton';
import MConst from '../MConst';
import Okfetch from '../libs/Okfetch';

import locale from '../locale/locale';
import I18n from 'react-native-i18n';

import DES3 from '../libs/DES3';
import LocalStore from '../libs/LocalStore';
import IndicatorDialog from '../libs/IndicatorDialog';
import Call from './Call';

// 
// import Utils from '../libs/Utils';
var Platform = require('Platform'); 
var DeviceInfo = require('react-native-deviceinfo');
var {height, width} = Dimensions.get('window');


var devideWidth = Dimensions.get('window').width;

var storage;
var nav;

class PasswordScreen extends React.Component {

  constructor(props) {
    super(props);
    thiz = this;
    this.password = "";
    //loading初始状态
    this.state = {
      isShowLoading: false,
    };
  }
  
  static navigationOptions = {
    headerLeft: 
    <TouchableOpacity
    onPress={()=>{thiz.props.navigation.goBack()}}>
    <Image
    style = {{width:32, height:32}}
    source={require('../image/back@2x.png')}
    />
    </TouchableOpacity>
  }

  render() {
    const { navigate } = this.props.navigation;
    nav = navigate;
    const { params } = this.props.navigation.state;
    return (
      <View  style ={{flex: 1,backgroundColor:"#ffffff"}}>

      <IndicatorDialog _dialogVisible={this.state.isShowLoading}/>

      <Text style = { TopViewStyles.textStyle} >{I18n.t('inputPWd')}</Text>
      <Text style = { TopViewStyles.tipStyle } >{I18n.t('PWd')}</Text>

      <View style={TopViewStyles.TextInputView}>
      <EditView name='输入密码' onChangeText={(text) => {
        this.password = text; }}/>
        </View>
        <TouchableOpacity onPress={ ()=> {
              if('tel' ==  params.loginType){
                forgetTelPwd(params.username,params.telCode)
              }else if('email' == params.loginType){
                forgetPwd(params.username)
              }
            }

        } style={TopViewStyles.buttonStyle} >
        <Text style={TopViewStyles.buttonTextStyle}>忘记密码</Text>
        </TouchableOpacity>
        <View style = {{ marginTop: 100 ,marginLeft:devideWidth-70,}} >
        <NextButton  name = '' onPressCallback = {

          ()=>{
            
            if('tel' ==  params.loginType){

              Call.callMobileLogin(this, params.username, params.telCode, this.password, function(ret){
                navigate('basic')
              });

            }else if('email' == params.loginType){

              Call.callEmailLogin(this, params.username, this.password, function(ret){
                 navigate('basic')
              });
            
            }
          }

        }/>
        </View>
        </View>
        );
  }
}

function forgetTelPwd(userName,telCode){
  // alert('您希望通过电话号码：'+telCode+userName+'找回密码');
  Alert.alert(
    '提示',
    '您希望通过电话号码：'+telCode+userName+'找回密码',
    [
      {text: '取消', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
      {text: '确定', onPress: () => {
             callSMS(userName,telCode);

      }},
    ],
    { cancelable: false }
  );

};
function callSMS(userName,telCode){
  Call.callTelForgetPwd(userName,telCode, function(ls){
       nav('verifyCode',{'userName':userName,'telCode':telCode})
  });
}

function forgetPwd(email){
  Alert.alert(
    '',
    '您希望通过邮箱：'+email+'找回密码?',
    [
      {text: '取消', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
      {text: '确定', onPress: () => {
        Call.callFindPwd('email',email,'','', function(ls){
             nav('successScreen')
        });

      }},
    ],
    { cancelable: false }
  );
}

const   onPressCallback = () => {
  alert('用户名：'+this.userName+'\n'+'密码：'+this.password +'\n'+ width)
};



const TopViewStyles = StyleSheet.create({
  topView: {
    flex: 1,
    padding: 30,
    backgroundColor: '#ffffff',
  },
  textStyle:{
    marginTop: 24,
    paddingLeft:22,
    justifyContent: 'center',
    alignItems:'center',
    fontSize: 32,
    fontFamily: 'PingFang-SC-Light',
    color:'rgb(66, 66, 66)',
    height:40,
  },
  tipStyle:{
   marginTop: 45,
   paddingLeft:22,
   height:22,
   color:'rgb(66, 66, 66)',
   fontSize:15,
   fontFamily: 'PingFang-SC-Medium',
 },
 TextInputView:{

 },
 buttonStyle:{
      // backgroundColor:'red',
      marginLeft:22,
      marginTop:5,
      marginRight:200,

    },
    buttonTextStyle:{
     color:'rgb(97,97,97)',
     fontSize:14,
     fontFamily:'PingFang-SC-Light',
   },

   titleS:{
    textAlign: 'right',
    justifyContent: 'center',
  }
});
export default PasswordScreen;
