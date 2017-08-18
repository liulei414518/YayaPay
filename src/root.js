import React, { Component } from 'react';
import {
	AppRegistry,
    Image,
    Text,View,TouchableOpacity
} from 'react-native';

import { StackNavigator } from 'react-navigation';
import FristScreen from './login/FristScreen';
const Basic = require('./Basic');

import EmailLoginScreen from './login/EmailLoginScreen';
import TelLoginScreen from './login/TelLoginScreen';
import TelCodeSelectScreen from './login/TelCodeSelectScreen';

import GatheringQrcode from './screen/child/GatheringQrcode';
import PosScreen from './screen/PosScreen';
import PasswordScreen from './login/PasswordScreen';
import WebViewScreen from './login/WebViewScreen';
import VerifyCodeScreen from './login/VerifyCodeScreen';
import SuccessScreen from './login/SuccessScreen';
import UpdateScreen from './screen/child/UpdateScreen';



const loginA = StackNavigator({
	frist:{screen: FristScreen},
	basic:{screen: Basic},
},{
	navigationOptions: ({navigation}) => ({
		header:null,
		mode: 'card',
		headerMode: 'screen',
	}),
});

// const loginA = StackNavigator({
// 	basic:{screen: Basic},
// 	frist:{screen: FristScreen},
// },{
// 	navigationOptions: ({navigation}) => ({
// 		header:null,
// 		mode: 'card',
// 		headerMode: 'screen',
// 	}),
// });

const yayaApp = StackNavigator({
	login:{screen: loginA},
	eLogin:{screen: EmailLoginScreen,},
	tLogin:{screen: TelLoginScreen},
	qrcode:{screen: GatheringQrcode},
	telCode:{screen: TelCodeSelectScreen},
	pwd:{screen: PasswordScreen},
	webView:{screen: WebViewScreen},
	verifyCode:{screen: VerifyCodeScreen},
	successScreen:{screen: SuccessScreen},
	updateScreen:{screen: UpdateScreen},

},{
	navigationOptions: ({navigation}) => ({
		mode: 'card',
		headerMode: 'screen',
	}),
});

AppRegistry.registerComponent('YayaPay', () => yayaApp);
