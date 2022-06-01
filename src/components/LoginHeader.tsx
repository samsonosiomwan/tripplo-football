import React, {FC} from 'react';
import {StyleSheet, Text, View, ViewStyle} from 'react-native';
import Fonts from '../utils/Fonts';
import Colors from '../utils/Colors';



interface Props {
  smallText?: string;
  largeText: string;
  style?: ViewStyle;
}

const LoginHeader: FC<Props> = ({largeText, smallText, style}) => {
  return (
    <View style={[styles.headerWrapper, style]}>
      {smallText && <Text style={styles.smallHeader}>{smallText}</Text>}
      <Text style={styles.largeHeader}>{largeText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerWrapper: {
    marginBottom: Fonts.h(32),
  },
  smallHeader: {
    color: Colors.text,
    fontSize: Fonts.w(10),
    fontFamily: Fonts.Gilroy_Bold,
    fontWeight: '600',
    lineHeight: Fonts.h(12),
  },
  largeHeader: {
    color: '#333333',
    fontSize: Fonts.w(20),
    fontFamily: Fonts.Gilroy_Bold,
    fontWeight: 'bold',
    lineHeight: Fonts.h(25),
  },
});

export default LoginHeader;
