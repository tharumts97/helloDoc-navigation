/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createStackNavigator } from 'react-navigation';

import Login from './src/authScreen/login/Login';
import ForgotPassword from './src/authScreen/forgotPassword/ForgotPassword';
import TabNavigator from './src/navigation/tabNavigation/TabNavigator';
import DrawerNavigator from './src/navigation/drawerNavigation/DrawerNavigator';
import SignUp1 from './src/screens/SignUp/Signup1';
import BasicHealthInput from './src/screens/SignUp/basicHealthInput';
import ProfilePic from './src/screens/SignUp/addProfilePic';
import PickDate from './src/screens/Appointment/PickDate';
import PickTime from './src/screens/Appointment/PickTime';

export default class App extends Component{
  render() {
    return (
      <AppStackNavigator />
    );
  }
}

const AppStackNavigator = createStackNavigator({  
  Login:{
    screen:Login
  },

  // ForgotPassword:{
  //   screen:ForgotPassword
  // },
  
  // TabNav:{
  //   screen:TabNavigator
  // },

  DrewerNav:{
    screen:DrawerNavigator
  },

  SignUp1:{
    screen:SignUp1
  },

  SignUp2:{
    screen:BasicHealthInput
  },
  SignUp3:{
    screen:ProfilePic
  },

  PickDateApp:{
    screen:PickDate
  },

  PickTimeApp:{
    screen:PickTime
  }


},
    navigationOptions={
      headerMode:'none'
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
