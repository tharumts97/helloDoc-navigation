import React, { Component } from 'react';

import { View, Text, TouchableOpacity } from 'react-native';
import style from '../../styles/style';
import CustomHeader from '../../components/Header/Header';
import RegForm from '../../components/signup/RegForm';

export default class SignUp1 extends Component {

    gotoLoginHandler = () => {
        this.props.navigation.navigate('Login')
    }

    basicHealthHandler = () => {
        this.props.navigation.navigate('SignUp2')
    }

    render() {
        const { parent, signupTxtCont, signupTxt, signupButton, nextButton } = style
        return (
            <View style={parent}>
                <CustomHeader
                    title="Basic Infromation"
                    openDrawer={() => this.props.navigation.openDrawer()}
                    iconName="md-phone-portrait"
                />
                <RegForm type="SignUp" />
                <View>
                    <TouchableOpacity
                        style={nextButton} onPress={this.basicHealthHandler}>
                        <Text> Next </Text>
                    </TouchableOpacity>
                </View>
                <View style={signupTxtCont}>
                    <Text style={signupTxt}>Alrady have an Account?</Text>
                    <TouchableOpacity onPress={this.gotoLoginHandler}>
                        <Text style={signupButton}>SignIn</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
