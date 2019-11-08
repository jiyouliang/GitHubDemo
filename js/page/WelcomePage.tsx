import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

/**
 * 欢迎页
 *
 * @export
 * @class WelcomePage
 * @extends {React.Component}
 */
export default class WelcomePage extends React.Component {
  public render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Welcome</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    title:{
        fontSize:20,
        color:'black',
    }
});
