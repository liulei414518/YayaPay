import React, {
	AsyncStorage
}from 'react-native';

class LocalStore {

    static log(object){
        console.log('LOG:'+JSON.stringify(object));
    }

    static saveLoginInfo(loginInfo){
        if(loginInfo){
            LocalStore.log(loginInfo);
            LocalStore.save('loginInfo', JSON.stringify(loginInfo));
        }
    }

    static getLoginInfo(callback){
        LocalStore.get('loginInfo').then((value) => {
            callback(JSON.parse(value));
        });
    }

    static saveUserInfo(userInfo){
        if(userInfo){
            LocalStore.save('userInfo', JSON.stringify(userInfo));
        }
    }

    static getUserInfo(callback){
        LocalStore.get('userInfo').then((value) => {
            callback(JSON.parse(value));
        });
    }

    static saveCountryList(countryList){
        if(countryList){
            LocalStore.save('countryList', JSON.stringify(countryList));
        }
    }

    static getCountryList(callback){
        LocalStore.get('countryList').then((value) => {
            callback(JSON.parse(value));
        });
    }

    //-----------------------------------------------------------------------------------------------


    static saveSystemConfig(systemInfo){
        if(systemInfo){
          LocalStore.save('systemInfo', JSON.stringify(systemInfo));}
      }
      static getSystemConfig(callback){
        LocalStore.get('systemInfo').then((value) => {
          callback(JSON.parse(value));
      });
    }





	//-----------------------------------------------
	
	
    /**
     * 获取
     * @param key
     * @returns {Promise<T>|*|Promise.<TResult>}
     */
     static get(key) {
     	return AsyncStorage.getItem(key).then((value) => {
     		const jsonValue = JSON.parse(value);
     		return jsonValue;
     	});
     }


    /**
     * 保存
     * @param key
     * @param value
     * @returns {*}
     */
     static save(key, value) {
     	return AsyncStorage.setItem(key, JSON.stringify(value));
     }


    /**
     * 更新
     * @param key
     * @param value
     * @returns {Promise<T>|Promise.<TResult>}
     */
     static update(key, value) {
     	return DeviceStorage.get(key).then((item) => {
     		value = typeof value === 'string' ? value : Object.assign({}, item, value);
     		return AsyncStorage.setItem(key, JSON.stringify(value));
     	});
     }


    /**
     * 更新
     * @param key
     * @returns {*}
     */
     static delete(key) {
     	return AsyncStorage.removeItem(key);
     }
 }

 export default LocalStore;