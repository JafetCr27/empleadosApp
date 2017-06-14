import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  ListView,
  TouchableHighlight,
  Alert,
} from 'react-native';
import list from './MovieListView'
const styles = StyleSheet.create({
  containerDetails:{
    paddingTop: 80
  },
  cell:{
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    paddingTop:20,
    paddingBottom:20,
    alignItems: 'center'
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
const app = (props)=>{
    const { navigate } = props.navigation;
    
    return(
        <View style={styles.container}>
            <Text style={styles.welcome}>           
            </Text>    
            <Button
                onPress={()=> navigate('SecondScreen')}
                title="Detalles"
            />
        </View>

    )
}

app.navigationOptions = {
    title: "Nuevo usuario"
};
export default app  