import React, {FC} from 'react';
import {TouchableOpacity, View, StyleSheet, ViewStyle} from 'react-native';
import Colors from '../utils/Colors';
import Fonts from '../utils/Fonts';

import VectorIcon from './VictorIcon';

type props = {
  onClose?: () => void;
  style?: ViewStyle;
  containerStyle?: ViewStyle;
  showCancelButton?: boolean;
};

const AlertCard: FC<props> = ({
  onClose,
  children,
  style,
  containerStyle,
  showCancelButton = true,
}) => {
  return (
    <View style={[styles.container, style]}>
      {showCancelButton && (
        <TouchableOpacity
          onPress={() => onClose && onClose()}
          style={{alignSelf: 'flex-end', marginBottom: Fonts.h(11.63)}}>
          <VectorIcon name="close" color={Colors.primaryColor} size={25} />
        </TouchableOpacity>
      )}
      <View style={containerStyle}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    borderRadius: 8,
    paddingTop: Fonts.h(16),
    paddingHorizontal: Fonts.w(25),
    paddingBottom: Fonts.h(24),
    width: '100%',
  },
});

export default AlertCard;
