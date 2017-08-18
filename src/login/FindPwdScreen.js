import React, { Component } from 'react';
import {
	View,
	Text,TouchableOpacity,Image
} from 'react-native';

class FindPwdScreen extends React.Component {

	constructor(props) {
		super(props);
		thiz = this;
	}

	static navigationOptions = {
		headerLeft: 
		<TouchableOpacity
		onPress={()=>{thiz.props.navigation.goBack()}}>
		<Image
		style = {{width:32, height:32}}
		source={require('../image/back@2x.png')}
		/>
		</TouchableOpacity>
	}
	
	render() {  
		return (  
			<View>  
			<Text>我一定要找回密码</Text>  
			</View>  
			);  
	} 
}

export default FindPwdScreen;