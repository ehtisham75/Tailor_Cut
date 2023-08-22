import React, { Component } from 'react';
import { View, Text, StatusBar, Image, TouchableOpacity } from 'react-native';
import { Colors } from '../../COLORS/Colors';
import Language from '../../LANGUAGE/English.json';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { CommonActions } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Logo_Screen from '../COMPONENTS/Logo_Screen';



export default class Home_Screen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={{
                flex: 1,
                backgroundColor: Colors.secondary_color,
            }}>

                <StatusBar backgroundColor={'transparent'} translucent />

                <View style={{
                    width: wp(100),
                    height: hp(11),
                    backgroundColor: Colors.theme,
                }}>
                    <View style={{
                        marginTop: hp(5),
                        marginLeft: wp(5),
                    }}>
                    <Logo_Screen
                        F_SIZE={hp(2)}
                        F_WEIGHT="600"
                        F_COLOR={Colors.tertiary_color}
                        IMAGE={require('../../ASSETS/Images/topIcon.png')}
                        WIDTH={hp(4)}
                        HEIGHT={hp(4)}
                        L_SIZE={hp(2)}
                        L_WEIGHT="600"
                        L_COLOR={Colors.tertiary_color}
                    />
                    </View>
                </View>

                <View style={{
                    marginTop: hp(10),
                    marginHorizontal: wp(5),
                }}>
                    <Text style={{
                        fontSize: hp(3),
                        color: Colors.brown,
                    }}>{Language.please_selet_gender}</Text>

                    {/* -----Male---- */}
                    <TouchableOpacity
                        onPress={() => { this.props.navigation.navigate('MaleScreen') }}
                        activeOpacity={0.5}
                        style={{
                            width: wp(40),
                            height: hp(20),
                            backgroundColor: Colors.tertiary_color,
                            borderRadius: 15,
                            alignItems: 'center',
                            justifyContent: 'center',
                            alignSelf: 'center',
                            marginTop: hp(5),
                        }}>
                        <Image
                            source={require('../../ASSETS/Images/male.png')}
                            style={{
                                width: hp(12),
                                height: hp(12)
                            }}></Image>

                        <Text style={{
                            fontSize: hp(2.5),
                            color: Colors.brown,
                            fontWeight: '600',
                            marginTop: hp(1),
                        }}>{Language.gents}</Text>
                    </TouchableOpacity>

                    {/* -----FeMale---- */}
                    <TouchableOpacity
                        onPress={() => { this.props.navigation.navigate('FemaleScreen') }}

                        activeOpacity={0.5}
                        style={{
                            width: wp(40),
                            height: hp(20),
                            backgroundColor: Colors.tertiary_color,
                            borderRadius: 15,
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginTop: hp(5),
                            alignSelf: 'center',
                        }}>
                        <Image
                            source={require('../../ASSETS/Images/female.png')}
                            style={{
                                width: hp(12),
                                height: hp(12)
                            }}></Image>

                        <Text style={{
                            fontSize: hp(2.5),
                            color: Colors.brown,
                            fontWeight: '600',
                            marginTop: hp(1),
                        }}>{Language.Ladies}</Text>
                    </TouchableOpacity>

                </View>

            </View>
        );
    }
}
