import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import React from 'react';
import Colors from '../utils/Colors';
import Fonts from '../utils/Fonts';


const headerDefault:  NativeStackNavigationOptions = {
  headerStyle: {
    backgroundColor: Colors.textBox,
    // elevation: 0,
    // shadowOpacity: 0,
  },
  headerTitleStyle: {
    fontSize: Fonts.w(16),
    // lineHeight: Fonts.h(20),
    fontWeight: '600',
    fontFamily: Fonts.Gilroy_Bold,
    // textAlign: 'center',
    color: Colors.text,
  },
  headerTitleAlign: 'center',
};

export default headerDefault;
