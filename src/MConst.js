import React, { Component } from 'react';

//const port = 'http://172.29.231.16/';
// const port = 'https://www.okulo.cn/';
const port = 'http://172.29.231.16:8081/';

const MConst = {

	/*
	登录。
 	测式账号：478769652@qq.com
	{
	  	loginType ： email/mobile
	  	email/mobile : email/mobile
      /telCode:telCode
	  	password : password
	}
	return
	*/
	YAYA_LOGIN:port + 'yayaworldAPI/login/appLogin',

  /*
  获取用户信息
  无参
  */
  YAYA_USERINFO:port + 'travelAPI/user/getGuiderInfo',

  /*
  获取国家及地区列表
  无参
  */
  YAYA_COUNTRY_LIST: port + 'travelAPI/area/getCountryList',
  /*
  生成二维码url。
  {
	"currencyUnitId":"2", //此参数在国家区号列表接口中。
	"price":self.priceString
  }
  */
  YAYA_QRCODE: port + 'travelAPI/facePay/createOrder',

  /*
  获取服务器时间戳.
  无参
  */
  YAYA_TIMESTAMP: port + 'travelAPI/serverInfo/getTimestamp',

  /*
  获取验证码
  参数：
  {
	content:手机号，+时间搓，+区号
  }
  */
  YAYA_VERIFICATION_CODE: port + 'travelAPI/sms/getVerificationCode',

  /*
  手机找回密码流程：
  1.获取服务器时间戳，并生成content参数。
  2.获取验证码。
  3.获取验证码成功后跳转到输入验证码界面。
  4.找回密码。
  5.找回密码成功，返回到输入密码界面（手机会收到新密码）。
	-----------------------------------------------
	邮箱找回密码流程：
	1.直接请求找回密码。
	2.请求成功，跳转到提示成功界面。
   	-----------------------------------------------
  找回密码
  参数：
  手机找回密码
  {
	findType: tel
	telCode: 区号
	verificationCode:验证码
  }
  邮箱找回密码
  {
  findType: email
	email:email
  }
  */
  YAYA_FIND_PWD: port + 'travelAPI/findPassword/email',

	/*
	获取交易历史  流水列表
	{
  page： //第几页
	pageSize：20 //每一页的条数
	keyWord： 搜索的关键字
  }
  */
  YAYA_TRADELIST:port+ "travelAPI/yayaFacePay/flow",

  /*
  获取用户信息
  [YAYA_GET_GUIDER_INFO description]
  @type {[type]}
  languageCode:systemLanguage()
  */
  YAYA_GET_GUIDER_INFO:port+ "travelAPI/user/getGuiderInfo",

  /*
  [YAYA_GET_ACCOUNT_INFO description]
  获取账户信息
  @type
  {
  无参数
  }
  */
  YAYA_GET_ACCOUNT_INFO:port+ "travelAPI/yayaFacePay/accountInfo",

  /*
  [YAYA_FACE_PAY_REFUND description]
  当面付申请退款
  @type {[type]}
  ["id" : TripleDES.tripleDES(tradeRecord.flowId), "refundDescribe": refundReason]
  */

  YAYA_FACE_PAY_REFUND:port+ "travelAPI/facePay/faceRefund",
  /*
  [YAYA_CREAT_CODE description]
  生成二维码
  ["currencyUnitId":"2", "price":self.priceString]
  @type {[type]}
  */
  YAYA_CREAT_CODE:port+ "travelAPI/facePay/createOrder",

	/**
     * [YAYA_SYSTEM_CONFIG description]
     * @type {[type]}
     */
	YAYA_SYSTEM_CONFIG:port+ "travelAPI/yayaFacePay/systemConfig"


  };


  export default MConst;
