// "이 네비게이터는 어떤 스크린이 존재하는지 정의하는 곳"
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Button, StyleSheet, View, Text } from 'react-native';
import AuthHomeScreen from '../../screens/auth/AuthHomeScreen';
import LoginScreen from '../../screens/auth/LoginScreen';
import { authNavigations } from '../../constants';
import SignupScreen from '../../screens/auth/SignupScreen';

export type AuthStackParamList = {
    [authNavigations.AUTH_HOME]: undefined;
    [authNavigations.LOGIN]: undefined;
    [authNavigations.SIGNUP]: undefined;
}

const Stack = createStackNavigator<AuthStackParamList>();

function AuthStackNavigator() {
    return (
        <Stack.Navigator screenOptions={{
            cardStyle: {
                backgroundColor: 'white'
            },
            headerStyle: {
                backgroundColor: 'white',
                shadowColor: 'gray',
            },
            headerTitleStyle: {
                fontSize: 20,
            },
            headerTintColor: 'black',
        }}>
            <Stack.Screen name={authNavigations.AUTH_HOME} component={AuthHomeScreen} options={{
                headerTitle: ' ',
                headerShown: false,
            }} />
            <Stack.Screen name={authNavigations.LOGIN} component={LoginScreen} options={{
                headerTitle: '로그인'
            }} />
            <Stack.Screen name={authNavigations.SIGNUP} component={SignupScreen} options={{
                headerTitle: '회원가입'
            }} />
        </Stack.Navigator>
    );
}


const styles = StyleSheet.create({});

export default AuthStackNavigator;