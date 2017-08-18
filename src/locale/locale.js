import I18n from 'react-native-i18n';
import ReactNativeI18n from 'react-native-i18n';
//默认语言环境。
I18n.defaultLocale = "jp";
//当前语言环境。
I18n.locale = "zh_CN";
//设置当前语言环境。
I18n.currentLocale();
//如果当前语言环境不存在，则使用默认语言环境。
I18n.fallbacks = true;
//数据
I18n.translations = require('./localeData.json');