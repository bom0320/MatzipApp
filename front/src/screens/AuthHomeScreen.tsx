import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

function AuthHomeScreen({ navigation }) {
    return (
        <SafeAreaView>
            <View>
                <Button
                    title='로그인화면으로 go'
                    onPress={() => navigation.navigate('Login')} />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({});

export default AuthHomeScreen; 