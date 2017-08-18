import React, { Component } from 'react';
import {
    View,
    Text,
    ListView,
    TouchableOpacity,
} from 'react-native';

import CellScreen from './child/CellScreen';
import LocalStore from '../libs/LocalStore'


class SettingScreen extends React.Component {
  static navigationOptions = {
   title: 'Welcome',
 };
  constructor(props) {
   super(props);

   const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
   this.state = {

     dataSource: ds.cloneWithRows(this._genRows()),

   };
 }
   _genRows(){
       const dataBlob = [
         '关于我们',
         '给我们评分',
         '使用协议',
         'V1.2',
         '清除缓存',
         '退出',
       ];
       return dataBlob;
   }
   //tableCell 点击
   _pressRow(rowID){
     LocalStore.getSystemConfig(function(systemInfo){


       var urlStr = systemInfo.aboutUs;
       console.log(urlStr);
        // navigate('webView',{url: urlStr});


     });

    }

   _renderRow(rowData, sectionID, rowID){
       return (
             <TouchableOpacity onPress={()=>this._pressRow(rowID)}>
                   <View>
                       <CellScreen title={rowData}> </CellScreen>
                   </View>
             </TouchableOpacity>

           );
   }
  render() {

        return (
          <View style={{flex:1,}}>
                  <ListView dataSource={this.state.dataSource} renderRow={this._renderRow.bind(this)}/>
              </View>
        );
    }
};


export default SettingScreen;
