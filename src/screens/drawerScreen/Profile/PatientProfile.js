import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import CustomHeader from '../../../components/Header/Header';
export default class PatientProfile extends Component {

  render() {

    return (
      <View style={styles.container}>
      <CustomHeader
                    title="Pick Date"
                    leftPress={() => this.props.navigation.goBack()}
                    iconNameRight="md-git-network"
                    iconName="arrow-round-back"
                    type="sub"
                />
          <View style={styles.header}></View>
          <Image style={styles.avatar} source={require('../../../Images/patient1.png')} />
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.name}>John Doe</Text>
              <View style={styles.pdetails}>
                <Text>DOB:</Text>
                <Text>Address:</Text>
                <Text>Marital State:</Text>
                <Text>Height:</Text>
                <Text>Weight:</Text>
                <Text>Occupation:</Text>
              </View>
            </View>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#00BFFF",
    height: 200,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
    alignSelf: 'center',
    position: 'absolute',
    marginTop: 130
  },
  name: {
    fontSize: 22,
    color: "#FFFFFF",
    fontWeight: '600',
    marginTop: 300
  },
  body: {
    marginTop: 40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding: 30,
  },
  name: {
    fontSize: 28,
    color: "#696969",
    fontWeight: "600"
  },
  info: {
    fontSize: 16,
    color: "#00BFFF",
    marginTop: 10
  },
  description: {
    fontSize: 16,
    color: "#696969",
    marginTop: 10,
    textAlign: 'center'
  },
  buttonContainer: {
    marginTop: 10,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
    backgroundColor: "#00BFFF",
  },
  
});