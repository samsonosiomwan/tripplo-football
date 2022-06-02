import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Colors from '../../utils/Colors';
import Fonts from '../../utils/Fonts';

const TeamDetails: FC<any> = ({route}) => {
  const {stats} = route?.params?.standingsDetails;
  const {team} = route?.params?.standingsDetails;

  return (
    <>
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>Team Details</Text>
      </View>
          <View >
              <View style={styles.contentWrapper}>
                <Text style={styles.content}>name</Text>
                <Text style={styles.content}>{team.displayName}</Text>
              </View>
              <View style={styles.contentWrapper}>
                <Text style={styles.content}>location</Text>
                <Text style={styles.content}>{team.location}</Text>
              </View>
              <View style={styles.contentWrapper}>
                <Text style={styles.content}>abbriviation</Text>
                <Text style={styles.content}>{team.abbreviation}</Text>
              </View>
              <View style={styles.contentWrapper}>
                <Text style={styles.content}>active</Text>
                <Text style={styles.content}>{team.isActive?"Yes":"No"}</Text>
              </View>
          </View>
    </View>

    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>Stats</Text>
      </View>

      {stats?.map((item: any, index: number) => {
        return (
          <View key={index}>
            {(item?.name === 'losses' || item?.name === 'wins' || item?.name === 'ties') && (
              <View style={styles.contentWrapper}>
                <Text style={styles.content}>{item.name}</Text>
                <Text style={styles.content}>{item?.value}</Text>
              </View>
            )}
          </View>
        );
      })}
    </View>
    </>
   
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    backgroundColor: Colors.white,
    paddingRight: Fonts.w(8),
    marginVertical: Fonts.h(4),
    marginHorizontal: Fonts.h(10),
    paddingVertical: Fonts.h(10),
    paddingHorizontal: Fonts.h(10),
  },
  title: {
    color: Colors.white,
    fontWeight: '400',
    fontSize: Fonts.w(30),
    textAlign: 'center',
  },
  titleWrapper: {
    justifyContent: 'center',
    backgroundColor: Colors.secondary,
  },
  contentWrapper: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingVertical: Fonts.h(10),
  },
  content: {
    fontSize: Fonts.w(15),
    textTransform:'capitalize'
  },
});

export default TeamDetails;
