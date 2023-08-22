import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Colors } from '../../COLORS/Colors';
import Language from '../../LANGUAGE/English.json';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { CommonActions } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Home_Screen from '../HOME/Home_Screen';
import Order_List from '../HOME/Order_List';
import BookScreen from '../HOME/BookScreen';


const Tab = createMaterialBottomTabNavigator();

function Bottom_Tab() {
    return (
        <Tab.Navigator
            initialRouteName="Home_Screen"
            // activeColor="#e91e63"
            activeColor={Colors.tertiary_color}
            inactiveColor={Colors.secondary_color}
            keyboardHidesNavigationBar={true}
            barStyle={{
                // backgroundColor: 'tomato'
                backgroundColor: Colors.theme
            }}
        >
            <Tab.Screen
                name="Home_Screen"
                component={Home_Screen}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} size={26} />
                    ),
                }}
            />

            <Tab.Screen
                name="Order_List"
                component={Order_List}
                options={{
                    tabBarLabel: 'Orders',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="order-bool-ascending-variant" color={color} size={26} />
                    ),
                }}
            />

            <Tab.Screen
                name="BookScreen"
                component={BookScreen}
                options={{
                    tabBarColor:Colors.brown,
                    tabBarLabel: 'Book',
                    tabBarIcon: ({ color }) => (
                        <Entypo name="list" color={color} size={26} />
                    ),
                }}
                // style={{ backgroundColor: Colors.secondary_color,}}
            />


        </Tab.Navigator>
    )
}

export default Bottom_Tab