import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class HomePage extends React.Component {
  public render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>PopularPage</Text>
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
        color:'#020202',
    }
});

