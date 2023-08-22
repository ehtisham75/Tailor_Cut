import React, { Component } from 'react';
import { View, Text,Image } from 'react-native';
import { Colors } from '../../COLORS/Colors';
import Language from '../../LANGUAGE/English.json';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { CommonActions } from '@react-navigation/native';
import TextInput_Field from '../COMPONENTS/TextInput_Field';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class Logo_Screen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{
        flexDirection:'row',
        alignItems: 'center',
      }}>
        <Text style={{
          fontSize:this.props.F_SIZE,
          fontWeight:this.props.F_WEIGHT,
          color:this.props.F_COLOR
        }}>{Language.logo_first}</Text>

        <Image 
        source={this.props.IMAGE}
        style={{
          width:this.props.WIDTH,
          height:this.props.HEIGHT,
          bottom:hp(-1)
        }}/>

        <Text style={{
          fontSize:this.props.L_SIZE,
          fontWeight:this.props.L_WEIGHT,
          color:this.props.L_COLOR
        }}> {Language.logo_last}</Text>
        
      </View>
    );
  }
}
