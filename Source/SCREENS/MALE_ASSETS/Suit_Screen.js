// import React, { Component } from 'react';
// import { View, Text, StatusBar, Image, TouchableOpacity } from 'react-native';
// import { Colors } from '../../COLORS/Colors';
// import Language from '../../LANGUAGE/English.json';
// import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
// import { CommonActions } from '@react-navigation/native';
// import TextInput_Field from '../COMPONENTS/TextInput_Field';
// import Ionicons from 'react-native-vector-icons/Ionicons';


// export default class Suit_Screen extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             customer_name: '',
//             customer_phone: '',
//             customer_adress: '',
//             length: '',
//             collar: '',
//             chest: '',
//             shoulder: '',
//             arm: '',
//             kaff: '',
//             waist: '',
//         };
//     }

//     render() {
//         let { customer_name, customer_phone, customer_adress, length, collar, chest, shoulder, arm, kaff, waist } = this.state
//         return (
//             <View style={{
//                 flex: 1
//             }}>

//                 <StatusBar backgroundColor={'transparent'} translucent />

//                 {/* ================ HEADER =================== */}
//                 <View style={{
//                     width: wp(100),
//                     height: hp(11),
//                     backgroundColor: Colors.theme,
//                 }}>
//                     <View style={{
//                         flexDirection: 'row',
//                         marginHorizontal: wp(5),
//                         // backgroundColor:'plum',
//                         marginTop: hp(5),
//                         alignItems: 'center',
//                     }}>
//                         <TouchableOpacity
//                             onPress={() => { this.props.navigation.goBack() }}
//                             style={{
//                                 // marginLeft: wp(5),
//                             }}>
//                             <Ionicons name="md-arrow-undo-sharp" size={30} color={Colors.tertiary_color} />
//                         </TouchableOpacity>

//                         <Text style={{
//                             fontSize: hp(3),
//                             fontWeight: '500',
//                             color: Colors.tertiary_color,
//                             marginLeft: wp(10),
//                         }}>SUIT</Text>
//                     </View>
//                 </View>

//                 {/* ================ Customer Details =================== */}

//                 <View style={{
//                     marginHorizontal: wp(5),
//                     // backgroundColor: 'plum',
//                     marginTop: hp(2),
//                 }}>
//                     <Text style={{
//                         fontSize: hp(2),
//                         color: Colors.theme,
//                         marginBottom: hp(2),
//                     }}>
//                         {Language.please_enter_customer_detail}
//                     </Text>

//                     <TextInput_Field
//                         title="Customer Name"
//                         placeholder="Customer name"
//                         TextValue={customer_name}
//                         TextChanger={(text) => { this.setState({ customer_name: text }) }}
//                     />

//                     <TextInput_Field
//                         title="Customer Phone"
//                         placeholder="Phone Number"
//                         TextValue={customer_phone}
//                         TextChanger={(text) => { this.setState({ customer_phone: text }) }}
//                     />

//                     <TextInput_Field
//                         title="Customer Address"
//                         placeholder="Address"
//                         TextValue={customer_adress}
//                         TextChanger={(text) => { this.setState({ customer_adress: text }) }}
//                     />
//                 </View>

//                 {/* ================ Asset Details =================== */}

//                 <View style={{
//                     marginHorizontal: wp(5),
//                     // backgroundColor: 'plum',
//                     // marginTop: hp(2),
//                 }}>
//                     <Text style={{
//                         fontSize: hp(2),
//                         color: Colors.theme,
//                         marginBottom: hp(2),
//                     }}>
//                         {Language.enter_customer_asset_detail}
//                     </Text>

//                     <TextInput_Field
//                         title="Length Size"
//                         placeholder="Enter Length"
//                         TextValue={length}
//                         TextChanger={(text) => { this.setState({ length: text }) }}
//                     />

//                     <TextInput_Field
//                         title="Collar Size"
//                         placeholder="Enter Collar"
//                         TextValue={collar}
//                         TextChanger={(text) => { this.setState({ collar: text }) }}
//                     />

//                     <TextInput_Field
//                         title="Length Size"
//                         placeholder="Enter Length"
//                         TextValue={length}
//                         TextChanger={(text) => { this.setState({ length: text }) }}
//                     />

//                     <TextInput_Field
//                         title="Collar Size"
//                         placeholder="Enter Collar"
//                         TextValue={collar}
//                         TextChanger={(text) => { this.setState({ collar: text }) }}
//                     />
//                 </View>



//             </View>
//         );
//     }
// }
