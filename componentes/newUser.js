/*onPress={()=> this.buttonPressed()}*/

import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  ListView,
  TouchableHighlight,
  Alert,
} from 'react-native';

export default class newUser extends Component{
    constructor(){
        super()
        this.state= {
            name:'',
            lastName:'',
            photo:'',
        }
    }
    changeName(name){
        this.setState({name});
    }
    changeLastName(lastName){
        this.setState({lastName});
    }
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.welcome}>Nuevo usuario</Text>
                <TextInput
                    style={styles.input}
                    placeholder= "Name"
                    value={this.state.name}
                    onChangeText={(name)=>this.changeName(name)}
                />
                <TextInput
                    style={styles.input}
                    placeholder= "LastName"
                    value={this.state.lastName}
                    onChangeText={(lastName)=>this.changeLastName(lastName)}
                />
                <TextInput
                    placeholder= "Photo"
                    value={this.state.photo}
                />
                <TouchableHighlight
                    style={styles.button}>
                    
                    <Text style={styles.textButton}>Send</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

const styles= StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        marginTop:30,
        paddingLeft:15,
        paddingRight:15
    },
    input:{
        height:40,
        borderColor:'#ccc',
        marginBottom:20,
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color:'blue'
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
})
newUser.navigationOptions ={
    title: 'Nuevo Usuario'
};