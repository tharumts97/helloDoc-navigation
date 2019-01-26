import React, { Component } from 'react';
import {View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import CustomHeader from '../../components/Header/Header';
import Icon from 'react-native-vector-icons/Ionicons';
 
export default class ChatScreen extends Component{
constructor(props){
    super(props);

} 
     render(){
        return(
            <View> 
                <CustomHeader 
                    title="ChatScreen"
                    openDrawer={() => this.props.navigation.openDrawer()}
                    iconName="md-phone-portrait"
                />
                <Text> ChatScreen </Text>
             </View>
         )
     }
}
 



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        },
});

ChatScreen.navigationOptions = {
    tabBarIcon : ({tintColor, focused}) => (
        <Icon 
            name={focused ? 'md-phone-portrait' : 'ios-phone-portrait'}
            size={28}
            color={tintColor}
        />
            
    )
}