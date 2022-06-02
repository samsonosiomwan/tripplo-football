import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screen/home';
import TeamDetails from '../screen/teamDetails';
import { HOME, TEAM_DETAILS } from './routeNames';
import HeadBackButton from '../components/HeadBackButton';
import Fonts from '../utils/Fonts';

const Stack = createNativeStackNavigator();

const HomeNavigation = () => {
    return (
   
        <Stack.Navigator initialRouteName={HOME}
       
        >
        <Stack.Screen 
          options={{
            headerLeft: () => <HeadBackButton />,
            headerTitleStyle: {
              fontSize: Fonts.w(18),
            },
          }}
        name={TEAM_DETAILS} component={TeamDetails} 
        />
        <Stack.Screen 
        
        name={HOME} component={Home} />
        </Stack.Navigator>
       
    );
    };
    
export default HomeNavigation;