import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity,
    TextInput
} from 'react-native';
import { Container, Header, Content, Button, Text } from 'native-base';
import style from '../../styles/style';
import Logo from '../../components/login/logo';

class Login extends Component {
    constructor(props) {
                super(props);

    }

    loginHandler = () => {
        this.props.navigation.navigate('DrewerNav')
    }
    signupHandler = () => {
        this.props.navigation.navigate('SignUp1')
    }
    forgotpwHandler = () => {
        this.props.navigation.navigate('forgotpw')
    }

    render() {
        const { parent, signupButton, signupTxt, signupTxtCont,loginTxt,input,buttonStyle } = style

        return (
            <View style={parent}>
                <Logo style={alignItems='center'} />
                <Text style={loginTxt}>Login</Text>
                <TextInput style={input} underlineColorAndroid='#BDBDBD' placeholder="Username" onChangeText={text => this.setState({ username: text })} />
                <TextInput style={input} secureTextEntry={true} placeholder="Password" onChangeText={text => this.setState({ password: text })} />

                <View style={{ alignItems: 'center' }}>
                    <Button onPress={this.loginHandler} style={buttonStyle}>
                        <Text>Login</Text>
                    </Button>
                </View>
                <View style={signupTxtCont}>
                <TouchableOpacity onPress={this.forgotpwHandler}>
                        <Text style={signupButton}>Forgot Password?</Text>
                    </TouchableOpacity>
                </View>
                <View style={signupTxtCont}>
                    <Text style={signupTxt}>Dont have an account yet?</Text>
                    <TouchableOpacity onPress={this.signupHandler}>
                        <Text style={signupButton}>SignUp</Text>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }
}

export default Login;


// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
// });