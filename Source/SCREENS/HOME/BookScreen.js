import React, { Component } from 'react';
import { View, Text, StatusBar, TouchableOpacity, ScrollView, FlatList, TextInput } from 'react-native';
import { Colors } from '../../COLORS/Colors';
import Language from '../../LANGUAGE/English.json';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { CommonActions } from '@react-navigation/native';
import TextInput_Field from '../COMPONENTS/TextInput_Field';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LinearGradient from 'react-native-linear-gradient';
import Search_component from '../COMPONENTS/Search_component';


export default class BookScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Gents_Data: [],
    };
  }
  componentDidMount() {
    this.get_GentsData();
  }

  get_GentsData = async () => {
    try {
      let StoreGentsData = [];

      await AsyncStorage.getItem('@Tailor').then((UserVal) => {
        if (UserVal) {
          StoreGentsData = JSON.parse(UserVal)
          this.setState({
            Gents_Data: StoreGentsData
          })
        }
      })
      console.log(" =======GET ITEM on BOOK SCREEN====>", StoreGentsData)
    }
    catch (e) {
      alert('Failed to fetch the data from storage')
      console.log("====Error during geting data from local===>", e)
    }
  }

  render() {
    const { Gents_Data,search } = this.state
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
              fontSize: hp(3),
              fontWeight: '500',
              color: Colors.tertiary_color,
              marginLeft: wp(10),
            }}>{Language.book}</Text>
          </View>
        </View>


        {/* ============================================= */}

        {/* <LinearGradient
          start={{ x: 1, y: 0 }} end={{ x: 0, y: 1 }}
          colors={[Colors.theme, '#3b5998', Colors.tertiary_color,]}
          style={{
            flex: 1
          }}> */}


        {/* =================== SEARCH ==================== */}

       <Search_component />

        {/* ====================FLAT LIST ======================= */}
        <FlatList
          showsVerticalScrollIndicator={false}
          data={Gents_Data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => {
            return <TouchableOpacity

              onPress={() => {
                this.props.navigation.navigate('MeasurementView', {
                  measurements: item
                })
              }}
              activeOpacity={0.5}
              style={{
                marginHorizontal: wp(7),
                backgroundColor: Colors.tertiary_color,
                borderRadius: 10,
                marginBottom: hp(2),
                paddingVertical: hp(1)
              }}>
              <Text style={{
                fontSize: hp(3),
                color: Colors.brown,
                marginHorizontal: wp(5),
                // paddingTop: hp(1)
              }}
                numberOfLines={1}>{item.C_Name}</Text>

              <Text style={{
                fontSize: hp(2),
                color: Colors.brown,
                marginLeft: wp(5)
              }}>{item.C_Phone}</Text>
            </TouchableOpacity>

          }}
        />


      </View>
    );
  }
}
