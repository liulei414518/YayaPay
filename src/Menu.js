const React = require('react');
const {
  Dimensions,
  StyleSheet,
  ScrollView,
  View,
  Image,
  TouchableOpacity,
  Text,
} = require('react-native');
const { Component } = React;

import locale from './locale/locale';
import I18n from 'react-native-i18n';

const window = Dimensions.get('window');
const uri = 'https://pickaface.net/gallery/avatar/Opi51c74d0125fd4.png';

const styles = StyleSheet.create({
  menu: {
    flex: 1,
    width: window.width,
    height: window.height,
    backgroundColor: '#FAFAFA',
    padding: 20,
  },
  avatarContainer: {
    marginBottom: 20,
    marginTop: 20,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    flex: 1,
  },
  name: {
    position: 'absolute',
    left: 70,
    top: 20,
  },
  item: {
    fontSize: 18,
    fontWeight: 'bold',
    left:12,
    marginTop:32,
    fontFamily:'PingFang-SC-Semibold',
    color:'rgb(66,66,66)',
  },
});

module.exports = class Menu extends Component {
  static propTypes = {
    onItemSelected: React.PropTypes.func.isRequired,
  };

  render() {
    return (
      <ScrollView scrollsToTop={false} style={styles.menu}>

        <View style={styles.avatarContainer}>
          <Image
            style={styles.avatar}
            source={{ uri, }}/>
          <Text style={styles.name}>YayaPay</Text>
        </View>


        <TouchableOpacity onPress={()=>this.props.onItemSelected(1)}>
          <Text
            style={styles.item}>
            {I18n.t('pos')}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>this.props.onItemSelected('2')}>
          <Text
            style={styles.item}>
            {I18n.t('history')}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>this.props.onItemSelected('3')}>
          <Text
            style={styles.item}>
            {I18n.t('account')}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>this.props.onItemSelected('4')}>
          <Text
            style={styles.item}>
            {I18n.t('setting')}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>this.props.onItemSelected('5')}>
          <Text
            style={styles.item}>
            {I18n.t('cservice')}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
};
