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


import locale from '../locale/locale';
import I18n from 'react-native-i18n';


var devideWidth = Dimensions.get('window').width;

class SuccessScreen extends React.Component {

  constructor(props) {
    super(props);
    thiz = this;
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

  }

  _goBack(){
    thiz.props.navigation.goBack()
 }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View  style ={styles.container}>
            <View style = {styles.yayaIcon}>
                <Image
                resizeMode='contain'
                style={styles.iconImage}
                source = {require('../image/ico_yaya_logo1@2x.png')}
                  />
            </View>
            <Text style={styles.tipText}> 找回密码邮件已发送

            </Text>
            <Text style={styles.smallTipText}> 若您的邮箱能正常使用但无法接收到验证码邮件，请仔细查找垃圾箱邮件。
            </Text>

              <Image style={styles.groupImage}
                  source={require('../image/group2@2x.png')}/>

            <TouchableOpacity onPress={onButtonPress} >
                <View style ={styles.buttonStyle} >
                    <Text style ={styles.buttonTextStyle}>返回</Text>
                </View>
            </TouchableOpacity>
      </View>
    );
  }
}

const onButtonPress = () => {
     alert('---');
 };

const   onPressCallback = () => {
    alert('用户名：'+this.userName+'\n'+'密码：'+this.password +'\n'+ devideWidth)
  };

const btnCodePressCallback = () => {
    alert('3')
};

var styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#ffffff',
  },
  yayaIcon:{
    marginTop:70,
    height:40,
    flexDirection:'row',
  },
  iconImage: {
    height:40,
    marginLeft: -5,
  },
  yayaText:{
    paddingLeft:8.5,
    fontSize: 40,
    textAlign:'center',
    fontFamily: 'PingFang-SC-Semibold',
    color:'rgb(33, 33, 33)',
    // height:40,
    fontWeight: '800',

  },
  tipText:{
     marginTop: 14,
     marginLeft:24,
     paddingLeft:0,
     textAlign:'left',
     height:44,
     color:'rgb(66, 66, 66)',
     fontSize:32,
     fontFamily: 'PingFang-SC-Semibold',
    //  backgroundColor:'red'
  },
  smallTipText:{
    marginTop: 18,
    marginLeft:24,
    marginRight:24,
    color:'rgb(66, 66, 66)',
    fontSize:14,
    fontFamily: 'PingFang-SC-Medium',
    // backgroundColor:'red'

  },

  groupImage:{
      width:193,
      height:252,
      marginLeft:devideWidth - 193,
  },
  buttonStyle:{
      // backgroundColor:'red',
      marginLeft:24,
      marginTop:12,
      marginRight:24,
      borderRadius:46,
      height:46,
      backgroundColor:'rgb(0, 122,255)',
      justifyContent:'center',


  },
  buttonTextStyle:{
     color:'rgb(255,255,255)',
     fontSize:19,
     fontFamily:'PingFang-SC-Light',
     textAlign:'center',
     backgroundColor:'#0000',
  },

  titleS:{
    textAlign: 'right',
    justifyContent: 'center',
  }
});
export default SuccessScreen;
