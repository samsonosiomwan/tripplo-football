import React, {cloneElement, FunctionComponent, ReactElement} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  ActivityIndicator,
  TextStyle,
  StyleSheet,
} from 'react-native';
import Colors from '../utils/Colors';
import Fonts from '../utils/Fonts';
import VectorIcon from './VictorIcon';

type Props = {
  title: string | ReactElement;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  reverse?: boolean;
  onPress?: () => void;
  transparent?: boolean;
  loading?: boolean;
  disabled?: boolean;
  icon?: string;
  iconPosition?: 'right' | 'left';
  iconSize?: number;
  containerStyle?: ViewStyle;
  indicatorColor?: string;
};

const TouchableButton: FunctionComponent<Props> = ({
  title,
  style,
  reverse = false,
  onPress,
  transparent = false,
  loading,
  textStyle,
  disabled,
  icon,
  iconPosition = 'left',
  iconSize = 16,
  containerStyle,
  indicatorColor,
}) => {
  const renderButtonContent = () => {
    if (typeof title === 'string') {
      return (
        <View style={[styles.textWrapper, containerStyle]}>
          {icon && iconPosition === 'left' && (
            <View style={{marginRight: Fonts.w(6)}}>
              <VectorIcon
                name={icon}
                size={iconSize}
                color={
                  reverse
                    ? Colors.primaryColor
                    : transparent
                    ? Colors.primaryColor
                    : Colors.white
                }
              />
            </View>
          )}
          <Text
            style={[
              {
                fontFamily: Fonts.Gilroy_Bold,
                color: reverse
                  ? Colors.primaryColor
                  : transparent
                  ? Colors.primaryColor
                  : Colors.white,
                fontSize: Fonts.w(16),
                fontWeight: '600',
                textAlign: 'center',
              },
              textStyle,
            ]}>
            {title}
          </Text>
          {icon && iconPosition === 'right' && (
            <View style={{marginRight: Fonts.w(6)}}>
              <VectorIcon
                name={icon}
                size={iconSize}
                color={
                  reverse
                    ? Colors.primaryColor
                    : transparent
                    ? Colors.primaryColor
                    : Colors.white
                }
              />
            </View>
          )}
        </View>
      );
    }
    return cloneElement(title, {
      style: {
        fontFamily: Fonts.Gilroy_Bold,
        color: reverse
          ? Colors.primaryColor
          : transparent
          ? Colors.primaryColor
          : Colors.white,
        fontSize: Fonts.w(16),
        fontWeight: '600',
        textAlign: 'center',
        ...title.props.style,
      },
    });
  };
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || loading}
      style={[
        transparent
          ? {
              backgroundColor: 'transparent',
            }
          : {
              backgroundColor: Colors.primaryColor,
            },
        reverse && {
          ...styles.buttonStyleReverse,
          backgroundColor: transparent ? 'transparent' : Colors.white,
        },
        styles.buttonStyle,
        disabled || loading ? {opacity: 0.6} : null,
        style,
      ]}>
      <View style={styles.buttonInnerWrapper}>
        {loading ? (
          <ActivityIndicator
            color={
              indicatorColor
                ? indicatorColor
                : reverse
                ? Colors.primaryColor
                : Colors.white
            }
            size={Fonts.h(10)}
            style={{alignSelf: 'center'}}
          />
        ) : (
          renderButtonContent()
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    height: Fonts.h(50),
    marginBottom: Fonts.h(10),
    borderRadius: Fonts.w(90),
    paddingVertical: Fonts.h(15),
    paddingHorizontal: Fonts.h(24),
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonStyleReverse: {
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.primaryColor,
  },
  textWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonInnerWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TouchableButton;
