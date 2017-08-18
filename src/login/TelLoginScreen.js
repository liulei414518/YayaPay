import React, {
  Component
} from 'react';
import Okfetch from '../libs/Okfetch';
import Utils from '../libs/Utils';
import MConst from '../MConst';
import IndicatorDialog from '../libs/IndicatorDialog';

import LocalStore from '../libs/LocalStore';


import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  Dimensions,Modal
} from 'react-native';

import NextButton from './widget/NextButton';
import TelCodeEditView from './widget/TelCodeEditView';
import Call from './Call';

let {width} = Dimensions.get('window');
var _this;

class TelLoginScreen extends React.Component {
  constructor(props) {
    super(props);
    _this = this;
    this.username = '';
    // 初始状态
    this.state = {
      isShowLoading: false,
      quhao:'+86'
    };
  }

  componentDidMount(){
    //获取国家列表
    Call.callCountryLs(_this, null);
  }

  static navigationOptions = {
    headerLeft: 
    <TouchableOpacity onPress={()=>{_this.props.navigation.goBack()}}>
    <Image style = {{width:32, height:32}} source={require('../image/back@2x.png')}/>
    </TouchableOpacity>,

    headerTitle:
    <Text style={{width:width-80,fontSize: 15, color: 'rgb(33,33,33)',fontWeight: 'bold', textAlign:'center'}}>
    YayaPay
    </Text>
  }

  render() {

    const { navigate } = this.props.navigation;

    return (
      <View style={TopViewStyles.container}>
      <IndicatorDialog _dialogVisible={this.state.isDialogVisible}/>
      <Text style = { TopViewStyles.textStyle} >请输入电话号码</Text>
      <Text style = { TopViewStyles.tipStyle } >电话号码</Text>

      <View style={TopViewStyles.TextInputView}>
        {/*区号设置*/}
        <TelCodeEditView telCode={this.state.quhao} name='输入电话'
          codeBtnClick = { () => navigate('telCode',{obj:this}) }
          onChangeText={(text) => { this.username = text; }}/>
      </View>

      <TouchableOpacity 
      onPress={ () => navigate('eLogin') } style={TopViewStyles.buttonStyle} >
      <Text style={TopViewStyles.buttonTextStyle}>使用邮箱登录</Text>
      </TouchableOpacity>
      
      <View style = {{ marginTop: 100 ,marginLeft:width-70,}} >
      <NextButton  name = '' onPressCallback = {
        ()=>{
          if(this.username){
            var boo = Utils.isMobile(this.username);
                //是否匹配手机号码，匹配则跳转并带参到密码输入页.
                if(boo){
                  navigate('pwd', {username: this.username, loginType:'tel', telCode: this.state.quhao})
                }else{
                  alert('请输入正确的手机号');
                }
              }else{
                alert('手机号不能为空');
              }
            }}/>
            </View>
            </View>
            );
  }
}


const   onPressCallback = () => {
  alert('用户名：'+this.userName+'\n'+'密码：'+this.password +'\n'+ width)
};

const btnCodePressCallback = () => {
  alert('3')
};

const TopViewStyles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },

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
   TextInputView:{

   },
 });
export default TelLoginScreen;

