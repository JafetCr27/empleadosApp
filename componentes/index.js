
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Alert,
  Image
} from 'react-native';

export default class index extends Component{
    render() {
        return (
          <View style={styles.container}>
            <Image source={require('../img/react-native-logo.png')} style={styles.image}>
            </Image>
              <Text style={styles.welcome}>Proyecto final Métodos de investigación cientifica</Text>
              <Text style={styles.welcome}>React Native VS Apache Cordoba</Text>
              <Text style={styles.instructions}>Integrantes:</Text>
              <Text style={styles.instructions}>Jafet Barrera</Text>
              <Text style={styles.instructions}>Fabio Carvallo</Text>
              <Text style={styles.instructions}>Lennin Ulloa</Text>
              <Text style={styles.instructions}>Jose Soto</Text>
          </View>
        );
    }
}
const styles = StyleSheet.create({
  image:{
    resizeMode: 'cover'
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color:'black'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});