import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Dimensions
} from 'react-native';

var devideWidth  = Dimensions.get('window').width;
var imgW = 24;
var inputW = devideWidth - imgW - 50;


export default class EditView extends Component {
  constructor(props) {
   super(props);
   this.state = {text: ''};
 }
  render() {
    return (
      <View style={{  backgroundColor: '#0000',
        height:50,
        marginLeft:22,
        marginRight:22,
       }}>
        <View style={styles.TextInputView}>
           <TextInput style={[styles.TextInput,this.props.textStyle]}
           underlineColorAndroid='transparent'
             placeholder={this.props.name}
             onChangeText={
               (text) => {
                 this.setState({text});
                 this.props.onChangeText(text);
               }
            }
           />
           <Image style = {{
                 marginRight:5,
                 marginTop:8,
                 height: imgW,
                 width: imgW,
               }} source={require('../../image/correct@2x.png')}/>
         </View>
         <Text style={{
            marginTop:5,
            backgroundColor:'rgb(238,238 ,238)',
            height:1,
         }}></Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  TextInputView: {
    // backgroundColor:'yellow',
    height:40,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  TextInput: {
    // backgroundColor:'red',
    height:40,
    width:inputW,

  },
});
