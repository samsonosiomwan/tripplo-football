import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigation from './AuthNavigation';
import HomeNavigation from './HomeNavigation';
import {useRecoilValue} from 'recoil';
import {userAtom} from '../store/atoms/userAtom';

const AppNavigation = () => {
  const {isLoggedIn} = useRecoilValue(userAtom);

  return (
    <NavigationContainer>
      {isLoggedIn ? <HomeNavigation /> : <AuthNavigation />}
    </NavigationContainer>
  );
};

export default AppNavigation;
