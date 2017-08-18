
import MConst from '../MConst';
import Okfetch from '../libs/Okfetch';
import LocalStore from '../libs/LocalStore';
import DES3 from '../libs/DES3';
import Utils from '../libs/Utils';
/*
<IndicatorDialog _dialogVisible={this.state.isDialogVisible}/>
*/

class Call {

	// static log(object){
	// 	console.log('LOG:'+JSON.stringify(object));
	// }

	// var dd = new Okfetch();
	// dd.

	// var IS_SHOW_LOG = true;

	/*
	callback国家列表，如果已有本地数据，则callback本地数据
	*/
	static callCountryLs(context, callback){
		//获取国家列表
		LocalStore.getCountryList(function(countryList){

			if(!countryList || countryList.length == 0){
				//context.setState({isShowLoading:true});
				Okfetch.nGet(MConst.YAYA_COUNTRY_LIST, null,  function (res) {
					//context.setState({isShowLoading:false});
					Utils.log('国家列表request:'+JSON.stringify(res));
					if(1 == res.status){
						if(res.result.length > 0 ){
							LocalStore.saveCountryList(res.result);
							if(callback != null)
								callback(res.result);
						}else{
							if(callback != null)
								callback([{countryName:'China', telCountryCode:'+86'}]);
						}
					}
				});
			}else{
				Utils.log('国家列表:'+JSON.stringify(countryList));
				//countryList = [{countryName:'China', telCountryCode:'+86'}];
				if(callback != null){
					callback(countryList);
				}
			}
		});
	}

	/*
	过滤登录信息.
	注意:
	合格返回false,不合格返回true
	*/
	static filterUser(uName, pwd){
		if(!uName){
			alert('请重新输入邮箱或手机号');
			return true;
		}

		if(!pwd){
			alert("密码不能为空");			return;
			return true;
		}

		if(pwd.length < 6 || pwd.length > 20){
			alert('密码长度为 6~20');
			return true;
		}
		return false;
	}

	static callMobileLogin(context, mobile, telCode, pwd, callback){

		if(Call.filterUser(mobile, pwd)){
			return;
		}

		var des3 = new DES3();
		var key = '1234567890qwertyuiopasdf';
		var encodePwd = des3.base64encode(des3.triple_des(key, pwd))

		let formData = new FormData();
		formData.append( "loginType",  "tel"   );
		formData.append( "tel",        mobile  );
		formData.append( "telCode",    telCode );
		formData.append( "password",   encodePwd     );

		Utils.log('手机登录参数：/tel:'+mobile + '/telCode:' + telCode + '/password:'+encodePwd);

		/*
		登录逻辑：
		1.请求登录接口。
		2.请求获取用户信息接口。
		3.当前两个接口都通过了，才判定登录成功。
		4.本地存储登录信息和用户信息。
		*/
		context.setState({isShowLoading:true});
		Okfetch.post(MConst.YAYA_LOGIN, formData, function (loginRes) {

			context.setState({isShowLoading:false});

			Utils.log('手机登录response:'+JSON.stringify(loginRes));

			if(loginRes && 1 == loginRes.status){


				//本地存储用户登录信息
				LocalStore.saveLoginInfo(loginRes.result);



				//请求用户信息
				Call.callUserInfo(context, function(infoRet){
					//存储用户信息
					LocalStore.saveUserInfo(infoRet);

					if(callback!=null){
						callback(loginRes.result);
					}
				});
			}else{
				if(loginRes.msg != null && loginRes.msg != ''){
					alert(loginRes.msg);
				}else{
					alert("手机登录失败");
				}
			}
		})
	}

	static callEmailLogin(context, email, pwd, callback){

		if(Call.filterUser(email, pwd)){
			Utils.log('邮箱密码有问题');

			return;
		}

		var des3 = new DES3();
		var key = '1234567890qwertyuiopasdf';
		var encodePwd = des3.base64encode(des3.triple_des(key, pwd))

		let formData = new FormData();
		formData.append( "loginType", 'email'   );
		formData.append( "email",     email     );
		formData.append( "password",  encodePwd );

		Utils.log('邮箱登录参数：/email:'+email +'/ encodePwd:'+ encodePwd);

		context.setState({isShowLoading:true});
		Okfetch.post(MConst.YAYA_LOGIN, formData, function (loginRes) {

			//----------------------
			 context.setState({isShowLoading:false});
			 LocalStore.saveLoginInfo(loginRes.result);

			if(loginRes && 1 == loginRes.status){
				Utils.log('--邮箱登录成功----');

				//请求用户信息
				Call.callUserInfo(context, function(infoRet){
					//本地存储用户登录信息
					Utils.log("'--获取用户信息----'");
					LocalStore.saveUserInfo(infoRet);
					if(callback!=null){
						callback(infoRet.result);
					}
				});
			}else{
				if(loginRes.msg != null && loginRes.msg != ''){
					Utils.log("--邮箱登录失败2----");
					alert(loginRes.msg);
				}else{
					Utils.log("'--邮箱登录失败1----'");
					alert("邮箱登录失败");
				}
			}
		})
	}

	static callUserInfo(context, callback){

		Okfetch.nGet(MConst.YAYA_USERINFO, "", function (res) {

			Call.log('用户信息response:'+JSON.stringify(res));

			if(res && 1 == res.status){
    			//获取用户信息成功
    			if(callback != null){
    				callback(res.result);
    			}
    		}else{
    			if(res.msg != null && res.msg != ''){
    				alert(res.msg);
    			}else{
    				alert("获取用户信息失败");
    			}
    		}
    	})
	}
	/*
     忘记密码：1， 先要获取时间戳；
		         2. 然后根据时间戳，登录账号 区号发送验证码
						 3.如果是手机 直接发送密码；
						 4如果是邮箱 需要进入
	 */
	static callTelForgetPwd(tel,telCode,callback){

		Okfetch.nGet(MConst.YAYA_TIMESTAMP, '', function (res) {

			Call.log('时间戳:'+JSON.stringify(res));
		   if(res && 1 == res.status){
				//获取用户信息成功
				if(callback != null){
					let formData = new FormData();
					var des3 = new DES3();
					var key = '1234567890qwertyuiopasdf';
					var valueStr = tel +','+res.result+','+telCode;
					var encodePwd = des3.base64encode(des3.triple_des(key, valueStr))
					formData.append( "content",  encodePwd );
					var url =  MConst.YAYA_VERIFICATION_CODE+'?content='+encodePwd;
					console.log('url:===='+url);

					Okfetch.nGet(url,'', function(data) {
                   console.log("---"+JSON.stringify(data));
 								   if(data && 1 == data.status){
										 callback(data.result);
 									 }
									 else{
										 if(data.msg != null && data.msg != ''){
						 					alert(data.msg);

						 				}else{
						 					alert("发送验证码失败");
						 				}
									 }

           });
				}
			}
			else{
				if(res.msg != null && res.msg != ''){
					alert(res.msg);
				}else{
					alert("获取时间戳失败");
				}
			}

	});
}
   /**
    * findType:email
    * email:
    * @param  {[type]}   email    [description]
    * @param  {Function} callback [description]
    * @return {[type]}            [description]
    */

	static callFindPwd(findType,userName,telCode,verificationCode,callback){

		let formData = new FormData();
		formData.append( "findType",  findType );

		if(findType == 'email'){
			formData.append( "email",  userName );

		}else{
			formData.append( "tel",  userName );
			formData.append( "telCode",  telCode );
			formData.append( "verificationCode",  verificationCode );
		}
		Okfetch.post( MConst.YAYA_FIND_PWD,formData, function(data) {
						 if(data && 1 == data.status){
							 callback(data.result);
						 }
						 else{
							 if(data.msg != null && data.msg != ''){
								alert(data.msg);
							}else{
								alert("获取密码失败");
							}
						 }

		 });

	}

	/**
	 * @param  {[type]}       [description]
	 * @param  {Function} callback [description]
	 * @return {[type]}            [description]
	 */

 static callGetAccountInfo(callback){

	 Okfetch.nGet( MConst.YAYA_GET_ACCOUNT_INFO,'', function(data) {
						if(data && 1 == data.status){
							callback(data.result);
						}
						else{
							if(data.msg != null && data.msg != ''){
							 alert(data.msg);
						 }else{
							 alert("获取信息失败");
						 }
						}

		});

 }

	static log(object){
		console.log('LOG:'+JSON.stringify(object));
	}

}

export default Call;
