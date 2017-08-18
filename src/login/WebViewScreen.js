import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  WebView,
  Dimensions,
  TouchableOpacity,
  Image,
  Text,
} from 'react-native';

const {width, height} = Dimensions.get('window');

class WebViewScreen extends Component {

  constructor(props) {
    super(props);
    _this = this;
  }

  static navigationOptions =
  {
    headerLeft:
    <TouchableOpacity onPress={()=>{_this.props.navigation.goBack()}}>
    <Image
    style = {{width:32, height:32}}
    source={require('../image/back@2x.png')}
    />
    </TouchableOpacity>,

    headerTitle:
    <Text style={{width:width-80,fontSize: 15, color: 'rgb(33,33,33)',fontWeight: 'bold', textAlign:'center'}}>
    YayaPay
    </Text>
  }

  render() {
    const { params } = this.props.navigation.state;

    return (
      <View style={styles.container}>
        <WebView
          style={{width:width,height:height,backgroundColor:'gray'}}
          source={{uri:params.url,method: 'GET'}}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          scalesPageToFit={true}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
});

export default WebViewScreen;
