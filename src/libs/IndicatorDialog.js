import React, { Component } from 'react';
import {
    Modal,
    Text,
    View ,
    StyleSheet,
    ActivityIndicator,
} from 'react-native';

let Dimensions = require('Dimensions');
let SCREEN_WIDTH = Dimensions.get('window').width;//宽
let SCREEN_HEIGHT = Dimensions.get('window').height;//高

export default class IndicatorDialog extends Component {

    // 构造
    constructor(props) {
        super(props);
        this.state = {// 初始设为显示加载动画
            animating: true,
        };
    }

    static propTypes = {
        _dialogVisible: React.PropTypes.bool //显示还是隐藏
    }

    static defaultProps = {
        _dialogVisible: false
    }

    render() {
        // onPress事件直接与父组件传递进来的属性挂接
        return (
            //{/*如果是Android设备 必须有onRequestClose方法*/}
            <Modal visible={this.props._dialogVisible} transparent={true} onRequestClose={() => {}} >
                <View style={styles.bg}>
                    <View style={styles.dialog}>
                        {/* 大号的指示器，小号size为：size="small" */}
                        <ActivityIndicator
                            animating={this.state.animating}
                            style={[styles.centering, {height: 100}]}
                            size="large" />

                    </View>
                </View>
            </Modal>
        );
    }
}

const styles = StyleSheet.create({
    bg: {  //全屏显示 半透明 可以看到之前的控件但是不能操作了
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT,
        backgroundColor: 'rgba(52,52,52,0.5)',  //rgba  a0-1  其余都是16进制数
        justifyContent: 'center',
        alignItems: 'center',
    },
    dialog: {
        // width: SCREEN_WIDTH * 0.8,
        // height: SCREEN_HEIGHT * 0.28,
        width: 100,
        height: 100,
        backgroundColor: 'white',
        borderRadius: 8,
    },

    centering: {
        alignItems: 'center',
        justifyContent: 'center',
    },

});