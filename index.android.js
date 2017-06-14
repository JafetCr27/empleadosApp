
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  ListView,
  TouchableHighlight,
  Alert,
} from 'react-native';
import {DrawerNavigator} from 'react-navigation'
import list from './componentes/UserListView'
import newUser from './componentes/newUserJose'
import index from './componentes/index'

export default class reactApp extends Component{
  render(){
    const {navigation} = this.props;
    return(
      <app navigation = {navigation}/>
    )
  }
}
const empleadoApp = DrawerNavigator({
  Home: { screen: index},
  SecondScreen: { screen: list},
  nuevo: { screen: newUser},
});
AppRegistry.registerComponent('Prueba', () => empleadoApp );
