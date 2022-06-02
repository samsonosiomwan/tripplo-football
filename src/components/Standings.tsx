import React, { FC } from "react"
import { StyleSheet, Text,  TouchableOpacity, View } from "react-native"
import { IStandings } from "../Interface/props";
import { TEAM_DETAILS } from "../navigation/routeNames";
import Colors from "../utils/Colors";
import Fonts from "../utils/Fonts";



const Standings:FC<IStandings> = ({item,navigation}) => {

    return(
        <TouchableOpacity style={styles.container}
        onPress={() => navigation?.navigate(TEAM_DETAILS, {
            standingsDetails: item
        })}>
        
            <Text style={styles.displayName}>{item?.team?.displayName}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
      borderRadius: 8,
      backgroundColor: Colors.white,
      justifyContent: 'center',

      paddingRight: Fonts.w(8),
      marginVertical: Fonts.h(4),
      marginHorizontal: Fonts.h(20),
      paddingVertical: Fonts.h(30),
    },
    displayName: {
      color: Colors.text,
    fontWeight: '700',
    fontSize: Fonts.w(30),
    fontFamily: Fonts.Gilroy_Bold,
    textAlign:"center"
    },  
  });

export default Standings