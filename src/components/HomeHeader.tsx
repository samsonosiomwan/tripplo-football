import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Colors from '../utils/Colors';
import Fonts from '../utils/Fonts';

type prop = {
  leagaueName?: string;
  seasonYear?: string;
};

const HomeHeader: FC<prop> = ({leagaueName, seasonYear}) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>League Name:</Text>
        <Text style={styles.content}>{leagaueName}</Text>
      </View>

      <View>
        <Text style={styles.title}>Season Year:</Text>
        <Text style={styles.content}>{seasonYear}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: Fonts.h(110),
    paddingHorizontal: Fonts.w(32),
    paddingVertical: Fonts.h(30),
    backgroundColor: Colors.secondary,
  },

  content: {
    color: Colors.white,
    fontWeight: 'bold',
    fontFamily: Fonts.Gilroy_Bold,
    fontSize: Fonts.w(20),
    lineHeight: Fonts.h(30),
  },

  title: {
    color: Colors.white,
    fontWeight: 'bold',
    fontFamily: Fonts.Gilroy_Bold,
  },
});

export default HomeHeader;
