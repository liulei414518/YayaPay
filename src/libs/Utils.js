import React from 'react';
// var Platform = require('Platform'); 
// var {height, width} = Dimensions.get('window');
// var DeviceInfo = require('react-native-device-info');
/**
 * 手机号码正则表达式
 * 移动号码段:139、138、137、136、135、134、150、151、152、157、158、159、182、183、187、188、147
 * 联通号码段:130、131、132、136、185、186、145
 * 电信号码段:133、153、180、189
 */
 const mobileRegex = '^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\\d{8}$';
/*
 * 固话号码正则表达式
 */
//const telRegex = '^(0\\d{2}-\\d{8}(-\\d{1,4})?)|(0\\d{3}-\\d{7,8}(-\\d{1,4})?)$';

/*
 * 邮箱
 */
 const emailRegex = '^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$'; 




 class Utils extends React.Component{

 	static log(msg){
 		if(typeof(msg) == 'object')
 			console.log('LOG:'+JSON.stringify(msg));
 		else
 			console.log('LOG:'+msg);
 	}

	//是否是手机号码
	static isMobile(mobile){
		var result = mobile.match(mobileRegex);

		return result ? true : false;

	}

	//是否是邮箱
	static isEmail(email){
		var result = email.match(emailRegex);
		return result ? true : false;
	}

	// static getHeaders(){
		
	// 	var header = {
	// 		'systemLanguage': '',
	// 		'Gng-AppKey': 'YayaPay',
	// 		'Authorization': '',
	// 		'uuid': '',
	// 		'userId': '',
	// 		'DeviceId': '',
	// 		'DeviceType': '',
	// 		'AppVersion': '',
	// 		'ResolutionWidth': width:,
	// 		'ResolutionHeight': height:,
	// 		'GMTPlusTime': ''
	// 	}

	// 	return header;
	// }



}
module.exports = Utils;










