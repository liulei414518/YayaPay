import React, { Component } from 'react';
import {
  View,
  Text,
  ListView,
  StyleSheet,
  RefreshControl,
  ActivityIndicator
} from 'react-native';

import HistoryNewCell from '../login/widget/HistoryNewCell';
import LocalStore from '../libs/LocalStore';
import Okfetch from '../libs/Okfetch';
import MConst from '../MConst';

/*
  获取交易历史  流水列表
  {
  page： //第几页
  pageSize：20 //每一页的条数
  keyWord： 搜索的关键字
  }

  YAYA_TRADELIST:port+ "travelAPI/yayaFacePay/flow",
  */

  class HistoryScreen extends React.Component {

    constructor(props: any) {
      super(props);
      _this = this;

      const dataSource = new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2,
        sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
        getRowData: this.getListRowData,

      });

      // 将DataSource对象设置为state，以便之后更新。
      this.state = {
        dataSource,
      };
      this.setData = this._setData.bind(this);
      this._renderRow = this._renderRow.bind(this);
      this._renderSectionHeader = this._renderSectionHeader.bind(this);
      this._renderHeader = this._renderHeader.bind(this);
    }

    getListRowData = (dataBlob, sectionID, rowID) => {
        alert(JSON.stringify(dataBlob));

        let sectionData = dataBlob[sectionID]

        let row = sectionData.children[rowID]

        return row

    }

    _setData = (newData) => {
      // 更新数据，同时通过setState更新UI
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(newData)
      });
    }

    componentWillMount(){
      var params = {};
      params.page = "1";
      params.pageSize = "20";

     Okfetch.nGet2(MConst.YAYA_TRADELIST, params,"", function (res) {
       console.log('login_res:'+JSON.stringify(res));
       if(1 == res.status){
           //本地存储用户登录信息
           var dataArray = [];
           for (var i = 0; i < res.result.length; i++) {
                var obj = res.result[i];
                if (obj.hasOwnProperty("data")) {
                      dataArray.push(obj.data);
                  }
           }
           _this.setData(dataArray);

         }
       });
    }

    //-----------------------------------------

    reloadWordData() {
      return new Promise((resolve) => {
        setTimeout(()=>{resolve()}, 2000)
      });
    }

    renderFooter() {
      return <ActivityIndicator />;
    }

    //-----------------------------------------

    // list 的顶部
    _renderHeader(){
      return (
        <View style={styles.listHeader}>
        <Text style={styles.listHeaderText}>搜索交易</Text>
        <Text style= {styles.listHeaderLine}>  </Text>
        </View>
        );
    }

    _renderSectionHeader(data, sectionID) {
      return (
        <View style={styles.section}>
        <View style={styles.sectionViewStyle}>
        <Text style={styles.sectionTextStyle}>123</Text>
        </View>
        </View>
        );
    }


    _renderRow(data, sectionID, rowID) {

    return (
      <View style={styles.row}>
      <HistoryNewCell leftIcon={require('../image/income@2x.png')} leftText={"data[rowID]"}
      rightText={"data"} bottomText={'支付宝'}>
      </HistoryNewCell>
      </View>
      );
  }

  render() {
    return (
      <ListView style={styles.container}
          dataSource={this.state.dataSource}
          renderRow={this._renderRow}
          renderSectionHeader={this._renderSectionHeader}
          renderHeader={this._renderHeader}
          refreshing={false}
          onRefresh={this.reloadWordData.bind(this)}
      />
    );
  }
}



var styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#ffffff',
    marginTop: 20,
  },
  listHeader:{
   height:60,
   flex:1,
    // flexDirection:'row',
    //  backgroundColor:'red',
    justifyContent:'center',
    //  alignItems: 'center',
    //  borderBottomColor:'red',
    //  borderBottomWidth:1,

  },
  listHeaderText:{
    fontSize:24,
    fontFamily:'PingFang-SC-Semibold',
    color:'rgb(189, 189, 189)',
    backgroundColor:'#0000',
    textAlign: 'center',
  },
  listHeaderLine:{
    marginTop:10,
    marginLeft:22,
    marginRight:22,
    backgroundColor:'rgb(238,238,238)',
    height:1,
  },
  row: {
    // marginTop:2,
    // borderColor:'red',
    // borderWidth:1,
    height: 66,
    // backgroundColor: 'blue',
    justifyContent:'center',
    // alignItems:'center',

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
  footer:{
    flex: 1,
    height:20,
    alignItems:'center',
  },
  footerLine:{

   height:1,
   marginLeft:19,
   backgroundColor:'red',
 }
});

export default HistoryScreen;
