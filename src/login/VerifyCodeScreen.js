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

import locale from '../locale/locale';
import I18n from 'react-native-i18n';
import Call from './Call';


var devideWidth = Dimensions.get('window').width;

class VerifyCodeScreen extends React.Component {

  constructor(props) {
    super(props);
    _this = this;
    this.userName = "";
    this.password = "";
  }

  static navigationOptions = {
      headerLeft:
      <TouchableOpacity
        onPress={()=>{thiz._goBack()}}>
        <Image
          style = {{width:32, height:32}}
                source={require('../image/back@2x.png')}
            />
      </TouchableOpacity>

      /*headerTitle:
      <View style = {{flexDirection: 'row'}}>
        <Text style={{flex:1, fontSize:12, fontWeight: 'bold', color:'rgb(66,66,66)', textAlign: 'right',
              justifyContent: 'center', paddingRight:22}}>
          使用邮箱注册
        </Text>
      </View> */

  }

  _goBack(){
    thiz.props.navigation.goBack()
 }

  render() {
    const { navigate } = this.props.navigation;
    const { params } = this.props.navigation.state;

    return (
      <View  style ={{flex: 1,backgroundColor:"#ffffff"}}>
          <Text style = { styles.textStyle} >{I18n.t('inputVCode')}</Text>
          <Text style = { styles.tipStyle } >{I18n.t('VCode')}</Text>

          <View style={styles.TextInputView}>
          <EditView name='输入验证码' textStyle={{fontWeight:'bold'}} onChangeText={(text) => {
            _this.password = text; }}/>
          </View>

          <View style = {{ marginTop: 100 ,marginLeft:devideWidth-70,}} >
              <NextButton  name = '' onPressCallback = { () =>
                  onPressCallback(params.userName,params.telCode)
              }/>
          </View>
      </View>
    );
  }
}

const onButtonPress = () => {
     alert('---');
 };

function  onPressCallback(userName,telCode){
  if(_this.password.length==0 ){
    alert('请输入验证码');

    return;
  }
  Call.callFindPwd('tel',userName,telCode,_this.password, function(ls){
       nav('successScreen');
  });
}

const btnCodePressCallback = () => {
    alert('3')
};

const styles = StyleSheet.create({
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
export default VerifyCodeScreen;
