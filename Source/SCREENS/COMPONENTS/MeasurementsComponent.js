import React, { Component } from 'react';
import { View, Text, StatusBar, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import { Colors } from '../../COLORS/Colors';
import Language from '../../LANGUAGE/English.json';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { CommonActions } from '@react-navigation/native';
import TextInput_Field from '../COMPONENTS/TextInput_Field';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class MeasurementsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (

            <View style={{
                flexDirection: 'row',
                marginBottom: hp(2),
            }}>
                <Text style={{
                    fontSize: hp(2.2),
                    color: Colors.brown,
                    fontWeight:'600',
                    // backgroundColor: 'plum',
                    flex:1.1
                }}>{this.props.Title}</Text>

                <Text style={{
                    fontSize: hp(2.5),
                    color: Colors.brown,
                    fontWeight:'500',
                    // marginLeft: wp(3),
                    // backgroundColor: 'red',
                    flex: 1.3,
                    // textAlignVertical:'center'
                }}>{this.props.M_detail}</Text>
            </View>

        );
    }
}
