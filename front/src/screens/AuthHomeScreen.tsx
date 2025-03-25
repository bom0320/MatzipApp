import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AuthStackParamList } from '../navigations/stack/AuthStackNavigator'; // 네비게이터에서 타입 가져오기
import { authNavigations } from '../constants';

// "navigation을 사용할 때, 이동할 수 있는 스크린을 Typescript가 알 수 있도록 정의하는 곳"


type AuthHomeScreenProps = StackScreenProps<AuthStackParamList, typeof authNavigations.AUTH_HOME>;

function AuthHomeScreen({ navigation }: AuthHomeScreenProps) {
    return (
        <SafeAreaView>
            <View>
                <Button
                    title='로그인화면으로 go'
                    onPress={() => navigation.navigate(authNavigations.LOGIN)} />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({});

export default AuthHomeScreen; 