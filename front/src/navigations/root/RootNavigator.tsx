// 여긴 사용자가 가장 먼저 마주하게 되는 로직이 들어감
import React from "react";
import AuthStackNavigator from "../stack/AuthStackNavigator";
import MainDrawerNavigator from "../drawer/MainDrawerNavigator";

function RootNavigator() {
    const IsLoggedIn = true;

    return <>{IsLoggedIn ? <MainDrawerNavigator /> : <AuthStackNavigator />}</>;
}
export default RootNavigator;
