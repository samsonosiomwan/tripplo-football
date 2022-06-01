import React from 'react';
import {FC} from 'react';
import {StyleSheet, Text} from 'react-native';
import colors from '../utils/Colors';
import Fonts from '../utils/Fonts';

type props = {
  message: string;
};
const InputError: FC<props> = ({message}) => {
  return <Text style={styles.error}>{message}</Text>;
};

const styles = StyleSheet.create({
  error: {
    marginTop: Fonts.h(4),
    fontFamily: Fonts.Gilroy_Bold,
    fontWeight: '500',
    color: colors.error,
    fontSize: Fonts.w(12),
  },
});

export default InputError;
