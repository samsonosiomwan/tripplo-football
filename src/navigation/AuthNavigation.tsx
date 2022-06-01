import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screen/login';
import { LOGIN } from './routeNames';

const Stack = createNativeStackNavigator();

const AuthNavigation = () => {
    return (
   
        <Stack.Navigator initialRouteName={LOGIN}>
        <Stack.Screen 
        options={{
            headerShown: false,
        }}
        name={LOGIN} component={Login} />
        </Stack.Navigator>
       
    );
    };
    
export default AuthNavigation;