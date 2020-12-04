
import React from 'react'
import { AuthProvider } from './AuthProvider';
import Routes from './Routes'

const Provider = () => {
    return (
        <AuthProvider>
            <Routes />
        </AuthProvider>
    )
}

export default Provider;






    // import React from 'react';
    // import { StyleSheet } from 'react-native';
    // import { createStackNavigator } from '@react-navigation/stack';
    // import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
    // import { Home, Splash, Profile, Jelajah, Login, SignUp, About } from '../pages';
    // import { BottomNavigator } from '../components/';

    // const Stack = createStackNavigator();
    // const Tab = createBottomTabNavigator();

    // const MainApp = () => {
    //     return (
    //         <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
    //             <Tab.Screen name="Home" component={Home} />
    //             <Tab.Screen name="Jelajah" component={Jelajah} />
    //             <Tab.Screen name="Profile" component={Profile} />
    //         </Tab.Navigator>
    //     );
    // };


    // const Router = () => {
    //     return (
    //         <Stack.Navigator initialRouteName="MainApp">
    //             <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
    //             <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
    //             <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
    //             <Stack.Screen name="About" component={About} />
    //             <Stack.Screen name="MainApp" component={MainApp} options={{ headerShown: false }} />
    //         </Stack.Navigator>
    //     );
    // };

    // export default Router;

    // const styles = StyleSheet.create({});