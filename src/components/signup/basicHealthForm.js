import React, { Component } from 'react';
import {View, 
        Text,
        TextInput,
        TouchableOpacity,
        Alert,
        ScrollView
} from 'react-native';
import style from '../../styles/style';

export default class HealthForm extends Component {
   
    render () {
        const { input, parent,loginTxt,buttonStyle,signupTxt,nextButton } = style
        return (
            <View style={parent}>
                <Text style={loginTxt}>Enter Basic Health Information </Text>
                
                <TextInput 
                    style={input} 
                    placeholder='Height'
                    onChangeText={(text) => {this.height =text}}
                    value= {this.height}
                />
                <TextInput 
                    style={input} 
                    placeholder='Weight'
                    onChangeText={(text) => {this.weight =text}}
                    value= {this.weight} 
                />
                <TextInput 
                    style={input} 
                    placeholder='Blood type'
                    onChangeText={(text) => {this.dob =text}}
                    value= {this.dob}
                 />
                <TextInput 
                    style={input} 
                    placeholder='BMI' 
                    onChangeText={(text) => {this.bmi =text}}
                    value= {this.bmi}
                />
                <TextInput 
                    style={input} 
                    placeholder='Blood pressure level' 
                    onChangeText={(text) => {this.bp =text}}
                    value= {this.bp}
                />
                <TextInput 
                    style={input} 
                    placeholder='Blood Glucose level' 
                    onChangeText={(text) => {this.sugar =text}}
                    value= {this.sugar}
                />

                <TextInput 
                    style={input} 
                    placeholder='Cholesterol level' 
                    onChangeText={(text) => {this.cholesterol =text}}
                    value= {this.cholesterol}
                />

                <View>
                    <TouchableOpacity
                        style={buttonStyle} onPress = {this.regButton}>
                        <Text> Save </Text>
                    </TouchableOpacity>
               </View>
                
            </View>
        )
    };
}
