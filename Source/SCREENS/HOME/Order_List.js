import React, { Component } from 'react';
import { View, Text, StatusBar, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import { Colors } from '../../COLORS/Colors';
import Language from '../../LANGUAGE/English.json';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { CommonActions } from '@react-navigation/native';
import TextInput_Field from '../COMPONENTS/TextInput_Field';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LinearGradient from 'react-native-linear-gradient';

export default class Order_List extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    let { get_measurements } = this.state
    return (
      <View style={{
        flex: 1,
        backgroundColor: Colors.secondary_color
      }}>

        <StatusBar backgroundColor={'transparent'} translucent />



        {/* ================ HEADER =================== */}
        <View style={{
          width: wp(100),
          height: hp(11),
          backgroundColor: Colors.theme,
        }}>
          <View style={{
            flexDirection: 'row',
            marginHorizontal: wp(5),
            // backgroundColor:'plum',
            marginTop: hp(5),
            alignItems: 'center',
          }}>
            <TouchableOpacity
              onPress={() => { this.props.navigation.goBack() }}
              style={{
                // marginLeft: wp(5),
              }}>
              <Ionicons name="md-arrow-undo-sharp" size={30} color={Colors.tertiary_color} />
            </TouchableOpacity>

            <Text style={{
              fontSize: hp(2.8),
              fontWeight: '500',
              color: Colors.tertiary_color,
              marginLeft: wp(5),
            }}>{Language.order_list}</Text>
          </View>
        </View>


        {/* ====================================== */}

        <View style={{
          flex: 1
        }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              // backgroundColor: 'plum',
              marginHorizontal: wp(5),
              borderRadius: 10,
              borderWidth: 2,
              borderColor: Colors.tertiary_color,
              marginTop: hp(5),
            }}>




            <View
              style={{
                width: wp(30),
                height: hp(20),
                borderTopLeftRadius: 8,
                borderBottomLeftRadius: 8,
                // borderRadius: 10,
                backgroundColor: Colors.tertiary_color,
              }}>

              <Text style={{
                fontSize: hp(5),
                fontWeight: '500',
                marginTop: hp(4),
                textAlign: 'center',
                color: Colors.brown
              }}>5</Text>

              <Text style={{
                fontSize: hp(2.2),
                fontWeight: '500',
                // marginTop: hp(2),
                color: Colors.brown,
                textAlign: 'center',
                alignSelf: 'center',
                position: 'absolute',
                bottom: hp(2)
              }}>Aug-10-2022</Text>

            </View>


            <View style={{
              flex: 1,
              // backgroundColor: 'plum',
              marginHorizontal: wp(3),
              // height: hp(20)
            }}>

              <Text style={{
                fontSize: hp(2.2),
                fontWeight: '500',
                color: Colors.brown,
                // marginTop: hp(2),
              }}>Mohammad Ehtisham Naseer Ahmad</Text>


              <Text style={{
                fontSize: hp(2.2),
                fontWeight: '500',
                color: Colors.brown,
                marginTop: hp(1),
                // alignSelf: 'flex-end',
                // marginRight: wp(5),
              }}>03006721251</Text>

              <Text style={{
                fontSize: hp(2.2),
                fontWeight: '500',
                marginTop: hp(1),
                color: Colors.brown
              }}>Suit</Text>

            </View>

          </View>

        </View>
      </View>
    );
  }
}
