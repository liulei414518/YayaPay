import React, { Component } from 'react';
import {
  View,
  Text,
  ListView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

class UpdateScreen extends React.Component {
  constructor(props) {
   super(props);
   this.state = {text: ''};
  }
  render() {
     //定义一个数组 用于存储数组
       var arr = [
         "1. 	新添加商品收费",
         "2. 	商品收费下对商品进行搜索",
         "3. 	自定义金额和商品可一同创建订单",
         "4. 	可查看并编辑、备注当前订单内容",
         "5. 	相应订单详细更新",
         "6. 	收费成功之后可选择发送电子收据",
       ];
     var array = [];
     for (var i in arr) {
        var text =
          <Text
             numberOfLines={1}
             key={i}
           >
           {arr[i]}
           </Text>
           array.push(text);
       }

        return (
          <View style={styles.container}>
          {array}
          </View>
        );
    }
};

var styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
  },
});

export default UpdateScreen;
