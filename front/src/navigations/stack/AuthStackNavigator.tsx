import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Button, StyleSheet, View, Text } from 'react-native';
import AuthHomeScreen from '../../screens/AuthHomeScreen';
import LoginScreen from '../../screens/LoginScreen';
import { authNavigations } from '../../constants';


export type AuthStackParamList = {
    [authNavigations.AUTH_HOME]: undefined;
    [authNavigations.LOGIN]: undefined;
}

// AuthStackNaviigator.tsx (네비게이터 파일)
// -> "이 네비게이터는 어떤 스크린이 존재하는지 정의하는 곳"

function AuthStackNavigator() {
    const Stack = createStackNavigator<AuthStackParamList>();
    // 이 네비게이터가 AuthHome 과 Login 스크린을 포함한다고 TS 에게 알려주는 역할
    // 올바른 Stack.Screen
    return (
        <Stack.Navigator>
            <Stack.Screen name={authNavigations.AUTH_HOME} component={AuthHomeScreen} />
            <Stack.Screen name={authNavigations.LOGIN} component={LoginScreen} />
        </Stack.Navigator>
    );
}

/*<Stack.Screen name="AuthHome" component={AuthHomeScreen} />
   <Stack.Screen name="Login" component={LoginScreen} />
   이걸 위에 처럼 바꿔주기!*/


const styles = StyleSheet.create({});

export default AuthStackNavigator;