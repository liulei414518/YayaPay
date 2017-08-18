import React, {
  Component
} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  ListView,
} from 'react-native';

import MConst from '../MConst';
import Okfetch from '../libs/Okfetch';
// import NextButton from './widget/NextButton'
import Call from './Call';

let {width,height} = Dimensions.get('window');

class TelCodeSelectScreen extends React.Component {
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

  constructor(props) {
    super(props);
    _this = this;

    // 创建DataSource对象
    let ds = new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2});

    // 将DataSource对象设置为state，以便之后更新。
    this.state = {
      ds,
    };

    // 绑定this指针
    this.setData = this._setData.bind(this);
  }

  _setData = (newData) => {
    // 更新数据，同时通过setState更新UI
    this.setState({
      ds: this.state.ds.cloneWithRows(newData)
    });
  }

  // 此方法在 render() 之前执行//componentWillMount
  componentWillMount(){
    Call.callCountryLs(_this, function(ls){
      _this.setData(ls);
    });
  }

  // list 的顶部
  _renderHeader=()=>{
    return (
      <View style={styles.listHeader}>
      <Text style={styles.listHeaderText}>请选择区号</Text>
      </View>
      );
  }

  _renderRow=(data, sectionID, rowID) => {
    const { params } = this.props.navigation.state;

    return (
      <View style={styles.row}>
      <TouchableOpacity onPress={
        ()=>{
          params.obj.setState({quhao:data.telCountryCode});
          _this.props.navigation.goBack()
        }
      } >
      <Text style={styles.textStyle}>{data.countryName+' '+data.telCountryCode}</Text>
      </TouchableOpacity>
      </View>
      );
  }

  /* <View style = {{position:'absolute', marginTop:height-310 ,marginLeft:width-70,}} >
        <NextButton  name = '' onPressCallback = {
          ()=>{
            alert('邮箱地址不能为空');
          }
      }/>
    </View>
    */

    render() {
      return (
        <View style= {styles.container}>
        <ListView
        style={styles.container}
        dataSource={this.state.ds}
        renderRow={this._renderRow}
        renderHeader={this._renderHeader}
        />

        </View>
        );
    }
  }

  const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'#ffffff',
      marginTop: 0,
    },
    listHeader:{
     height:96,

   },
   listHeaderText:{
    marginTop: 30,
    paddingLeft:22,
    alignItems:'center',
    fontSize: 32,
    fontFamily: 'PingFang-SC-Light',
    color:'rgb(66, 66, 66)',
    height:40,
  },
  row: {
    marginTop:1,
    height: 60,
    justifyContent:'center',
    // backgroundColor:'red',

  },
  textStyle:{
    paddingLeft:22,
    justifyContent: 'center',
    alignItems:'center',
    fontSize: 24.5,
    fontFamily: 'PingFang-SC-Semibold',
    color:'rgb(0,122,255)',
  },
  buttonStyle:{

  },
  secondButtonStyle:{
   marginTop:24,
 },
});
  export default TelCodeSelectScreen;
