import React, { Component } from 'react';
import {View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import CustomHeader from '../../components/Header/Header';
import Icon from 'react-native-vector-icons/Ionicons';
 
export default class NotificationScreen extends Component{
constructor(props){
    super(props);

} 
     render(){
        return(
            <View> 
                <CustomHeader 
                    title="NotificationScreen"
                    openDrawer={() => this.props.navigation.openDrawer()}
                    iconName="ios-notifications-outline"
                />
                <Text> NotificationScreen </Text>
             </View>
         )
     }
}
 
NotificationScreen.navigationOptions = {
    tabBarIcon : ({tintColor, focused}) => (
        <Icon 
            name={focused ? 'ios-notifications-outline' : 'ios-notifications'}
            size={28}
            color={tintColor}
        />
            
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        },
});