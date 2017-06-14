import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableHighlight,
  Alert
} from 'react-native';

import { newEmployee } from '../routes/routes';
/*
import GeolocationView from './geolocation/geolocationView'*/

export default class EmployeeFormTextInput extends Component{
	changeFirstname(firstname){
		this.setState({firstname});
	}
	changeLastname(lastname){
		this.setState({lastname});
	}
	changePhoto(photo){
		this.setState({photo});
	}
	changeLongitude(longitude){
		this.setState({longitude});
	}
	changeLatitude(latitude){
		this.setState({latitude});
	}
	buttonPressed(){
		if(this.state.firstname && this.state.lastname){
			const arrayData = [];
			const data = {
				firstname: this.state.firstname,
				lastname: this.state.lastname,
				photo: this.state.photo,
				longitude: this.state.longitude,
				latitude: this.state.latitude
			}
			arrayData.push(data);
			newEmployee(arrayData);
		}else{ Alert.alert('error'); }
	}
	render(){
    
		return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Nuevo usuario</Text>
        <TextInput style={styles.input} placeholder='Nombre' onChangeText={(firstname) => this.changeFirstname(firstname)}/>
        <TextInput style={styles.input} placeholder='Apellido' onChangeText={(lastname) => this.changeLastname(lastname)}/>
        <TextInput style={styles.input} placeholder='Foto' onChangeText={(photo) => this.changePhoto(photo)}/>
        <TouchableHighlight style={styles.button} onPress={ () => this.buttonPressed() }>
          <Text style={styles.textButton}>Add user</Text>
        </TouchableHighlight>
      </View>
		)
	}
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#F5FCFF',
      marginTop:30,
      paddingLeft:15,
      paddingRight:15
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'blue'
  },
  button:{
      backgroundColor:'skyblue',
      paddingTop:15,
      paddingBottom:15
  },
  textButton:{
      color:'white',
      textAlign:'center'
  }
});
EmployeeFormTextInput.navigationOptions ={
    title: 'Nuevo Usuario'
};