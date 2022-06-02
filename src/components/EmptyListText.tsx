import React, {FC} from 'react';
import {StyleSheet} from 'react-native';
import {Text, View} from 'react-native';
import Colors from '../utils/Colors';
import Fonts from '../utils/Fonts';


const EmptyListText: FC<{message: string}> = ({message}) => (
  <View style={styles.emptyView}>
    <Text style={styles.emptyViewText}>{message}</Text>
  </View>
);

const styles = StyleSheet.create({
  emptyView: {
    paddingHorizontal: Fonts.w(20),
    alignItems: 'center',
    width: '100%',
  },
  emptyViewText: {
    color: Colors.text,
    fontSize: Fonts.w(10),
    lineHeight: Fonts.h(13),
    fontFamily: Fonts.Raleway,
    textAlign: 'center',
    marginBottom: Fonts.h(23),
    textTransform: 'capitalize',
  },
});

export default EmptyListText;
