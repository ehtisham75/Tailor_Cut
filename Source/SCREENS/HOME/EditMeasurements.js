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
            get_measurements: this.props.route.params?.Edit_measurements
        };
    }
    componentDidMount() {
        console.log('------->>>>>>>>>>>>>>>>>>', this.state.get_measurements)
        // this.gents_Asset_Data();

        // this.get_GentsData()
    }


    render() {
        let {get_measurements } = this.state

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
                        }}>{Language.edit_details}</Text>
                    </View>
                </View>

                {/* <View> */}

                <ScrollView
                    showsVerticalScrollIndicator={false}>

                    {/* ================ Customer Details =================== */}

                    <View style={{
                        marginHorizontal: wp(5),
                        // backgroundColor: 'plum',
                        marginTop: hp(2),
                    }}>
                        <Text style={{
                            fontSize: hp(2.5),
                            color: Colors.brown,
                            marginBottom: hp(2),
                            fontWeight: '500'
                        }}>
                            {Language.customer_detail}
                        </Text>

                        <TextInput_Field
                            BoxHeight={hp(6)}
                            // title="Customer Name"
                            placeholder="Customer name"
                            TextValue={get_measurements.C_Name}
                            TextChanger={(text) => { this.setState({ customer_name: text }) }}
                        />

                        <TextInput_Field
                            BoxHeight={hp(6)}
                            // title="Customer Phone"
                            placeholder="Phone Number"
                            TextValue={get_measurements.C_Phone}
                            TextChanger={(text) => { this.setState({ customer_phone: text }) }}
                        />

                        <TextInput_Field
                            BoxHeight={hp(6)}
                            // title="Customer Address"
                            placeholder="Customer Address"
                            TextValue={get_measurements.C_Adress}
                            TextChanger={(text) => { this.setState({ customer_adress: text }) }}
                        />
                    </View>

                    {/* ================ Asset Details =================== */}

                    <View style={{
                        marginHorizontal: wp(5),
                        // backgroundColor: 'plum',
                        marginTop: hp(3),
                    }}>
                        <Text style={{
                            fontSize: hp(2.5),
                            color: Colors.brown,
                            marginBottom: hp(1),
                            fontWeight: '500'
                        }}>
                            {Language.customer_asset_detail}
                        </Text>

                        {/* =========================ASSET IMAGE========================= */}

                        <View>

                            <Text style={{
                                fontSize: hp(2.2),
                                color: Colors.brown,
                                fontWeight: '500',
                                marginLeft: wp(3),
                            }}>{Language.asset_image}</Text>

                            <View style={{
                                height: hp(24),
                                borderWidth: 1,
                                borderColor: Colors.brown,
                                borderRadius: 10,
                                marginBottom: hp(2),
                                marginTop: hp(0.5),
                            }}>
                            </View>

                            <TouchableOpacity style={{
                                // width: wp(30),
                                paddingHorizontal: wp(5),
                                height: hp(5),
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: 10,
                                backgroundColor: Colors.tertiary_color,
                                top: hp(-1),
                                alignSelf: 'flex-end',
                            }}>
                                <Text style={{
                                    fontSize: hp(2),
                                    fontWeight: '400',
                                    color: Colors.brown
                                }}>{Language.change_image}</Text>
                            </TouchableOpacity>

                        </View>

                        {/* ====================== Kameez Lenght ================  */}

                        <TextInput_Field
                            BoxHeight={hp(6)}
                            // title="Length Size"
                            placeholder="Kameez Length"
                            TextValue={get_measurements.Kameez}
                            TextChanger={(text) => { this.setState({ kameez_length: text }) }}
                        />
                        
                        {/* ====================== TIRA ================  */}

                        <TextInput_Field
                            BoxHeight={hp(6)}
                            // title="Collar Size"
                            placeholder="Tira"
                            TextValue={get_measurements.Tira}
                            TextChanger={(text) => { this.setState({ tira: text }) }}
                        />

                        {/* ====================== BAZU ================  */}

                        <TextInput_Field
                            BoxHeight={hp(6)}
                            // title="Collar Size"
                            placeholder="Bazu"
                            TextValue={get_measurements.Bazu}
                            TextChanger={(text) => { this.setState({ bazu: text }) }}
                        />

                        {/* ====================== GALA ================  */}

                        <TextInput_Field
                            BoxHeight={hp(6)}
                            // title="Length Size"
                            placeholder="Gala"
                            TextValue={get_measurements.Gala}
                            TextChanger={(text) => { this.setState({ gala: text }) }}
                        />

                        {/* ====================== Chest ================  */}

                        <TextInput_Field
                            BoxHeight={hp(6)}
                            // title="Collar Size"
                            placeholder="Chati"
                            TextValue={get_measurements.Chati}
                            TextChanger={(text) => { this.setState({ chati: text }) }}
                        />

                        
                        {/* ====================== Waist ================  */}

                        <TextInput_Field
                            BoxHeight={hp(6)}
                            // title="Collar Size"
                            placeholder="Waist"
                            TextValue={get_measurements.Waist}
                            TextChanger={(text) => { this.setState({ waist: text }) }}
                        />


                        {/* ====================== KAFF  ================  */}

                        <TextInput_Field
                            BoxHeight={hp(6)}
                            // title="Collar Size"
                            placeholder="Kaff"
                            TextValue={get_measurements.Kaff}
                            TextChanger={(text) => { this.setState({ kaff: text }) }}
                        />

                        {/* ====================== SHalwaar Lenght ================  */}

                        <TextInput_Field
                            BoxHeight={hp(6)}
                            // title="Collar Size"
                            placeholder="Shalwar Length"
                            TextValue={get_measurements.Shalwar}
                            TextChanger={(text) => { this.setState({ shalwar_length: text }) }}
                        />

                        {/* ====================== PANCHA ================  */}

                        <TextInput_Field
                            BoxHeight={hp(6)}
                            // title="Collar Size"
                            placeholder="Pancha"
                            TextValue={get_measurements.Pancha}
                            TextChanger={(text) => { this.setState({ pancha: text }) }}
                        />

                        {/* ====================== POCKETS ================  */}

                        <TextInput_Field
                            BoxHeight={hp(6)}
                            // title="Collar Size"
                            placeholder="Pocket"
                            TextValue={get_measurements.Pocket}
                            TextChanger={(text) => { this.setState({ pocket: text }) }}
                        />

                        {/* ====================== OTHER DESCRITION ================  */}

                        <TextInput_Field
                            BoxHeight={hp(10)}
                            // title="Collar Size"
                            placeholder="Any other Description"
                            TextValue={get_measurements.Others}
                            TextChanger={(text) => { this.setState({ other_description: text }) }}
                        />
                    </View>

                    {/* ====================== Submit BUTTON ================  */}

                    <TouchableOpacity
                        onPress={() => {
                           
                        }}
                        activeOpacity={0.5}
                        style={{
                            width: wp(60),
                            height: hp(6),
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 10,
                            backgroundColor: Colors.tertiary_color,
                            // top: hp(-1),
                            alignSelf: 'center',
                            marginTop: hp(2),
                            marginBottom: hp(3),
                        }}>
                        <Text style={{
                            fontSize: hp(2),
                            fontWeight: '400',
                            color: Colors.brown
                        }}>{Language.update}</Text>
                    </TouchableOpacity>

                </ScrollView>

                {/* </View> */}


            </View>
        );
    }
}