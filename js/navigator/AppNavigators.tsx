// 导航器相关组件
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
// 自己创建的页面
import WelcomePage from '../page/WelcomePage';
import HomePage from '../page/HomePage';
import TrendingPage from '../page/TrendingPage';
import FavoritePage from '../page/FavoritePage';
import MinePage from '../page/MinePage';

/**
 * 导航器，分两部分
 * 1、初始化的导航器，显示欢迎页
 * 2、初始后的导航器，显示显示底部导航四个页面
 *
 * 通过createSwitchNavigator将导航器分割成两部分
 */

// 初始化导航器
const InitNavigator = createStackNavigator({
  WelcomePage: {
    screen: WelcomePage,
    navigationOptions: {
      header: null, // 隐藏头部
    },
  },
});

// 主页导航器
const MainNavigator = createStackNavigator({
  HomePage: {
    screen: HomePage,
    navigationOptions: {
      header: null, // 隐藏头部
    },
  },
});

export default createAppContainer(
  createSwitchNavigator(
    {
      Init: InitNavigator,
      Main: MainNavigator,
    },
    {
      navigationOptions: {
        header: null, //隐藏头部
      },
    },
  ),
);
