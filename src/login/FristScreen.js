import React, {
  Component
} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,BackHandler,ToastAndroid
} from 'react-native';

import locale from '../locale/locale';
import I18n from 'react-native-i18n';

import LoginButton from './widget/LoginButton';
import NetUitl from './widget/NetUtil';
import RegisteButton from './widget/RegisteButton';
import NextButton from './widget/NextButton';

import DES3 from '../libs/DES3';
import Okfetch from '../libs/Okfetch';
import MConst from '../MConst';
import LocalStore from '../libs/LocalStore';

var obj;

class FristScreen extends React.Component {
  constructor(props) {
    super(props);
    // thiz = this;
    this.userName = "";
    this.password = "";
  }

  componentWillMount(){
    BackHandler.addEventListener('hardwareBackPress', this.onBackHandler);
    callSyetemConfig();
  }


  componentWillUnmount(){
    BackHandler.removeEventListener('hardwareBackPress', this.onBackHandler);
  }

   //安卓双击返回键监听
   onBackHandler = () => {
    if(this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()){
      return false;
    }
    this.lastBackPressed = Date.now();
    ToastAndroid.show('再点一次退出', ToastAndroid.SHORT);
    return true;
  }

  exit(){
    onBackHandler = () => {
      return false;
    }
  }

render() {
   const { navigate } = this.props.navigation;
   obj = navigate;
  return (
    <View style = {  styles.loginview} >
       <Image style = {styles.logoStyle}
          source = {require('../image/ico_yaya_logo1@2x.png')}
        />
      <View style = {{  marginTop: 80 }}>
          <LoginButton name = {I18n.t('login')} onPressCallback = {
            () => navigate('tLogin')
          }/>
      </View>
       <View style = {{  marginTop: 24 }} >
       <RegisteButton LoginButton name = {I18n.t('registe')} onPressCallback = {
           ()=>{
            navigate('basic')
           }
         }
        />
      </View>

      <View style = {{ marginTop: 24 , justifyContent: 'center',
              alignItems: 'center',}} >
                  <Text style = {styles.underTextStyle}>轻点“继续”、“创建账号”即代表我同意YayaPay的
                    <Text style={styles.underlineStyle}   onPress={onPressText1}>
                     服务条款
                   </Text>、
                   <Text style={styles.underlineStyle}   onPress={onPressText2}>支付服务条款
                   </Text>、
                   <Text style={styles.underlineStyle}   onPress={onPressText3}>隐私政策
                   </Text>
                 </Text>
      </View>
  </View>
        );
      }
};

const  onPressText1 =() =>{
  //服务条款
      LocalStore.getSystemConfig(function(systemInfo){
        var urlStr = systemInfo.serviceAgreement;
          obj('webView',{url: urlStr})

      });
};
const  onPressText2 =() =>{
  //支付服务条款
      LocalStore.getSystemConfig(function(systemInfo){
        var urlStr = systemInfo.merchantSubmitWebUrl;
          obj('webView',{url: urlStr,})

      });
};
const  onPressText3 =() =>{
      //隐私政策
      LocalStore.getSystemConfig(function(systemInfo){
        var urlStr = systemInfo.privacyClause;
          obj('webView',{url: urlStr,})

      });
};
const  onPressCallback = () => {
  let formData = new FormData();
  formData.append("loginName",this.userName);
  formData.append("pwd",this.password);
  alert('用户名：'+this.userName+'\n'+'密码：'+this.password)
    // let url = "http://localhost:8080/loginApp";
    // NetUitl.postJson(url,formData,(responseText) => {
    //       alert(responseText);
    //       // this.onLoginSuccess();
    // })
  };

  //跳转到第二个页面去
  //  onLoginSuccess(){
  //   // const { navigator } = this.props;
  // //   if (navigator) {
  // //     navigator.push({
  // // //       name : 'LoginSuccess',
  // // //       component : LoginSuccess,
  // //     });
  // //   }
  // }
// class loginLineView extends Component {
//   render() {
//     return (
//         <Text >
//             没有帐号
//           </Text>
//     );
//   }
// }

function callSyetemConfig(){
  Okfetch.nGet(MConst.YAYA_SYSTEM_CONFIG, '', function (res) {
    // console.log('login_res:'+JSON.stringify(res));
    // "result": {
  //   "jChinaTelephone": "0367577863",
  //   "aboutUs": "https://www.okulo.cn/pirateAllianceWeb/com/doAboutUsAppInit.action?flag=5",
  //   "privacyClause": "http://172.29.231.16/static/specials/yayaPay/privacy.html",
  //   "merchantSubmitWebUrl": "http://172.29.231.16",
  //   "serviceAgreement": "http://172.29.231.16/static/specials/yayaPay/term.html",
  //   "jJapanTelephone": "0367576789"
  // },

    if(1 == res.status){

      console.log('login_res:'+JSON.stringify(res.result));
      LocalStore.saveSystemConfig(res.result);
    }
  });

};

const styles = StyleSheet.create({
  loginview: {
    flex: 1,
    padding: 30,
    backgroundColor: '#ffffff',
  },
  logoStyle:{
      marginLeft:15,
      marginRight:15,
      marginTop:156,
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
    },
  underTextStyle:{
        marginTop:24,
        color: "rgb(97, 97, 97)",
        fontSize:12,

    },
  underlineStyle:{
    textDecorationLine: 'underline'
  }
});
export default FristScreen;
