import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import { Colors } from '../../COLORS/Colors';
import Language from '../../LANGUAGE/English.json';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { CommonActions } from '@react-navigation/native';
import TextInput_Field from '../COMPONENTS/TextInput_Field';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LinearGradient from 'react-native-linear-gradient';

export default class Search_component extends Component {
  constructor(props) {
    super(props);
    this.state = {
        search:''
    };
  }

  render() {
    return (
        <View style={{
            marginHorizontal: wp(7),
            marginTop: hp(3),
            marginBottom: hp(1),
            // marginVertical: hp(3),
            flexDirection: 'row',
            borderRadius: 10,
            borderWidth: 2,
            borderColor: Colors.theme,
            alignItems: 'center',
            // paddingBottom:hp(2)
          }}>
            <MaterialIcons name="search" size={30} color={Colors.theme}
              style={{
                marginHorizontal: wp(3)
              }} />
  
            <TextInput
              placeholder={Language.search}
              placeholderTextColor={Colors.theme}
              value={this.state.search}
              onChangeText={(text) => { this.setState({ search: text }) }}
              style={{
                flex: 1,
                fontSize: hp(2.5),
                color: Colors.brown,
                borderRadius: 10,
              }}></TextInput>
          </View>
    );
  }
}
