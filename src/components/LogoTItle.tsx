import React, {FunctionComponent} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Fonts from '../utils/Fonts';

const LogoTitle: FunctionComponent<{
  title: string;
}> = ({title}) => {
  return (
    <View style={styles.container}>
      <View style={{paddingHorizontal: Fonts.w(10)}}>
        <Text
        style={styles.title}
        >{title}</Text>
      </View>
      <View style={{paddingHorizontal: Fonts.w(10)}}>
        <Image 
        style={styles.image}
        source={require('../assets/images/logo.png')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      borderRadius: 8,
      paddingRight: Fonts.w(8),
      justifyContent:"center",
      alignItems:"center",
      flexDirection:"row"
    },
   
    image: {
        width: Fonts.w(24),
        height: Fonts.w(24),
    },
    title:{
        fontSize: Fonts.w(18),
    }
  });

export default LogoTitle;
