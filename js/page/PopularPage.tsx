import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';

export default class PopularPage extends React.Component {
  // 顶部导航
  _initTopTab() {
    return createAppContainer(
      createMaterialTopTabNavigator({
        AndroidTab: {
          screen: AndroidTab,
          navigationOptions: {
            title: 'Android',
          },
        },
        IosTab: {
          screen: IosTab,
          navigationOptions: {
            title: 'IOS',
          },
        },
      }),
    );
  }

  public render() {
    const TopTab = this._initTopTab();
    return (
      <View style={styles.container}>
        <TopTab />
      </View>
    );
  }
}

class AndroidTab extends React.Component {
  public render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Android</Text>
      </View>
    );
  }
}

class IosTab extends React.Component {
  public render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>IOS</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop:30
  },
  title: {
    fontSize: 20,
    color: '#020202',
  },
});
