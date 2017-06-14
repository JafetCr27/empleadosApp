import React, { Component } from 'react';
import{
    StyleSheet,
    Text,
    View
}from 'react-native'
const styles = StyleSheet.create({
  containerDetails:{
    paddingTop: 80
  },
  container: {
    flex: 1,

    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
const SecondScreen = ()=>{
    return(
    <View style={styles.container}>
        <Text style={styles.welcome}>
            This is a second 
        </Text>
    </View>
    )
}

SecondScreen.navigationOptions ={
    title: 'Nuevo usuario'
};

export default SecondScreen 