import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  ListView,
  TouchableHighlight,
  Alert,
  TouchableOpacity 
  
} from 'react-native';

import { deleteEmloyee } from '../routes/routes';

var REQUEST_URL = 'https://empleados-app.herokuapp.com/api/empleado';
var ds = new ListView.DataSource({rowHasChanged:(r1,r2) => r1 != r2})

export default class UserListView extends Component {
  constructor(){
    super()
    this.state = {
      dataSource: ds.cloneWithRows([]),
      loaded: false,
    }
    
  }
  componentDidMount(){
    var users = [];
    fetch(REQUEST_URL)
      .then((response)=>response.json())
      .then((responseJson)=>{
        var movies = responseJson;
        for(var i = 0; i < movies.length; i++){
          users.push(movies[i].firstname);
        }
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(users),
          loaded: true,
        })
      })
  }
  render() {  
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }
    return (
     <View style={styles.container}>
       <Text style={styles.welcome}>Lista de usuarios</Text>
        <ListView
          enableEmptySections={true}
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
        />
      </View>
    );
  }
  renderLoadingView() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Loading users...
        </Text>
      </View>
    );
  }
  deleteRow() {
    var rows = ['row 1', 'row 3'];
    console.log(  "<--->");
    /*this.setState({dataSource: ds.cloneWithRows(rows)})*/
  }
  renderRow(dataRow, sectionID, rowID){
        console.log(dataRow+"  "+sectionID+"  "+ rowID);
      return(
      <TouchableHighlight onPress={() => this.deleteRow(dataRow)}>
          <Text style={styles.cell}>{dataRow}</Text>
      </TouchableHighlight  >
      )
  }
  
}
const styles = StyleSheet.create({
  containerDetails:{
    paddingTop: 80
  },
  cell:{
    flex:1,
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
    paddingTop:30,
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color:'blue'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
UserListView.navigationOptions ={
    title: 'Lista de usuarios'
};