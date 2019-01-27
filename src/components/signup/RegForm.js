import React, { Component } from 'react';
import {View, 
        Text,
        TextInput,
        TouchableOpacity,
} from 'react-native';

import style from '../../styles/style';

export default class RegForm extends Component {
  
    
    render () {
        
        const { input, parent,loginTxt,buttonStyle,signupTxt,nextButton } = style
        return (
            <View style={parent}>
                <Text style={loginTxt}>Enter Basic Information </Text>
                <TextInput 
                    style={input} 
                    placeholder='Enter Name'
                    onChangeText={(text) => {this.name =text}}
                    value= {this.name}
                />
                <TextInput 
                    style={input} 
                    placeholder='Enter NIC'
                    onChangeText={(text) => {this.nic =text}}
                    value= {this.nic} 
                />
                <TextInput 
                    style={input} 
                    placeholder='Enter Date of Birth'
                    onChangeText={(text) => {this.dob =text}}
                    value= {this.dob}
                 />
                <TextInput 
                    style={input} 
                    placeholder='Enter Address' 
                    onChangeText={(text) => {this.addr =text}}
                    value= {this.addr}
                />
                <TextInput 
                    style={input} 
                    placeholder='Enter email' 
                    onChangeText={(text) => {this.email =text}}
                    value= {this.email}
                />
                <TextInput 
                    style={input} 
                    placeholder='Enter mobile number' 
                    onChangeText={(text) => {this.mobile =text}}
                    value= {this.mobile}
                />

               {/*<TouchableOpacity
                    style={buttonStyle} onPress= {this.profile}>
                    <Text> View Profile </Text>
               </TouchableOpacity>*/}

                <View>
                    <TouchableOpacity
                        style={buttonStyle} onPress = {this.regButton}>
                        <Text> Register </Text>
                    </TouchableOpacity>

                {/* <ScrollView>
                        {dataDisplay}
                </ScrollView>*/}
               </View>
                
            </View>
        )
    };
}
