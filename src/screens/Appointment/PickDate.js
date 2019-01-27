import React, { Component } from 'react';
//import react in our code. 
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
//import all the components we are going to use.
import DatePicker from 'react-native-datepicker';
import CustomHeader from '../../components/Header/Header';



export default class PickDate extends Component {

    constructor(props) {
        super(props)
        //set value in state for initial date
        this.state = { date: "15-05-2018" }
    }

    picktimeHandler = () => {
        this.props.navigation.navigate('PickTimeApp')
    }

    render() {
        return (
            <View>
                <CustomHeader 
                    title="Pick Date"
                    leftPress={() => this.props.navigation.goBack()}
                    iconNameRight="md-git-network"
                    iconName="arrow-round-back"
                    type="sub"
                />
                <DatePicker
                    style={styles.container}
                    date={this.state.date} //initial date from state
                    mode="date" //The enum of date, datetime and time
                    placeholder="select date"
                    format="DD-MM-YYYY"
                    minDate="01-01-2018"
                    maxDate="01-01-2020"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"


                    customStyles={{
                        dateIcon: {
                            position: 'absolute',
                            left: 0,
                            top: 4,
                            marginLeft: 0,
                        },
                        dateInput: {
                            marginLeft: 36
                        }
                    }}
                    onDateChange={(date) => { this.setState({ date: date }) }}


                />
                <View>
                <TouchableOpacity onPress={this.picktimeHandler} style={styles.button}>
                    <Text style={styles.buttonText}>Time Slots</Text>
                </TouchableOpacity>
                </View>

            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        alignItems: 'center',
        marginLeft:30,
        marginTop:200,
        width:300
    },
    test: {
        color: '#ffffff',
        fontSize: 25,
    },
    button: {
        backgroundColor: '#1c313a',
        width: 250,
        borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 12,
        marginTop:200,
        marginLeft:40



    },


    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#ffffff',
        textAlign: 'center'
    }
});