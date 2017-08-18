
import React, { Component } from 'react';
import {
  View,
  Text,
  ListView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import DoubleTextCell from '../login/widget/DoubleTextCell';
import TripleTextCell from '../login/widget/TripleTextCell';
import locale from '../locale/locale';
import I18n from 'react-native-i18n';
import Call from '../login/Call';

var userCode = "";

class AccountScreen extends React.Component {

  constructor(props: any) {
    super(props);
    _this = this;
    let dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
      sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
    });
    // this.state = {
    //   dataSource: ds.cloneWithRowsAndSections({
    //     'section1': ['￥154','￥154','￥154','￥154','￥154','￥154',],
    //   })
    // };

    // 将DataSource对象设置为state，以便之后更新。
    this.state = {
      dataSource,
    };

    // 绑定this指针
    this.setData = this._setData.bind(this);
    this._renderRow = this._renderRow.bind(this);
    this._renderHeader = this._renderHeader.bind(this);
  }
  _setData = (newData) => {
    // 更新数据，同时通过setState更新UI
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(newData)
    });
  }
  componentWillMount(){
    Call.callGetAccountInfo(function(result){
      console.log("返回的数据----"+JSON.stringify(result));
      /*
      "result": {
          "submitCash": [
            "¥1,324.94",
            "¥277,115"
          ],
          "shop": {
            "shopName": "店铺001",
            "shopId": 21,
            "shopLogo": "http://172.29.231.16/sg/gallerys/8aee3084-591e-4a16-b440-446c8296fc0f"
          },
          "userCode": "1510150056",
          "unSubmitCash": [
            "¥5,348.24",
            "¥274,508"
          ]
        },
       */
      userCode = result.userCode;
      var dataArray = [];
      var item1 = {"title":"可提现CNY金额"};
      item1.value = result.submitCash[0];
      dataArray.push(item1);
      item1 = {"title":"可提现JPY金额"};
      item1.value = result.submitCash[1];
      dataArray.push(item1);
      item1 = {"title":"不可提现CNY金额"};
      item1.value = result.unSubmitCash[0];
      dataArray.push(item1);
      item1 = {"title":"不可提现JPY金额"};
      item1.value = result.unSubmitCash[1];
      dataArray.push(item1);
      _this.setData(dataArray);
      // _this.setData([{"title":'￥154',"value":"123"},{"title":'￥154',"value":"123"},{"title":'￥154',"value":"123"},]
      //      );
    });
  }



  _renderHeader(){
    return (
      <View style={styles.header}>
      <Text style={styles.headerTitle}>转账申请人识别码</Text>
      <Text style = {styles.headerText}>{userCode}</Text>
      <Text style = {styles.headerDetail}>用于转出行汇款通知书</Text>
      <View style = {styles.cellLine}></View>
      </View>
    );
  }
  // list 的底部
  // _renderFooter(){
  //   return (
  //     <Text style = {{marginTop:5,marginLeft:24}}>如需编辑修改店铺信息，请访问YayaPay网页版</Text>
  //
  //   );
  // }
  //tableCell 点击
  _onPressRow(rowID){
       alert("hellow"+rowID);
   }

  _renderRow(data, sectionID, rowID) {

    return (
      <View style={styles.row}>
       <TouchableOpacity onPress={()=>this._onPressRow(rowID)}>
            <View >
              <DoubleTextCell  cell1Text={data.title} cell2Text={data.value} > </DoubleTextCell>
            </View>
      </TouchableOpacity>
      </View>

    );
  }

  render() {
    return (
        <ListView style={styles.container}
          dataSource={this.state.dataSource}
          renderRow={this._renderRow}
          renderHeader={this._renderHeader}
        />
    );
  }
}

var styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#ffffff',
    marginTop: 0,
  },
  header:{
    height:144,

  },
  headerTitle:{
    fontFamily:"PingFang-SC-Semibold",
    fontSize:16,
    marginLeft:24,
    marginTop:24,
    color:'rgb(97, 97 ,97)',
  },
  headerText:{
    fontFamily:"PingFang-SC-Semibold",
    fontSize:19,
    marginLeft:24,
    marginTop:24,
    color:'rgb(33, 33 ,33)',
  },
  headerDetail:{
    fontFamily:"PingFang-SC-Light",
    fontSize:14,
    marginLeft:24,
    color:'rgb(97, 97 ,97)',
  },
  cellLine:{
    marginLeft:22,
    marginRight:22,
    marginTop:23,
    backgroundColor:'rgb(238,238,238)',
    height:1,
  },
  row: {
    // height: 72,
    // justifyContent:'center',
  },
  section: {
    height: 48,
    // backgroundColor: 'green',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sectionViewStyle:{
    flex: 1,
    height:48,
    justifyContent:'center',
    backgroundColor:'#ffffff',
  },
  sectionTextStyle:{
    paddingLeft:19,
    fontFamily:'PingFang-SC-Semibold',
    fontSize:16,
    color:'rgb(97, 97 ,97)',
  },
  iconStyle:{
      // marginTop:10,
      marginLeft:26,
      // backgroundColor:'red',
      width:24,
      height:24,
  },

});


export default AccountScreen;
