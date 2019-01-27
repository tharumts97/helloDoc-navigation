import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ProgressBarAndroid,
    ScrollView
} from 'react-native';

import style from '../../styles/style';

import HealthForm from '../../components/signup/basicHealthForm';
import CustomHeader from '../../components/Header/Header';

export default class BasicHealthInput extends Component {

    propicHandler = () => {
        this.props.navigation.navigate('SignUp3')
    }

    render() {
        const { parent, signupTxtCont, signupTxt, signupButton, pbar, progBar, form, nextButton } = style
        return (
            <View style={parent}>
                <CustomHeader
                    title="Basic Health Infromation"
                    openDrawer={() => this.props.navigation.openDrawer()}
                    iconName="md-phone-portrait"
                />
                <View style={progBar}>
                    <ProgressBarAndroid
                        style={pbar}
                        styleAttr="Horizontal"
                        indeterminate={false}
                        progress={0.33}
                    />
                </View>
                <View style={form}>
                    <HealthForm type="HealthForm" />
                    <View>
                        <TouchableOpacity
                            style={nextButton} onPress={this.propicHandler}>
                            <Text> Next </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <ScrollView>

                </ScrollView>
            </View>

        )
    }
}
