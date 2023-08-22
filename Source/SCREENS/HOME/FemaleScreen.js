import React, { Component } from 'react';
import { View, Text, StatusBar, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Colors } from '../../COLORS/Colors';
import Language from '../../LANGUAGE/English.json';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { CommonActions } from '@react-navigation/native';
import TextInput_Field from '../COMPONENTS/TextInput_Field';
import Ionicons from 'react-native-vector-icons/Ionicons';


export default class FemaleScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            customer_name: '',
            customer_phone: '',
            customer_adress: '',
            
            kameez_length: '',
            gala: '',
            chati: '',
            tira: '',
            bazu: '',
            kaff: '',
            waist: '',
            shalwar_length: '',
            pancha:'',
            pocket:'',
            other_description:'',
        };
    }

    render() {
        let { customer_name, customer_phone, customer_adress, 
            kameez_length, gala, chati, tira, bazu, kaff, waist,
            shalwar_length,pocket,pancha, other_description } = this.state

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
                        }}>{Language.Ladies}</Text>
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
                            {Language.please_enter_customer_detail}
                        </Text>

                        <TextInput_Field
                            BoxHeight={hp(6)}
                            // title="Customer Name"
                            placeholder="Customer name"
                            TextValue={customer_name}
                            TextChanger={(text) => { this.setState({ customer_name: text }) }}
                        />

                        <TextInput_Field
                            BoxHeight={hp(6)}
                            // title="Customer Phone"
                            placeholder="Phone Number"
                            TextValue={customer_phone}
                            TextChanger={(text) => { this.setState({ customer_phone: text }) }}
                        />

                        <TextInput_Field
                            BoxHeight={hp(6)}
                            // title="Customer Address"
                            placeholder="Customer Address"
                            TextValue={customer_adress}
                            TextChanger={(text) => { this.setState({ customer_adress: text }) }}
                        />
                    </View>

                    {/* ================ Asset Details =================== */}

                    <View style={{
                        marginHorizontal: wp(5),
                        // backgroundColor: 'plum',
                        // marginTop: hp(2),
                    }}>
                        <Text style={{
                            fontSize: hp(2.5),
                            color: Colors.theme,
                            marginBottom: hp(2),
                            fontWeight: '500'
                        }}>
                            {Language.enter_customer_asset_detail}
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
                                height: hp(20),
                                borderWidth: 1,
                                borderColor: Colors.brown,
                                borderRadius: 10,
                                marginBottom: hp(2),
                            }}>
                            </View>

                            <TouchableOpacity style={{
                                width: wp(30),
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
                                }}>{Language.add_image}</Text>
                            </TouchableOpacity>

                        </View>

                        {/* ====================== Kameez Lenght ================  */}

                        <TextInput_Field
                            BoxHeight={hp(6)}
                            // title="Length Size"
                            placeholder="Kameez Length"
                            TextValue={kameez_length}
                            TextChanger={(text) => { this.setState({ kameez_length: text }) }}
                        />

                        {/* ====================== BAZU ================  */}

                        <TextInput_Field
                            BoxHeight={hp(6)}
                            // title="Collar Size"
                            placeholder="Bazu"
                            TextValue={bazu}
                            TextChanger={(text) => { this.setState({ bazu: text }) }}
                        />

                        {/* ====================== GALA ================  */}

                        <TextInput_Field
                            BoxHeight={hp(6)}
                            // title="Length Size"
                            placeholder="Gala"
                            TextValue={gala}
                            TextChanger={(text) => { this.setState({ gala: text }) }}
                        />

                        {/* ====================== Chest ================  */}

                        <TextInput_Field
                            BoxHeight={hp(6)}
                            // title="Collar Size"
                            placeholder="Chati"
                            TextValue={chati}
                            TextChanger={(text) => { this.setState({ chati: text }) }}
                        />

                        {/* ====================== TIRA ================  */}

                        <TextInput_Field
                            BoxHeight={hp(6)}
                            // title="Collar Size"
                            placeholder="Tira"
                            TextValue={tira}
                            TextChanger={(text) => { this.setState({ tira: text }) }}
                        />

                        {/* ====================== KAFF  ================  */}

                        <TextInput_Field
                            BoxHeight={hp(6)}
                            // title="Collar Size"
                            placeholder="Kaff"
                            TextValue={kaff}
                            TextChanger={(text) => { this.setState({ kaff: text }) }}
                        />

                        {/* ====================== SHalwaar Lenght ================  */}

                        <TextInput_Field
                            BoxHeight={hp(6)}
                            // title="Collar Size"
                            placeholder="Shalwar Length"
                            TextValue={shalwar_length}
                            TextChanger={(text) => { this.setState({ shalwar_length: text }) }}
                        />
                        
                        {/* ====================== PANCHA ================  */}

                        <TextInput_Field
                            BoxHeight={hp(6)}
                            // title="Collar Size"
                            placeholder="Pancha"
                            TextValue={pancha}
                            TextChanger={(text) => { this.setState({ pancha: text }) }}
                        />

                        {/* ====================== POCKETS ================  */}

                        <TextInput_Field
                            BoxHeight={hp(6)}
                            // title="Collar Size"
                            placeholder="Pocket"
                            TextValue={pocket}
                            TextChanger={(text) => { this.setState({ pocket: text }) }}
                        />

                        {/* ====================== OTHER DESCRITION ================  */}

                        <TextInput_Field
                            BoxHeight={hp(10)}
                            // title="Collar Size"
                            placeholder="Any other Description"
                            TextValue={other_description}
                            TextChanger={(text) => { this.setState({ other_description: text }) }}
                        />
                    </View>

                        {/* ====================== Submit BUTTON ================  */}

                    <TouchableOpacity 
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
                        }}>{Language.submit}</Text>
                    </TouchableOpacity>

                </ScrollView>

                {/* </View> */}


            </View>
        );
    }
}
