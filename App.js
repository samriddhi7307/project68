import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import FaceBookScreen from './screens/FaceBookScreen';
import InstagramScreen from './screens/InstagramScreen';
import {createAppContainer} from 'react-navigation';

export default class App extends React.Component {
  render(){
  return (
    <View style = {styles.button}>
    <Text style = {styles.buttonText}>BUZZ APP </Text>

    <AppContainer/>
    </View>
  );
}
}

const TabNavigator = createBottomTabNavigator({
  Facebook:{screen:FaceBookScreen},
  Instagram:{screen:InstagramScreen}
}); 

const AppContainer = createAppContainer(TabNavigator)

const styles=StyleSheet.create({
  button:{backgroundColor:'lightpink'},
  buttonText:{
     marginTop:0,
     marginLeft:500,
    width:500,
    padding:10,
    fontSize:25,
    fontWeight:'bold',
    justifyContent:'center',
    alignItems:'center',
    textAlign:'center'
  }
 });