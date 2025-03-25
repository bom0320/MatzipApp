// "이 네비게이터는 어떤 스크린이 존재하는지 정의하는 곳"
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Button, StyleSheet, View, Text } from 'react-native';
import AuthHomeScreen from '../../screens/AuthHomeScreen';
import LoginScreen from '../../screens/LoginScreen';
import { authNavigations } from '../../constants';
import SignupScreen from '../../screens/SignupScreen';

export type AuthStackParamList = {
    [authNavigations.AUTH_HOME]: undefined;
    [authNavigations.LOGIN]: undefined;
    [authNavigations.SIGNUP]: undefined;
}


function AuthStackNavigator() {
    const Stack = createStackNavigator<AuthStackParamList>();
    return (
        <Stack.Navigator>
            <Stack.Screen name={authNavigations.AUTH_HOME} component={AuthHomeScreen} />
            <Stack.Screen name={authNavigations.LOGIN} component={LoginScreen} />
            <Stack.Screen name={authNavigations.SIGNUP} component={SignupScreen} />
        </Stack.Navigator>
    );
}


const styles = StyleSheet.create({});

export default AuthStackNavigator;