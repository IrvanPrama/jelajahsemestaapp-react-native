import React from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Splash, Login, SignUp, About } from '../pages';

const Stack = createStackNavigator();


const AuthStack = () => {
    return (
        <Stack.Navigator initialRouteName="SignUp">
            <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
            <Stack.Screen name="About" component={About} />
        </Stack.Navigator>
    );
};

export default AuthStack;

const styles = StyleSheet.create({});
