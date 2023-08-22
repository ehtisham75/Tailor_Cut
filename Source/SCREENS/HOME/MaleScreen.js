import React, { Component } from 'react';
import { View, Text, StatusBar, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Colors } from '../../COLORS/Colors';
import Language from '../../LANGUAGE/English.json';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { CommonActions } from '@react-navigation/native';
import TextInput_Field from '../COMPONENTS/TextInput_Field';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class MaleScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            customer_name: '',
            customer_phone: '',
            customer_adress: '',

            asset_name: '',
            kameez_length: '',
            gala: '',
            chati: '',
            tira: '',
            bazu: '',
            kaff: '',
            waist: '',
            shalwar_length: '',
            pancha: '',
            pocket: '',
            other_description: '',
            submited_date: '',
            deliever_date: '',

            Gents_Data: []
        };
    }
    componentDidMount() {
        // this.gents_Asset_Data();

        this.get_GentsData()
    }

    gents_Asset_Data = async => {
        let { Gents_Data, customer_name, customer_phone, customer_adress,
            kameez_length, gala, chati, tira, bazu, kaff, waist, deliever_date,
            shalwar_length, pocket, pancha, other_description, asset_name, submited_date, } = this.state

        if (customer_name == "") {
            alert('Enter Customer Name')
            return
        }

        if (customer_phone == "") {
            alert('Enter Customer Phone Number')
            return
        }
        if (customer_adress == "") {
            alert('Enter Customer Address')
            return
        }
        if (kameez_length == "" || chati == "" || bazu == "" || tira == "" || kaff == "") {
            alert('please fill the requirements')
            return
        }
        if (deliever_date == "") {
            alert('Must Fill Delievery Date')
            return
        }

        if (kameez_length != "" && chati != "" && bazu != "" && tira != "" && kaff != "") {
            try {
                Gents_Data.push({
                    C_Name: customer_name,
                    C_Phone: customer_phone,
                    C_Adress: customer_adress,
                    Sub_Date: submited_date,
                    Asset_Name: asset_name,
                    Kameez: kameez_length,
                    Gala: gala,
                    Chati: chati,
                    Tira: tira,
                    Bazu: bazu,
                    Kaff: kaff,
                    Waist: waist,
                    Shalwar: shalwar_length,
                    Pocket: pocket,
                    Pancha: pancha,
                    Others: other_description,
                    Delv_Date: deliever_date,
                })

                AsyncStorage.setItem('@Tailor', JSON.stringify(Gents_Data));
                alert('Data successfully saved')
                console.log('---DATA STORE SET ITEM--------->>', Gents_Data)
            }
            catch (e) {
                alert('Failed to save the data')
                console.log("error during saving daar====>", e)
            }
            // this.props.navigation.navigate('BookScreen')

            this.props.navigation.dispatch(
                CommonActions.reset({
                    index: 0,
                    routes: [
                        {
                            name: 'BookScreen',
                            //   params: {}
                        },
                    ],
                }));
        }
        else {
            alert('error occuered in saving data')
            // Toast.show({
            //   type: 'error',
            //   text1: 'Something went wrong!',
            // });
        }

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
            console.log(" =======GET ITEM ====>", StoreGentsData)
        }
        catch (e) {
            alert('Failed to fetch the data from storage')
            console.log("====Error during geting data from local===>", e)
        }
    }

    render() {
        let { customer_name, customer_phone, customer_adress,
            kameez_length, gala, chati, tira, bazu, kaff, waist, deliever_date,
            shalwar_length, pocket, pancha, other_description, asset_name, submited_date } = this.state

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
                        }}>{Language.gents}</Text>
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


                        <TextInput_Field
                            BoxHeight={hp(6)}
                            // title="Customer Address"
                            placeholder="Submitted Date"
                            TextValue={submited_date}
                            TextChanger={(text) => { this.setState({ submited_date: text }) }}
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
                            color: Colors.theme,
                            marginBottom: hp(1),
                            fontWeight: '500'
                        }}>
                            {Language.enter_customer_asset_detail}
                        </Text>

                        {/* ====================== ASSET NAME ================  */}

                        <TextInput_Field
                            BoxHeight={hp(6)}
                            // title="Length Size"
                            placeholder="Asset Name e.g:   Suit, Shirt Pant"
                            TextValue={asset_name}
                            TextChanger={(text) => { this.setState({ asset_name: text }) }}
                        />

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

                        {/* ====================== TIRA ================  */}

                        <TextInput_Field
                            BoxHeight={hp(6)}
                            // title="Collar Size"
                            placeholder="Tira"
                            TextValue={tira}
                            TextChanger={(text) => { this.setState({ tira: text }) }}
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


                        {/* ====================== Waist ================  */}

                        <TextInput_Field
                            BoxHeight={hp(6)}
                            // title="Collar Size"
                            placeholder="Waist"
                            TextValue={waist}
                            TextChanger={(text) => { this.setState({ waist: text }) }}
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

                        {/* ====================== OTHER DESCRITION ================  */}

                        <TextInput_Field
                            BoxHeight={hp(6)}
                            // title="Collar Size"
                            placeholder="Delievery Date"
                            TextValue={deliever_date}
                            TextChanger={(text) => { this.setState({ deliever_date: text }) }}
                        />

                    </View>

                    {/* ====================== Submit BUTTON ================  */}

                    <TouchableOpacity
                        onPress={() => {
                            this.gents_Asset_Data()
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
                        }}>{Language.submit}</Text>
                    </TouchableOpacity>

                </ScrollView>

                {/* </View> */}


            </View>
        );
    }
}
