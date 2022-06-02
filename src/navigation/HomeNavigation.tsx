import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screen/home';
import TeamDetails from '../screen/teamDetails';
import { HOME, TEAM_DETAILS } from './routeNames';
import HeadBackButton from '../components/HeadBackButton';


const Stack = createNativeStackNavigator();

const HomeNavigation = () => {
    return (
   
        <Stack.Navigator 
       
        >
             <Stack.Screen 
        
        name={HOME} component={Home} />
        <Stack.Screen 
          options={{
            headerLeft: () => <HeadBackButton />,
          }}
        name={TEAM_DETAILS} component={TeamDetails} 
        
        />
       
        </Stack.Navigator>
       
    );
    };
    
export default HomeNavigation;