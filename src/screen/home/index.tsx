import React, {FC} from 'react';

import {View, FlatList, ActivityIndicator} from 'react-native';
import HomeHeader from '../../components/HomeHeader';

import Colors from '../../utils/Colors';
import Fonts from '../../utils/Fonts';

import TouchableButton from '../../components/TouchableButton';
import Standings from '../../components/Standings';
import {useRecoilState} from 'recoil';
import {userAtom} from '../../store/atoms/userAtom';
import useStandings from '../../network/reactQuery/query/getStandings';
import ErrorText from '../../components/ErrorText';
import EmptyListText from '../../components/EmptyListText';

const Home: FC<any> = ({navigation}) => {
  const [user, setUser] = useRecoilState(userAtom);

  const {isLoadingStandings, standings, isSuccess, standingsError} =
    useStandings();

  const handleLogOut = () => {
    setUser({...user, isLoggedIn: false});
  };

  console.log("========>>>>>", isLoadingStandings, standings)
  const renderEmptyComponent = () => {
    if (isLoadingStandings) {
      return (
        <ActivityIndicator
          style={{alignSelf: 'center'}}
          color={Colors.primaryColor}
        />
      );
    }
    if (!isSuccess) {
      return <ErrorText />;
    }
    return <EmptyListText message={standingsError} />;
  };

  return (
    <View style={{flex: 1}}>
      <HomeHeader leagaueName={standings?.name} seasonYear={standings.season} />
      <FlatList
        data={standings?.standings}
        contentContainerStyle={{flexGrow: 1, paddingTop: Fonts.h(10)}}
        ListEmptyComponent={renderEmptyComponent}
        keyExtractor={(item, index) => item.id + index}
        renderItem={item => (
          <Standings item={item?.item} navigation={navigation} />
        )}
        showsVerticalScrollIndicator={false}
      />
      <View
        style={{marginHorizontal: Fonts.w(20), marginVertical: Fonts.w(20)}}>
        <TouchableButton
          title="Log Out"
          style={{backgroundColor: Colors.blueEnd}}
          textStyle={{fontSize: Fonts.w(12)}}
          onPress={handleLogOut}
        />
      </View>
    </View>
  );
};

export default Home;
