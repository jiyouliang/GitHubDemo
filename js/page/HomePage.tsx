import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createAppContainer} from 'react-navigation';
// 底部导航器组件
import {createBottomTabNavigator} from 'react-navigation-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
// 相关页面
import PopularPage from './PopularPage';
import TrendingPage from './TrendingPage';
import FavoritePage from './FavoritePage';
import MinePage from './MinePage';

export default class HomePage extends React.Component {
  public render() {
    const Tab = this._initTabNavigator();
    return (
      // <View style={styles.container}>
      //   <Text style={styles.title}>HomePage</Text>
      // </View>
      <Tab />
    );
  }

  // 初始化底部导航器
  _initTabNavigator() {
    // 通过createAppContainer包裹创建底部导航器
    return createAppContainer(
      createBottomTabNavigator({
        PopularPage: {
          screen: PopularPage,
          navigationOptions: {
            tabBarLabel: '最热',
            tabBarIcon: ({tintColor, focused}) => (
              <MaterialIcons
                    name={'whatshot'}
                    size={26}
                    style={{color: tintColor}}
                />
          ),
          },
        },
        TrendingPage: {
          screen: TrendingPage,
          navigationOptions: {
            tabBarLabel: '趋势',
            tabBarIcon: ({tintColor, focused}) => (
              <Ionicons
                name={'md-trending-up'}
                size={26}
                style={{color: tintColor}}
              />
            ),
          },
        },
        FavoritePage: {
          screen: FavoritePage,
          navigationOptions: {
            tabBarLabel: '收藏',
            tabBarIcon: ({tintColor, focused}) => (
              <MaterialIcons
                name={'favorite'}
                size={26}
                style={{color: tintColor}}
              />
            ),
          },
        },
        MinePage: {
          screen: MinePage,
          navigationOptions: {
            tabBarLabel: '我的',
            tabBarIcon: ({tintColor, focused}) => (
              <Entypo name={'user'} size={26} style={{color: tintColor}} />
            ),
          },
        },
      }),
    );
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
    color: '#020202',
  },
});
