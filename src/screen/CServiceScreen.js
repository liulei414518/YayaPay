import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

import locale from '../locale/locale';
import I18n from 'react-native-i18n';

class CServiceScreen extends React.Component {
  render() {
        return (
            <View style = {styles.container}>
                <View>
                <Text style = {styles.text_1}>{I18n.t('CService_Tip1')}</Text>
                <Text style = {styles.text_2}>我们想了解您喜欢哪些方面，
                </Text>
                <Text style = {styles.text_2}>以及您认为我们可以在哪些方面做的更好。
                </Text>
                </View>
                <View style = {styles.bottomView}>
                  <TouchableOpacity onPress={_cellOnPress}>
                      <View style={styles.cellHeight}>
                        <Text style={styles.cellText}>在线客服</Text>
                      </View>
                      <Text style= {styles.cellLine}>  </Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={_cellOnPress}>
                      <View style={styles.cellHeight}>
                        <Text style={styles.cellText}>日本日语语音服务</Text>
                      </View>
                      <Text style= {styles.cellLine}>  </Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={_cellOnPress}>
                      <View style={styles.cellHeight}>
                        <Text style={styles.cellText}>日本中文语音服务</Text>
                      </View>
                      <Text style= {styles.cellLine}> </Text>
                   </TouchableOpacity>

                </View>

            </View>
        );
    }
}

const _cellOnPress = () =>{
  alert(123)
};

var styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#ffffff',
  },
  text_1:{
    fontSize:24,
    fontFamily:'PingFang-SC-Semibold',
    marginLeft:24,
    marginTop:32,
  },
  text_2:{
    fontSize:14,
    fontFamily:'PingFang-SC-Regular',
    marginLeft:24,
    marginTop:12,
  },
  bottomView:{
    marginTop:24,
    // backgroundColor:'red',
  },
  cellHeight:{
    justifyContent:'center',
    // borderBottomWidth:1,
    // borderBottomColor:'black',
     height:96,
     backgroundColor:'#ffffff',
    //  backgroundColor:'red',

  },
  cellText:{
    // flex:60,
    fontSize:19,
    // height:90,
    fontFamily:'PingFang-SC-Light',
    marginLeft:24,
    textAlign:'left',
  },
  cellLine:{
    // flex:1,
    // marginTop:5,
    marginLeft:22,
    marginRight:22,
    backgroundColor:'rgb(238,238,238)',
    height:1,
  },



});

export default CServiceScreen;
