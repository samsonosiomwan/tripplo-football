import React, {FC} from 'react';
import { TextStyle } from 'react-native';
import {
  ViewStyle,
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
} from 'react-native';
import { ErrorMessage } from '../constants';
import Colors from '../utils/Colors';
import Fonts from '../utils/Fonts';


type props = {
  styles?: ViewStyle;
  text?: string;
  action?: () => void;
  actionText?: string;
  color?: string;
  actionColor?: string;
  titleStyle?: TextStyle;
  actionStyle?: TextStyle;
};

const ErrorText: FC<props> = ({
  styles: viewStyle,
  text = ErrorMessage,
  action,
  actionText = 'try again',
  color = Colors.text,
  actionColor = Colors.blackText,
  actionStyle,
  titleStyle,
}) => {
  const onPress = () => {
    action && action();
  };
  return (
    <View style={[viewStyle, styles.container]}>
      <Text style={[styles.errorText, {color}, titleStyle]}>{text}</Text>
      <TouchableOpacity onPress={onPress}>
        <Text
          style={[styles.callToActionText, {color: actionColor}, actionStyle]}>
          {actionText}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: Fonts.w(20),
  },
  errorText: {
    marginBottom: Fonts.h(3),
    fontSize: Fonts.h(16),
    color: Colors.text,
    fontFamily: Fonts.Gilroy_Bold,
    textTransform: 'capitalize',
  },
  callToActionText: {
    fontSize: Fonts.h(14),
    color: Colors.blackText,
    fontFamily: Fonts.Gilroy_Regular,
    textTransform: 'capitalize',
  },
});
export default ErrorText;
