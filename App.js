import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//--------------------------Screens----------------------->>
// import Home_Screen from './Source/SCREENS/HOME/Home_Screen';
import MaleScreen from './Source/SCREENS/HOME/MaleScreen';
import TextInput_Field from './Source/SCREENS/COMPONENTS/TextInput_Field';
import Suit_Screen from './Source/SCREENS/MALE_ASSETS/Suit_Screen';
import FemaleScreen from './Source/SCREENS/HOME/FemaleScreen';
import Bottom_Tab from './Source/SCREENS/BOTTOM_TAB/Bottom_Tab';
import Order_List from './Source/SCREENS/HOME/Order_List';
import Logo_Screen from './Source/SCREENS/COMPONENTS/Logo_Screen';
import BookScreen from './Source/SCREENS/HOME/BookScreen';
import MeasurementView from './Source/SCREENS/HOME/MeasurementView';
import EditMeasurements from './Source/SCREENS/HOME/EditMeasurements';
//---------------------- REDUX ---------->>
import { Provider } from 'react-redux'
import MyReducer from './Source/DATA/Reducers/MyReducer' 

const Stack = createNativeStackNavigator();

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Provider store={MyReducer}>

      <NavigationContainer>
      <Stack.Navigator 
      screenOptions={{
        headerShown:false,
        animation:'flip'
      }}>

        {/* <Stack.Screen name="Splash_Screen" component={Splash_Screen} /> */}
        <Stack.Screen name="Home_Screen" component={Bottom_Tab} />
        <Stack.Screen name="MaleScreen" component={MaleScreen} />
        <Stack.Screen name="FemaleScreen" component={FemaleScreen} />
        <Stack.Screen name="Order_List" component={Order_List} />
        {/* <Stack.Screen name="Suit_Screen" component={Suit_Screen} /> */}
        <Stack.Screen name="TextInput_Field" component={TextInput_Field} />
        <Stack.Screen name="Logo_Screen" component={Logo_Screen} />
        <Stack.Screen name="BookScreen" component={BookScreen} />
        <Stack.Screen name="MeasurementView" component={MeasurementView} />
        <Stack.Screen name="EditMeasurements" component={EditMeasurements} />

        
      </Stack.Navigator>
    </NavigationContainer>

    </Provider>
    );
  }
}






// https://www.youtube.com/watch?v=b1lk78EOMQI
// https://www.youtube.com/watch?v=LGA60cmltiU
























// import React, { Component } from 'react';
// import { View, Text, TouchableOpacity, TextInput, StatusBar, KeyboardAvoidingView, Keyboard, DeviceEventEmitter } from 'react-native';
// // import { createAlarm } from 'react-native-simple-alarm';
// import { Colors } from './Source_ToDo/Colors/Colors';
// import Language from './Source_ToDo/Language/English.json';
// import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import DatePicker from 'react-native-date-picker'
// import moment from "moment";
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { Toast, DURATION, POSTION } from 'rn-simple-toast';
// import Voice from '@react-native-voice/voice';
// import PushNotification from "react-native-push-notification";

// var dateIS = new Date()
// var taskDataList = [];

// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       addTask: "",
//       date: "",
//       openDate: false,
//       time: "",
//       openTime: false,
//       // voiceTextPlay:false,
//       voiceRecognized: '',
//       voiceStarted: '',
//       voiceResults: [],
//     };
//   }


//   componentDidMount() {

//     this.setState({
//       date: dateIS,
//       time: dateIS,
//     })
//     console.log('-------dateIS---', dateIS)

//     PushNotification.configure({
//       // (required) Called when a remote or local notification is opened or received
//       onNotification: function(notification) {
//         console.log('LOCAL NOTIFICATION ==>', notification)
//       },
    
//       popInitialNotification: true,
//       requestPermissions: true
//     })

//     // PushNotification.configure({
      
//     //   onNotification: function(notification) {
//     //   console.log("NOTIFICATION--------------------:", notification);
//     //   // process the notification here
//     //   // required on iOS only
//     //   notification.finish(PushNotificationIOS.FetchResult.NoData);
//     //   },
//     //   senderID: "1090501687137",
//     //   popInitialNotification: true,
//     //   requestPermissions: true
//     //   });
//   }

//   LocalNotification = () => {
//     PushNotification.localNotification({
//       autoCancel: true,
//       bigText:
//         'This is local notification demo in React Native app. Only shown, when expanded.',
//       subText: 'Local Notification Demo',
//       title: 'Local Notification Title',
//       message: 'Expand me to see more',
//       vibrate: true,
//       vibration: 300,
//       playSound: true,
//       soundName: 'default',
//       actions: '["Yes", "No"]'
//     })
//   }

//   // toastModel(){
//   //   this.toastRef.show('Task added in the List', '#646FD4', 1500);
//   // }

//   storeTaskData = async () => {
//     try {
//       // if(this.state.addTask=="" && this.state.voiceResults ==""){
//       //   this.toastRef.show('Add your task please !', 'red', 1000);
//       //   return
//       // }
//       if (this.state.date == dateIS || this.state.time == dateIS) {
//         this.toastRef.show('Must required all fields', 'red', 1000);
//         return
//       }
//       if (this.state.date < dateIS || this.state.time <= dateIS) {
//         this.toastRef.show('Please select upcoming Time', 'red', 1000);
//         return
//       }
//       taskDataList.push({
//         // newtask: this.state.addTask + this.state.voiceResults,
//         taskDate: this.state.date,
//         taskTime: this.state.time
//       })

//       AsyncStorage.setItem('@TASKLIST', JSON.stringify(taskDataList));
//       console.log('---STORING Data on Create Task SCREEN --------->>', taskDataList)
//     }
//     catch (e) {
//       alert('Failed to save the Task')
//       console.log("error during saving Task====>", e)
//     }
//     // this.textInput.clear()
//     // Keyboard.dismiss();

//     this.setState({
//       date: dateIS,
//       time: dateIS
//     })

//     // this.createAlarm();
//     // this.createEvent();
//     // this.toastModel();
//   }

//   readTaskData = async () => {
//     try {
//       let TaskCollector = [];

//       await AsyncStorage.getItem('@TASKLIST').then((UserVal) => {
//         if (UserVal) {
//           TaskCollector = JSON.parse(UserVal)
//           taskDataList = TaskCollector
//         }
//       })
//       console.log("---Task Data Reading on Create Screen--->", TaskCollector)
//     }
//     catch (e) {
//       alert('Failed to fetch the data from storage')
//       console.log("====Error during geting data from local===>", e)
//     }
//   }

//   pushNotify() {
//     PushNotification.localNotificationSchedule({

//       title: "Title",
//       message: "My Notification Message",
//       date: new Date(Date.now() + 60 * 1000), // in 60 secs
//       ticker: "My Notification Ticker", // (optional)
//       largeIcon: "ic_launcher",
//       vibrate: true, // (optional) default: true
//       vibration: 300,
//       priority: "high",
//       playSound: true, // (optional) default: true
//       soundName: "default",
//       // allowWhileIdle: false, // (optional) set notification to work while on doze, default: false
//       repeatTime: 1, // (optional) Increment of configured repeatType. Check 'Repeating Notifications' section for more info.
//     });
//   }

//   // dateModel = () => {
//   //   this.setState({
//   //     openDate: true,
//   //   })
//   // }
//   // timeModel = () => {
//   //   this.setState({
//   //     openTime: true,
//   //   })
//   // }

//   // createEvent=()=>{
//   //   const newDate = new Date((Date.now() + 60*1000));

//   //   RNCalendarEvents.saveEvent("Hello Event", {
//   //     startDate: newDate,
//   //     endDate: newDate+60*2000,
//   //   }).then((value)=>{
//   //     console.log('=======Event=====',value);
//   //   }).catch((error)=>{
//   //     console.log('========Event Error====>>',error)
//   //   })
//   // }


//   // createAlarm = async () => {
//   //   try {
//   //     await createAlarm({
//   //       active: true,
//   //       date: new Date().toISOString(),
//   //       message: 'message',
//   //       snooze: 1,
//   //     });
//   //   } catch (e) {
//   //     console.log("==-==-=-=-=-=-=-", e)
//   //   }
//   // }




//   render() {
//     return (
//       <View style={{
//         flex: 1,
//         backgroundColor: "plum",
//       }}>


//         <View style={{
//           width: wp(100),
//           // height: hp(85),
//           height: "82%",
//           bottom: 0,
//           position: 'absolute',
//           backgroundColor: Colors.secondary_color,
//           borderTopLeftRadius: 20,
//           borderTopRightRadius: 20
//         }}>

//           <View style={{
//             marginTop: hp(5),
//             justifyContent: 'center',
//             alignItems: 'center',
//             marginHorizontal: wp(14),
//             width: "72%",
//           }}>
//             {/* <Text style={{
//                 fontSize: hp(2.5),
//                 fontWeight: '500',
//                 alignSelf: 'flex-start',
//                 color: Colors.gray,
//                 marginBottom: hp(1),
//                 marginLeft: wp(2),
//               }}>{Language.Task}</Text> */}

//             {/* <View style={{
//                 flexDirection: 'row',
//                 width: wp(70),
//                 height: hp(8),
//                 borderColor: Colors.gray,
//                 borderWidth: 1.5,
//                 borderRadius: 15,
//               }}>
                
//                 <TextInput
//                   placeholder={Language.addtask}
//                   placeholderTextColor={Colors.gray}
//                   value={this.state.addTask + this.state.voiceResults}
//                   onChangeText={(tsk) => this.setState({ addTask: tsk })}
//                   ref={input => { this.textInput = input }}
//                   style={{
//                     paddingLeft: wp(5),
//                     color: Colors.gray,
//                     flex:1
//                   }}>    
//                 </TextInput>

//                 <TouchableOpacity 
//                   onPress={this._startRecognition.bind(this)}
//                   style={{
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                   paddingHorizontal:wp(2)
//                 }}>
//                   <Ionicons name="mic" size={22} color={Colors.gray} />
//                 </TouchableOpacity>
//               </View> */}

//             {/* Date Time */}
//             <View style={{
//               flexDirection: 'row',
//               justifyContent: 'space-between',
//               width: wp(72),
//               marginTop: hp(2),
//             }}>
//               <View>
//                 <Text style={{
//                   fontSize: hp(2.5),
//                   fontWeight: '500',
//                   alignSelf: 'flex-start',
//                   color: Colors.gray,
//                   marginBottom: hp(1),
//                   marginLeft: wp(2),
//                 }}>{Language.date}</Text>

//                 <TouchableOpacity
//                   activeOpacity={0.5}
//                   onPress={() => this.dateModel()}
//                   style={{
//                     width: wp(33),
//                     height: hp(8),
//                     borderColor: Colors.gray,
//                     borderWidth: 1.5,
//                     borderRadius: 15,
//                     // alignItems: 'center',
//                     justifyContent: 'center',
//                   }}>
//                   <Text
//                     style={{
//                       fontSize: hp(2.2),
//                       paddingLeft: wp(5),
//                       color: Colors.gray
//                     }}>{this.state.date == dateIS ? "Date" : this.state.date}

//                   </Text>
//                 </TouchableOpacity>

//                 {
//                   this.state.openDate &&
//                   <DatePicker
//                     mode='date'
//                     modal
//                     open={this.state.openDate}
//                     date={dateIS}
//                     onConfirm={(dat) => {
//                       this.setState({
//                         // date: moment(dat).format("DD-MM-YYYY"),
//                         date: moment(dat).format("ll"),
//                         openDate: false,
//                       })
//                       console.log('----------selected Date-------', this.state.date)
//                     }}
//                     onCancel={() => {
//                       this.setState({
//                         openDate: false
//                       })
//                     }}
//                   />
//                 }
//               </View>

//               <View>
//                 <Text style={{
//                   fontSize: hp(2.5),
//                   fontWeight: '500',
//                   alignSelf: 'flex-start',
//                   color: Colors.gray,
//                   marginBottom: hp(1),
//                   marginLeft: wp(2),
//                 }}>{Language.time}</Text>

//                 <TouchableOpacity
//                   activeOpacity={0.5}
//                   onPress={() => this.timeModel()}
//                   style={{
//                     width: wp(33),
//                     height: hp(8),
//                     borderColor: Colors.gray,
//                     borderWidth: 1.5,
//                     borderRadius: 15,
//                     // alignItems: 'center',
//                     justifyContent: 'center',
//                   }}>
//                   <Text
//                     style={{
//                       fontSize: hp(2.2),
//                       paddingLeft: wp(5),
//                       color: Colors.gray
//                     }}>{this.state.time == dateIS ? "Time" : this.state.time}

//                   </Text>
//                 </TouchableOpacity>

//                 {this.state.openTime &&
//                   <DatePicker
//                     mode='time'
//                     modal
//                     open={this.state.openTime}
//                     date={new Date()}
//                     onConfirm={(tim) => {
//                       this.setState({
//                         // date: moment(dat).format("DD-MM-YYYY"),
//                         time: moment(tim).format('LT'),
//                         openTime: false,
//                       })
//                       console.log('----------selected Time-------', this.state.time)
//                     }}
//                     onCancel={() => {
//                       this.setState({
//                         openTime: false
//                       })
//                     }}
//                   />
//                 }
//               </View>
//             </View>

//             {/* Cancle, Done Buttons */}
//             <View style={{
//               flexDirection: 'row',
//               justifyContent: 'space-between',
//               width: wp(72),
//               marginTop: hp(6),
//             }}>
//               <TouchableOpacity
//                 activeOpacity={0.5}
//                 onPress={() => this.props.navigation.goBack()}
//                 style={{
//                   width: wp(33),
//                   height: hp(8),
//                   backgroundColor: Colors.primary_color,
//                   borderRadius: 15,
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                 }}>
//                 <Text style={{
//                   fontSize: hp(2.2),
//                   fontWeight: '500',
//                   color: Colors.white_text
//                 }}>{Language.cancel}
//                 </Text>
//               </TouchableOpacity>

//               <TouchableOpacity
//                 activeOpacity={0.5}
//                 // onPress={() => this.storeTaskData()}
//                 onPress={() => this.LocalNotification()}
//                 style={{
//                   width: wp(33),
//                   height: hp(8),
//                   backgroundColor: Colors.primary_color,
//                   borderRadius: 15,
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                 }}>
//                 <Text style={{
//                   fontSize: hp(2.2),
//                   fontWeight: '500',
//                   color: Colors.white_text
//                 }}>{Language.done}
//                 </Text>
//               </TouchableOpacity>
//             </View>
//           </View>


//         </View>


//       </View>
//     );
//   }
// }