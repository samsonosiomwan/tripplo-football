import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screen/login';

const Stack = createNativeStackNavigator();

const AuthNavigation = () => {
    return (
   
        <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
       
    );
    };
    
export default AuthNavigation;