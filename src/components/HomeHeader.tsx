import React, {FC} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import Colors from '../utils/Colors';
import Fonts from '../utils/Fonts';




type prop = {
  leagaueName?: string;
  seasonYear?: string;
};

const HomeHeader:FC<prop> = ({leagaueName,seasonYear}) => {

 
    return (
      <View style={styles.container}>
        <View style={styles.slide} >
          <Text style={styles.deep}>League Name:</Text>
          <Text style={styles.amount}>{leagaueName}</Text>
          <View >
            <Text style={styles.deep}>Season Year: </Text>
          <Text style={styles.amount}>{seasonYear}</Text>

          </View>
        </View>
      </View>
    );
  };


const styles = StyleSheet.create({
  container: {
    minHeight: Fonts.h(110),
    paddingHorizontal: Fonts.w(32),
    paddingVertical: Fonts.h(30),
    backgroundColor:Colors.blueEnd
  },
  staticContent: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  imgWrapper: {
    width: Fonts.w(24),
    aspectRatio: 1,
    borderRadius: Fonts.w(12),
    borderColor: Colors.white,
    borderWidth: 1,
    overflow: 'hidden',
  },
  imgProfile: {
    width: Fonts.w(24),
    height: Fonts.w(24),
    aspectRatio: 1,
  },

  icons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bg: {
    bottom: 0,
    left: 0,
    position: 'absolute',
    height: Fonts.h(100),
    width: Fonts.w(50),
  },
  swipperContainer: {
    alignSelf: 'center',
    marginHorizontal: Fonts.w(32),
    flex: 1,
  },
  slide: {
    alignSelf: 'center',
    flex: 1,
  },
  dotStyle: {
    backgroundColor: Colors.white,
    opacity: 0.3,
    width: Fonts.w(4),
    aspectRatio: 1,
    borderRadius: Fonts.w(2),
  },
  activeDotStyle: {
    backgroundColor: Colors.white,
    opacity: 1,
  },
  amount: {
    color: Colors.white,
    fontWeight: 'bold',
    fontFamily: Fonts.Gilroy_Bold,
    fontSize: Fonts.w(20),
    lineHeight: Fonts.h(25),
    textAlign: 'center',
  },
  button: {
    height: Fonts.h(26),
    paddingHorizontal: Fonts.w(8),
    paddingVertical: Fonts.h(4),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'rgba(255, 255, 255, 0.22)',
    borderRadius: 90,
    alignSelf: 'center',
    marginTop: Fonts.h(8),
  },
  buttonText: {
    color: Colors.white,
    fontFamily: Fonts.Gilroy_Bold,
    fontWeight: '500',
    fontSize: Fonts.w(8),
    marginLeft: Fonts.w(4),
  },
  deep: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    color: Colors.white,
  },
  deepText: {
    color: Colors.white,
    fontWeight: '600',
    fontFamily: Fonts.Gilroy_Bold,
    fontSize: Fonts.w(10),
    lineHeight: Fonts.h(12),
    textAlign: 'center',
    marginBottom: Fonts.h(1),
    marginRight: Fonts.w(2),
  },
  deepRise: {
    color: Colors.mintGreen,
  },
  deepRiseRed: {
    color: Colors.red,
  },
  deepDrop: {
    color: Colors.red,
  },
  paginationStyle: {
    marginTop: Fonts.h(8),
  },
});

export default HomeHeader;
