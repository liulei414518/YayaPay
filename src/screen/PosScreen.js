/*
收款金额页面
*/
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  ListView,
  TouchableHighlight,Dimensions,
  Image,
  Text,View
} from 'react-native';

import Basic from '../Basic';

import ShareData from "./shareData.json";
let {width} = Dimensions.get('window');
var {height} = Dimensions.get('window');
//var col = 3;
var keyW = width/3  ;
var keyH = (height-256)/4;
var thiz;

class PosScreen extends Component {

  constructor(props){
    super(props);
    thiz = this;
    this.obj = props.obj;
    //1.设置数据源
    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    //2.设置返回数据
    this.state = {
      dataSource:ds.cloneWithRows(ShareData.data),
      input: '0',
    };
  }

  _onPress(e) {
    var price = thiz.state.input;
    var len = price.length;
    e == 'C' && len > 1 ? price = price.substring(0, len-1) :
    e == 'C' && len == 1 ? price = 0 :
    e != 'C' && price == 0 ? price = e :
    e != 'C' && len == 8 && e == '00' ? price += '0' :
    e != 'C' && len < 9 ? price += e :
    price = price;
    thiz.setState({input:price});
  }

  formatCurrency(price) {

    if(price < 1000){
      return price;
    }

    var formatPrice = '';

    for(var i=0; i<price.length; i++){
      if(i!=0 && i%3 == 0){
        formatPrice += ',';
        formatPrice += price[i];
      }else{
        formatPrice += price[i];
      }
    }

    return formatPrice;
  }

  _renderRow(rowData, sectionID, rowID, highlightRow){
    return(
      <TouchableHighlight activeOpacity={0.5}
      onPress={()=>{thiz._onPress(rowData.key)}}
      underlayColor="#EFEEEC">
       <View style={styles.keyView}>
          <Text style={styles.keyS}>
          {rowData.key}
          </Text>
       </View>
      </TouchableHighlight>
      );
  }

  render() {

    return (
      <View>

      <View style={styles.bottomLine}>
      <TouchableHighlight style={styles.skBtn}
        onPress={  () =>{
          var price = thiz.formatCurrency(thiz.state.input);
          if('0' != price){
            this.obj.navigate('qrcode', { price: thiz.formatCurrency(thiz.state.input) })
          }else{
            alert("请设置收款金额");
          }

        }}
        underlayColor="#AFD5FE">
        <View style={styles.skBtnView}>
          <Text style={styles.skBtnTxt} numberOfLines={1}>
            收款￥{ thiz.formatCurrency(thiz.state.input) }
          </Text>
        </View>
      </TouchableHighlight>
    </View>

    <View style={styles.exit}>
    <Text style={styles.exittext} numberOfLines={1}>
    ￥{ thiz.formatCurrency(thiz.state.input) }
    </Text>
    </View>

    <ListView
      initialListSize={11}
      dataSource={this.state.dataSource}
      renderRow={this._renderRow}
      contentContainerStyle={styles.listViewStyle}
    />

    </View>
    );
  }
}

const styles = StyleSheet.create({
  listViewStyle:{
    flexDirection:'row',
    flexWrap:'wrap',
  },
  keyView:{
    width:keyW,
    height:keyH,
    // backgroundColor:'red',
    borderTopWidth:0.5,
    borderRightWidth:0.5,
    borderBottomWidth:0.5,
    borderColor:'rgb(224,224,224)',
    justifyContent:'center',
    alignItems:'center',

  },
  keyS:{
    // width:keyW,
    // height:keyH,
    textAlign: 'center',
    textAlignVertical: 'center',
    borderTopWidth:1,
    borderTopColor:'#F1F0EE',
    borderRightWidth:1,
    borderRightColor:'#F1F0EE',
    fontSize:28,
    color:'rgb(97,97,97)'
  },

  keySR:{
    width:keyW,
    height:keyH,
    textAlign: 'center',
    textAlignVertical: 'center',
    borderTopWidth:1,
    borderTopColor:'#F1F0EE',
    fontSize:28,
    color:'rgb(97,97,97)'
  },

  bottomLine:{
    borderBottomWidth:1,
    borderBottomColor: 'rgb(189,189,189)',
  },

  skBtn:{
    height: 64, marginLeft: 20, marginRight: 20, marginTop:30, marginBottom: 30,
    alignItems: 'center', backgroundColor: 'rgb(0,122,255)',
    borderRadius: 6,
  },
  skBtnView:{
    height:64,
    // backgroundColor:'red',
    justifyContent:'center',
    alignItems:'center',
  },
  skBtnTxt:{
    // height: 64,
    fontSize: 24,
    color: '#FFFFFF',
    textAlign:'center',
    // textAlignVertical: 'center',
  },

  exit:{
    height: 64,
    marginLeft: 20, marginRight: 20,
  },

  exittext: {
    height: 64,
    fontSize: 24,
    color: 'rgb(189,189,189)',
    textAlign: 'right',
    justifyContent: 'center',
    marginTop:17,
  },
});

export default PosScreen;
