import React, { useEffect } from 'react'
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native'
import { SplashBackground, Logo } from '../../assets'

const Splash = ({ navigation }) => {

    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Login');
        }, 3000)
    }, [navigation]);

    return (
        <ImageBackground source={SplashBackground} style={styles.background}>
            <Image source={Logo} style={styles.logo} />
        </ImageBackground>
    )
}

export default Splash

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        padding: 20,
        width: 260,
        height: 105
    }
})
