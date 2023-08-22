import React, { Component } from 'react';
import { View, Text, StatusBar, Image } from 'react-native';
import { Colors } from '../../COLORS/Colors';
import Language from '../../LANGUAGE/English.json';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { CommonActions } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable'
import Logo_Screen from '../COMPONENTS/Logo_Screen';

export default class Splash_Screen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {

    setTimeout(() => {
      this.props.navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [
            {
              name: 'Home_Screen',
              //   params: {}
            },
          ],
        }));

    }, 3000);
  }

  render() {
    return (
      <View style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.splash_bg,
      }}>
        <StatusBar backgroundColor={'transparent'} translucent />

        {/* <Animatable.Text 
        animation="slideInDown" 
        iterationCount={5} 
        direction="alternate"
        >Up and down you go
        </Animatable.Text> */}


        {/* <Animatable.Image 
        animation="zoomInDown" 
        iterationCount={2} 
        direction="alternate"
        duration={2000}

        source={require('../../ASSETS/Images/logo2.png')}
        style={{
          width:hp(22),
          height:hp(22)
        }}></Animatable.Image> */}

        <Animatable.View
          animation="zoomInDown"
          // iterationCount={2}
          direction="alternate"
          duration={3000}
        >
          <Logo_Screen
            F_SIZE={hp(4)}
            F_WEIGHT="700"
            F_COLOR={Colors.theme}
            IMAGE={require('../../ASSETS/Images/topIcon.png')}
            WIDTH={hp(7)}
            HEIGHT={hp(7)}
            L_SIZE={hp(4)}
            L_WEIGHT="700"
            L_COLOR={Colors.theme}
          />
        </Animatable.View>

      </View>
    );
  }
}
