import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import { Colors } from '../../COLORS/Colors';
import Language from '../../LANGUAGE/English.json';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default class TextInput_Field extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    return (
      <View>

        <View style={{
            // backgroundColor: 'plum',
            // marginTop: hp(5),
            marginBottom: hp(2),
        }}>
        {/* <Text style={{
            fontSize:hp(2.4),
            color:Colors.brown,
            fontWeight:'500',
            marginLeft: wp(2),
        }}>{this.props.title} </Text> */}

        <TextInput 
        placeholder={this.props.placeholder}
        placeholderTextColor={Colors.brown}
        value={this.props.TextValue}
        onChangeText={this.props.TextChanger}
        // onChangeText={(text)=>{this.props.TextChanger(text)}}
        style={{
            // backgroundColor: Colors.tertiary_color,
            borderWidth:1,
            borderColor:Colors.brown,
            borderRadius:10,
            marginTop: hp(0.5),
            paddingHorizontal:wp(5),
            fontSize: hp(2),
            height:this.props.BoxHeight,
            color: Colors.theme
        }}></TextInput>
        </View>
      </View>
    );
  }
}
