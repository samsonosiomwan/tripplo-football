import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screen/home';
import TeamDetails from '../screen/teamDetails/teamDetails';

const Stack = createNativeStackNavigator();

const HomeNavigation = () => {
    return (
   
        <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="TeamDetails" component={TeamDetails} />
        <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
       
    );
    };
    
export default HomeNavigation;