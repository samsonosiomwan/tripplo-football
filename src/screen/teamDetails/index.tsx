import React, { FC } from "react"
import { StyleSheet, Text,  View } from "react-native"
import Colors from "../../utils/Colors";
import Fonts from "../../utils/Fonts";

const TeamDetails:FC<any> = ({navigation}) => {
    return(
        <View style={styles.container}>
            <Text>welcome</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      borderRadius: 8,
      backgroundColor: Colors.red,
      justifyContent: 'center',
      alignItems: 'flex-end',
      paddingRight: Fonts.w(8),
      marginVertical: Fonts.h(4),
      marginHorizontal: Fonts.h(20),
      paddingVertical: Fonts.h(30),


    },
    hiddenItemTouchable: {
      width: Fonts.w(22),
      justifyContent: 'center',
      alignItems: 'center',
    },
    stock: {
      borderRadius: 8,
      backgroundColor: Colors.white,
      padding: Fonts.w(16),
      shadowColor: 'rgba(161, 160, 180, 0.08)',
      shadowOffset: {width: 0, height: 0},
      shadowRadius: 16,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    stockLhs: {
      flexDirection: 'row',
      alignItems: 'center',
      flex: 2,
      marginRight: Fonts.w(12),
    },
    stockImage: {
      width: Fonts.w(24),
      height: Fonts.w(24),
      marginRight: Fonts.w(12),
    },
    stockName: {
      fontFamily: Fonts.Gilroy_Bold,
      fontSize: Fonts.w(10),
      fontWeight: '700',
      lineHeight: Fonts.h(12),
      marginBottom: Fonts.h(6),
      color: Colors.black,
    },
    stockCompany: {
      fontFamily: Fonts.Gilroy_Bold,
      fontWeight: '500',
      color: '#828282',
      fontSize: Fonts.w(8),
      lineHeight: Fonts.h(10),
    },
    stockRhs: {
      flex: 1,
      alignItems: 'flex-end',
    },
    stockPrice: {
      fontSize: Fonts.w(12),
      lineHeight: Fonts.h(15),
      color: Colors.text,
      marginBottom: Fonts.h(4),
      fontFamily: Fonts.Gilroy_Bold,
      fontWeight: 'bold',
      textAlign: 'right',
    },
    stockDeep: {
      fontSize: Fonts.w(8),
      fontFamily: Fonts.Gilroy_Bold,
      fontWeight: '600',
    },
  });

export default TeamDetails