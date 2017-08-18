/*
调用方法:
rightAction(){
    let params = {'start':'0',limit:'20','isNeedCategory': true, 'lastRefreshTime': '2016-09-25 09:45:12'};
    NetUitl.post('http://www.pintasty.cn/home/homedynamic',params,'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiJVLTliZGJhNjBjMjZiMDQwZGJiMTMwYWRhYWVlN2FkYTg2IiwiZXhwaXJhdGlvblRpbWUiOjE0NzUxMTg4ODU4NTd9.ImbjXRFYDNYFPtK2_Q2jffb2rc5DhTZSZopHG_DAuNU',function (set) {
        //下面的就是请求来的数据
        console.log(set)
    })
    //get请求,以百度为例,没有参数,没有header
    NetUitl.get('https://www.baidu.com/','',function (set) {
        //下面是请求下来的数据
        console.log(set)
    })
}
*/
/*
解析方式：
let studentData=require('./data/student.json');
componentWillMount() {
    console.log("data type:"+typeof(studentData));
    console.log("student length:"+studentData.student.length);
    console.log("student1 name:"+studentData.student[0].name);
    console.log("student1 age:"+studentData.student[0].age);
    console.log("student2 name:"+studentData.student[1].name);
    console.log("student2 age:"+studentData.student[1].age);
}
*/
/**
 * NetUitl 网络请求的实现
 * https://github.com/facebook/react-native
 */
 import React from 'react';
 import { Dimensions } from 'react-native';
 import LocalStore from './LocalStore';
 var Platform = require('Platform');
 var DeviceInfo = require('react-native-deviceinfo');
 var {height, width} = Dimensions.get('window');
 import Utils from './Utils';


 class Okfetch extends React.Component{

    // static log(object){
    //     console.log('LOG:'+JSON.stringify(object));
    // }

    /*
    登录，注册没有userId，则传空值''。
    例：
    Okfetch.nGet(MConst.YAYA_COUNTRY_LIST, '',  function (res) {
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
        }
    });
    */
    static nGet(url, userId, callback){
        LocalStore.getLoginInfo(function(obj){

            var systemLanguage = DeviceInfo.getDeviceLocale();
            var DeviceId = DeviceInfo.getUniqueID();
            var DeviceType = Platform.OS;
            var AppVersion = DeviceInfo.getVersion();
            var GMTPlusTime = 'GMT+9';///*new Date().getTime();//*/ // 时区：GMT+9日本  GMT+8中国

            var Authorization = '';
            var uuid = '';

            if(obj){
                Authorization = obj.accessToken;
                uuid = obj.uuid;
            }

            var headers = {
                'systemLanguage': systemLanguage,
                'Gng-AppKey': 'YayaPay',
                'Authorization': Authorization,
                'uuid': uuid,
                'userId': userId,
                'DeviceId': DeviceId,
                'DeviceType': DeviceType,
                'AppVersion': AppVersion,
                'ResolutionWidth':width,
                'ResolutionHeight': height,
                'GMTPlusTime': GMTPlusTime,
                'Accept':'application/x-www-form-urlencoded'
            };

            Okfetch.get(url, headers, callback);
        });
    }

    /*
    登录，注册没有userId，则传空值''。
    */
    static nGet2(url, params, userId, callback){
        LocalStore.getLoginInfo(function(obj){

            var systemLanguage = DeviceInfo.getDeviceLocale();
            var DeviceId = DeviceInfo.getUniqueID();
            var DeviceType = Platform.OS;
            var AppVersion = DeviceInfo.getVersion();
            var GMTPlusTime = 'GMT+9';///*new Date().getTime();//*/ // 时区：GMT+9日本  GMT+8中国

            var Authorization = '';
            var uuid = '';

            if(obj){
                Authorization = obj.accessToken;
                uuid = obj.uuid;
            }

            var headers = {
                'systemLanguage': systemLanguage,
                'Gng-AppKey': 'YayaPay',
                'Authorization': Authorization,
                'uuid': uuid,
                'userId': userId,
                'DeviceId': DeviceId,
                'DeviceType': DeviceType,
                'AppVersion': AppVersion,
                'ResolutionWidth':width,
                'ResolutionHeight': height,
                'GMTPlusTime': GMTPlusTime,
                'Accept':'application/x-www-form-urlencoded'
            };

            Okfetch.get2(url, params, headers, callback);
        });
    }

       /*
    设置了请求头的无参get请求
    */
    static get(url, headers, callback){

        Utils.log('请求头：'+JSON.stringify(headers));

        //fetch请求
        fetch(url,{
            method: 'GET',
            headers:headers})
        .then((response) => {
            if (response.ok) {
                return response.json(); }
            })
        .then((json) => {
         if(callback)
            callback(json);})
        .catch((error) => {
            Utils.log('error:'+error)

        })
        .done();
    }

    static post(url,formData,/*token,*/callback){
        fetch(url,{
         method: 'POST',
         body: formData })
        .then((response) => {
         if (response.ok) {
            return response.json(); }
        })
        .then((json) => {
           if(callback)
            callback(json);})
        .catch((error) => {
            Utils.log('error:'+error)})
        .done();
    }

    /*
     *  get请求
     *  url:请求地址
     *  data:参数
     *  callback:回调函数
     */
     static get2(url,params,headers,callback){

        if (params) {
            let paramsArray = [];
            //拼接参数
            Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]))
            if (url.search(/\?/) === -1) {
                url += '?' + paramsArray.join('&')
            } else {
                url += '&' + paramsArray.join('&')
            }
        }
        //fetch请求
        fetch(url,{
            method: 'GET',
            headers:headers})
        .then((response) => {
            if (response.ok) {
                return response.json(); }
            })
        .then((json) => {
         if(callback)
            callback(json);})
        .catch((error) => {
            Utils.log('error:'+error)

        })
        .done();
    }
}

module.exports = Okfetch;
