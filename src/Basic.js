
const React = require('react');
const { Component } = React;
const {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,BackHandler,ToastAndroid
} = require('react-native');
const SideMenu = require('react-native-side-menu');
const Menu = require('./Menu');

import PosScreen from './screen/PosScreen';
import HistoryScreen from './screen/HistoryScreen';
import AccountScreen from './screen/AccountScreen';
import SettingScreen from './screen/SettingScreen';
import CServiceScreen from './screen/CServiceScreen';
// import Test from './screen/Test';

module.exports = class Basic extends Component {
  constructor(props){
    super(props);
    this.state = {
      isOpen: false,
      selectedItem: '1',
    };
  }

  // componentWillMount(){
  //   BackHandler.addEventListener('hardwareBackPress', this.onBackHandler);
  // }

  // componentWillUnmount(){
  //   BackHandler.removeEventListener('hardwareBackPress', this.onBackHandler);
  // }

  //  //安卓双击返回键监听
  //  onBackHandler = () => {
  //   if(this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()){

  //     return false;
  //   }
  //   this.lastBackPressed = Date.now();
  //   ToastAndroid.show('再点一次退出', ToastAndroid.SHORT);
  //   return true;
  // }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  updateMenuState(isOpen) {
    this.setState({ isOpen, });
  }

  onMenuItemSelected = (item) => {
    this.setState({
      isOpen: false,
      selectedItem: item,
    });
  }

  render() {
    const { navigate } = this.props.navigation;
    const menu = <Menu onItemSelected={this.onMenuItemSelected} />;
    const itemIndex = this.state.selectedItem;

    return (
      <SideMenu menu={menu} isOpen={this.state.isOpen} onChange={(isOpen) => this.updateMenuState(isOpen)}>
      <View style={styles.container}>
      {
        itemIndex == 1 ? <PosScreen obj={this.props.navigation}/> :
        itemIndex == 2 ? <HistoryScreen/> :
        itemIndex == 3 ? <AccountScreen/> :
        itemIndex == 4 ? <SettingScreen/> :
        <CServiceScreen/>
      }
      </View>

      <View style={styles.header}>
      <Button style={{alignSelf:'center',marginLeft:14,marginTop:20,width:32,height:32,}} onPress={() => this.toggle()}>
      <Image style={{width:32,height:32,}} source={require('./image/menu.png')} />
      </Button>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', marginRight:38}}>
        {
          itemIndex == 1 ?
          (
            <Image source={require('./image/page01@2x.png')}
              style={
              {marginTop:15,width: 90, height: 19}
            } />
          )
          :
          (
            <Text style={{fontSize: 15, color: 'rgb(33,33,33)',fontWeight: 'bold'}}>
              {
                itemIndex == 2 ? '交易历史' :
                itemIndex == 3 ? '账户信息' :
                itemIndex == 4 ? '设置' :
                // itemIndex == 5 ? '测式' :
                '联系客服'
              }
            </Text>
          )
        }
      </View>
      </View>
      </SideMenu>
      );
  }
};

class Button extends Component {
  handlePress(e) {
    if (this.props.onPress) {
      this.props.onPress(e);
    }
  }

  render() {
    return (
      <TouchableOpacity
      onPress={this.handlePress.bind(this)}
      style={this.props.style}>
      <Text>{this.props.children}</Text>
      </TouchableOpacity>
      );
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    marginTop:64,
    backgroundColor: '#FFFFFF',
  },

  header: {
    flexDirection: 'row',
    height: 64,
    backgroundColor: 'rgb(255,255,255)',
    position: 'absolute',
    top: 0, left:0, right:0,
    borderBottomWidth:1,
    borderBottomColor: 'rgb(189,189,189)',
  },

  instructions: {
    textAlign: 'center',
    color: '#333333',
  },
});
