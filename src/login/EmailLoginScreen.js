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
} from 'react-native';

import EditView from './widget/EditView';
import NetUitl from './widget/NetUtil';
import NextButton from './widget/NextButton';
import Utils from '../libs/Utils';

var devideWidth = Dimensions.get('window').width;

class EmailLoginScreen extends React.Component {

  constructor(props) {
    super(props);
    thiz = this;
    this.username = '';
  }

  static navigationOptions = {
    headerLeft: 
    <TouchableOpacity
    onPress={()=>{thiz.props.navigation.goBack()}}>
    <Image
    style = {{width:32, height:32}}
    source={require('../image/back@2x.png')}
    />
    </TouchableOpacity>,

    headerTitle:
    <Text style={{width:devideWidth-80,fontSize: 15, color: 'rgb(33,33,33)',fontWeight: 'bold', textAlign:'center'}}>
    YayaPay
    </Text>
  }
  
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View  style ={{flex: 1,backgroundColor:"#ffffff"}}>
      <Text style = { TopViewStyles.textStyle} >请输入邮箱地址</Text>
      <Text style = { TopViewStyles.tipStyle } >电子邮箱</Text>

      <View style={TopViewStyles.TextInputView}>
      <EditView name='输入邮箱' onChangeText={(text) => {
        this.username = text; }}/>
        </View>
        <View style = {{ marginTop: 100 ,marginLeft:devideWidth-70,}} >
        <NextButton  name = '' onPressCallback = {
          ()=>{


            if(this.username){
              var boo = Utils.isEmail(this.username);
                //是否匹配手机号码，匹配则跳转并带参到密码输入页.
                if(boo){
                  navigate('pwd', {username: this.username, loginType:'email'})
                }else{
                  alert('请输入正确的邮箱地址');
                }
              }else{
                alert('邮箱地址不能为空');
              }
            }
          }/>
          </View>
          </View>
          );
  }
}

const   onPressCallback = () => {
  alert('用户名：'+this.userName+'\n'+'密码：'+this.password +'\n'+ devideWidth)
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
   marginBottom:12,
   paddingLeft:22,
   height:22,
   color:'rgb(66, 66, 66)',
   fontSize:15,
   fontFamily: 'PingFang-SC-Medium',
 },
 TextInputView:{

 },

 titleS:{
  textAlign: 'right',
  justifyContent: 'center',
}
});
export default EmailLoginScreen;