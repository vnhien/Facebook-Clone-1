import React, { Component } from "react";
import { responsiveFontSize, responsiveHeight } from 'react-native-responsive-dimensions'
import { AsyncStorage, View, ScrollView, StyleSheet, StatusBar } from "react-native";
import { FontAwesome5, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import MessengerHome from '../screens/MessengerHome';
import Feed from '../screens/Feed';
import Watch from '../screens/Watch';
import Notification from '../screens/Notification';
import Friends from '../screens/Friends';
import Profile from '../screens/Profile';
import Settings from '../screens/Settings';


const Tab = createMaterialTopTabNavigator();

const HomeTab = ({userId,userPhonenumber, userAvatar}) => {
    useEffect(() => {
        console.log(userId)
    }, []);    
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color }) => {
                    if (route.name == "Feed") {
                        return (<MaterialCommunityIcons color={color} name="chat" size={responsiveFontSize(2.8)}/>)
                    } else if (route.name == 'Friends') {
                        return (<MaterialIcons color={color} name="people" size={responsiveFontSize(2.8)}/>)
                    } else if (route.name == 'Watch') {
                        return (<MaterialIcons color={color} name="ondemand-video" size={responsiveFontSize(2.8)} />)
                    } else if (route.name == 'Profile') {
                        return (<MaterialIcons color={color} name="account-circle" size={responsiveFontSize(2.8)} />)
                    } else if (route.name == 'Notification') {
                        return (<MaterialIcons color={color} name="notifications" size={responsiveFontSize(2.8)} />)
                    }  else if (route.name == 'Settings') {
                        return (<MaterialIcons color={color} name="menu" size={responsiveFontSize(2.8)} />)
                    }
                }
            })}
            tabBarOptions={
                {
                    showIcon: true,
                    showLabel: false,
                    inactiveTintColor: 'rgba(211,211,211,0.8)',
                    activeTintColor: '#0078FF',
                    style: {
                        height: responsiveHeight(7)
                    },
                    tabStyle: {
                        padding: 5
                    },
                    labelStyle: {
                        fontSize: responsiveFontSize(1.5)
                    }
                }
            }
        >
            <Tab.Screen
                name="Feed"
                options={{ title: "Feed" }}
                component= {Feed}
                userId={userId}
                userAvatar={userAvatar}
                userPhonenumber={userPhonenumber}
            />
            <Tab.Screen
                name="Friends"
                component={Friends}
                options={{ tabBarLabel: 'Friends' }}
            />
            <Tab.Screen
                name="Watch"
                component={Watch}
                options={{ tabBarLabel: 'Watch' }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{ tabBarLabel: 'Profile' }}
            />
            <Tab.Screen
                name="Notification"
                component={Notification}
                options={{ tabBarLabel: 'Notification' }}
            />
            <Tab.Screen
                name="Settings"
                component={Settings}
                options={{ tabBarLabel: 'Settings' }}
            />
        </Tab.Navigator>
    );
}

export default HomeTab;

const styles = StyleSheet.create({

});
