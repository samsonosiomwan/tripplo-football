
import React from 'react'
 import {NavigationContainer} from '@react-navigation/native';
import AuthNavigation from './AuthNavigation';
import HomeNavigation from './HomeNavigation';

 
 
 const AppNavigation = () => {
  
 
   return (
     <NavigationContainer>
  
             <AuthNavigation />
       
            {/* <HomeNavigation /> */}
     </NavigationContainer>
   );
 };
 
 export default AppNavigation;
 