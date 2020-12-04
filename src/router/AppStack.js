import React from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Splash, Profile, Jelajah, Login, SignUp, About } from '../pages';
import { BottomNavigator } from '../components/';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const AppStack = () => {
    return (
        <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Jelajah" component={Jelajah} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    );
};

export default AppStack;

const styles = StyleSheet.create({});