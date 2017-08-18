/*
生成的二唯码页面。
*/
import React, { Component } from 'react';

import {
	StyleSheet,
	View,
	Text,
	TouchableOpacity,
	Image, Dimensions
} from 'react-native';

import GQrCode from '../../libs/qrcode/QRCode';
import locale from '../../locale/locale';
import I18n from 'react-native-i18n';
import MConst from '../../MConst';
import Call from '../../login/Call';
import Utils from '../../libs/Utils';

let {width} = Dimensions.get('window');

var _this;

class GatheringQrcode extends Component {

	constructor(props) {
		super(props);
		_this = this;
	}

	// getCountryLs(){
	// 	Call.callCountryLs(_this, function(){

	// 	}){
	// }

	static navigationOptions =
	{
		headerLeft: 
		<TouchableOpacity onPress={()=>{_this.props.navigation.goBack()}}>
		<Image
		style = {{width:32, height:32}}
		source={require('../../image/back@2x.png')}
		/>
		</TouchableOpacity>,

		headerTitle:
		<Text style={{width:width-80,fontSize: 15, color: 'rgb(33,33,33)',fontWeight: 'bold', textAlign:'center'}}>
		YayaPay
		</Text>
	}

	render() {

		const { params } = this.props.navigation.state;
		// ["currencyUnitId":"2", "price":self.priceString]
		const url = MConst.YAYA_CREAT_CODE + '?currencyUnitId='+'2&'+'price='+ params.price; //'https://www.baidu.com/'; 
		Utils.log('收款url:'+url);
		return (
			<View style={styles.inCenter}>
			<GQrCode value={ url } size={283} bgColor='purple' fgColor='white'/>

			<Text style={{paddingTop:64, fontSize:12, color:'rgb(66,66,66)'}}>
			{I18n.t('pricefont')}
			</Text>

			<Text style={{paddingTop:8, fontSize:37, color:'rgb(66,66,66)'}}>
			￥ {params.price} JPY

			</Text>
			</View>
		);
	}
}



const styles = StyleSheet.create({

	inCenter:{
		alignItems:'center',
		justifyContent: 'center',
		marginTop: 43,
	},
});

export default GatheringQrcode;