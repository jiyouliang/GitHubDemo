import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import NavigatorUtil from '../navigator/NavigatorUtil'

/**
 * 欢迎页
 *
 * @export
 * @class WelcomePage
 * @extends {React.Component}
 */
export default class WelcomePage extends React.Component {
    timer: NodeJS.Timeout | undefined;
  /**
   *页面加载完成
   *
   */
  public componentDidMount() {
      this.timer = setTimeout(() => {
        NavigatorUtil.resetToHomePage(this.props);
      }, 1000);
  }

  public render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Welcome</Text>
      </View>
    );
  }

  // 页面销毁，取消计时器，避免内存溢出
  public componentWillUnmount(){
    this.timer && clearTimeout(this.timer)
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    color: 'black',
  },
});
