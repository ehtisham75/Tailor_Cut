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
import MeasurementsComponent from '../COMPONENTS/MeasurementsComponent';

export default class MeasurementView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            get_measurements: this.props.route.params?.measurements
        };
    }
    componentDidMount() {
        console.log('----------measurement detail ------', this.state.get_measurements)
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
                        }}>{Language.measurement_details}</Text>
                    </View>
                </View>


                {/* ====================================== */}

                <ScrollView
                    showsVerticalScrollIndicator={false}
                    style={{
                        flex:1,
                    }}>

                    <View style={{
                        marginTop: hp(3),
                        // backgroundColor: 'skyblue',
                        marginHorizontal: wp(5),
                    }}>
                        <MeasurementsComponent
                            Title={Language.Customer_name}
                            M_detail={get_measurements.C_Name}
                        />

                        <MeasurementsComponent
                            Title={Language.Customer_phone}
                            M_detail={get_measurements.C_Phone}
                        />

                        <MeasurementsComponent
                            Title={Language.Customer_address}
                            M_detail={get_measurements.C_Adress}
                        />

                        <MeasurementsComponent
                            Title={Language.asset_name}
                            M_detail={get_measurements.Asset_Name}
                        />

                        <MeasurementsComponent
                            Title={Language.submitted_date}
                            M_detail={get_measurements.Sub_Date}
                        />

                        <MeasurementsComponent
                            Title={Language.kameez}
                            M_detail={get_measurements.Kameez}
                        />

                        <MeasurementsComponent
                            Title={Language.bazu}
                            M_detail={get_measurements.Bazu}
                        />

                        <MeasurementsComponent
                            Title={Language.tira}
                            M_detail={get_measurements.Tira}
                        />

                        <MeasurementsComponent
                            Title={Language.Chest}
                            M_detail={get_measurements.Chati}
                        />

                        <MeasurementsComponent
                            Title={Language.waist}
                            M_detail={get_measurements.Waist}
                        />

                        <MeasurementsComponent
                            Title={Language.shalwar}
                            M_detail={get_measurements.Shalwar}
                        />

                        <MeasurementsComponent
                            Title={Language.pancha}
                            M_detail={get_measurements.Pancha}
                        />

                        <MeasurementsComponent
                            Title={Language.pocket}
                            M_detail={get_measurements.Pocket}
                        />

                        <MeasurementsComponent
                            Title={Language.other_descp}
                            M_detail={get_measurements.Others}
                        />

                        <MeasurementsComponent
                            Title={Language.deliever_date}
                            M_detail={get_measurements.Delv_Date}
                        />


                    </View>


                </ScrollView>

                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-evenly',
                    width:wp(100),
                    paddingVertical:hp(2)
                }}>
                    {/* ===================== DELETE BUTTON ================== */}
                    <TouchableOpacity
                        // onPress={() => {
                        //     this.props.navigation.navigate('EditMeasurements', {
                        //         Edit_measurements: get_measurements
                        //     })
                        // }}
                        activeOpacity={0.5}
                        style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: wp(40),
                            height: hp(6),
                            backgroundColor: Colors.tertiary_color,
                            borderRadius: 10,
                            alignSelf: 'center',
                            // marginTop: hp(5),
                        }}>
                        <Text style={{
                            fontSize: hp(2.5),
                            color: Colors.brown
                        }}>{Language.delete}</Text>
                    </TouchableOpacity>

                    {/* ===================== EDIT BUTTON ================== */}
                    <TouchableOpacity
                        onPress={() => {
                            this.props.navigation.navigate('EditMeasurements', {
                                Edit_measurements: get_measurements
                            })
                        }}
                        activeOpacity={0.5}
                        style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: wp(40),
                            height: hp(6),
                            backgroundColor: Colors.tertiary_color,
                            borderRadius: 10,
                            alignSelf: 'center',
                            // marginTop: hp(5),
                        }}>
                        <Text style={{
                            fontSize: hp(2.5),
                            color: Colors.brown
                        }}>{Language.edit}</Text>
                    </TouchableOpacity>

                </View>



            </View>
        );
    }
}
