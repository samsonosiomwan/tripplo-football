import React from 'react';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import Colors from '../utils/Colors';
import Fonts from '../utils/Fonts';


const headerDefault:  NativeStackNavigationOptions = {
  headerStyle: {
    backgroundColor: Colors.textBox,
  },
  headerTitleStyle: {
    fontSize: Fonts.w(16),
    fontWeight: '600',
    fontFamily: Fonts.Gilroy_Bold,
    color: Colors.text,
  },
  headerTitleAlign: 'center',
};

export default headerDefault;
