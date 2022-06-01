import React, {FC, useRef, useState, useEffect} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';

import {
  ScrollView,
  StyleSheet,
  View,
  Dimensions,
  Text,
  ImageSourcePropType,
  Image,
  RefreshControl,
  Platform,
  FlatList,
} from 'react-native';
import HomeHeader from '../../components/HomeHeader';

import ScrollableContainer, {
  ScrollRef,
} from '../../components/ScrollableContainer';

import {TouchableOpacity} from 'react-native-gesture-handler';

import Colors from '../../utils/Colors';
import Fonts from '../../utils/Fonts';

import TouchableButton from '../../components/TouchableButton';
import Standings from '../../components/Standings';
import { useRecoilState } from 'recoil';
import { userAtom } from '../../store/atoms/userAtom';

const deviceWidth = Dimensions.get('window').width;

const Home: FC<any> = ({navigation}) => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [user, setUser] = useRecoilState(userAtom)

  const scrollView = useRef<ScrollRef>(null);

  const onSearch = (value: string) => {
    return null;
  };

  const handleLogOut = () => {
    setUser({...user, isLoggedIn:false})
  };

  const loadedStocks = [
    {
      id: '1',
      name: 'Apple',
      price: '$100',
    },
    {
      id: '2',
      name: 'Google',
      price: '$200',
    },
  ];

  const refresh = () => {
    setIsRefreshing(true);
    // getBalance();
    // getUnSettledBalance();
    setTimeout(() => {
      setIsRefreshing(false);
    }, 3000);
  };

  return (
    <View style={{flex: 1}}>
      <HomeHeader />
          <Text>View</Text>
      <FlatList
        data={loadedStocks}
        contentContainerStyle={{flexGrow: 1, paddingTop: Fonts.h(10)}}
        // ListEmptyComponent={renderEmptyComponent}
        keyExtractor={(item, index) => item.id + index}
        renderItem={item => <Standings item={item?.item} navigation={navigation}/>}
        showsVerticalScrollIndicator={false}
      />
      <View style={{marginHorizontal: Fonts.w(20), marginVertical: Fonts.w(20)}}>
      <TouchableButton
            title="Log Out"
            style={{backgroundColor:Colors.blueEnd}}
            textStyle={{fontSize: Fonts.w(12), }}
            onPress={handleLogOut}
          />
          </View>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollableContainer: {
    paddingVertical: Fonts.h(16),
    backgroundColor: Colors.textBox,
    flex: 1,
    paddingBottom: Platform.OS === 'android' ? Fonts.h(16) : 0,
  },
  container: {
    paddingHorizontal: Fonts.w(24),
    flex: 1,
    marginBottom: 4,
  },
  kycContainer: {
    paddingHorizontal: Fonts.w(30),
  },
  title: {
    color: Colors.text,
    fontSize: Fonts.w(10),
    lineHeight: Fonts.h(12),
    fontFamily: Fonts.Gilroy_Bold,
    fontWeight: '600',
    marginBottom: Fonts.h(10),
  },
  cardContainer: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  },
  card: {
    backgroundColor: Colors.white,
    borderRadius: 7.5,
    paddingTop: Fonts.h(16),
    paddingLeft: Fonts.w(15),
    paddingRight: Fonts.w(11),
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  image: {
    height: Fonts.w(24),
    width: Fonts.w(24),
  },
  cardTitle: {
    color: Colors.text,
    fontWeight: '700',
    fontSize: Fonts.w(14),
    fontFamily: Fonts.Gilroy_Bold,
    marginBottom: Fonts.h(22),
    marginTop: Fonts.h(8),
  },
  viewMore: {
    fontSize: Fonts.w(8),
  },
});

export default Home;
