import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity } from 'react-native';
import bgImage from '../../assets/images/image.jpg';
import {
    IconEditProfile,
    IconEffort,
    IconAbout,
    IconStatus
} from '../../assets';
export default class Profile extends Component {


    render() {
        return (
            <ImageBackground source={bgImage} style={styles.backgroundContainer}>
                <View
                    style={styles.logoContainer}>

                    <Image source={require("../../assets/profile/profile.jpg")} style={styles.imgprofile} />
                    <Text style={styles.name}>De Ivan</Text>
                    <Text style={styles.username}>@deivan</Text>
                </View>
                <View style={styles.containerProfile}>
                    <View style={styles.itemProfile}>
                        <IconEffort />
                        <Text style={styles.labelItem}>Pencapaian</Text>
                        <Text style={styles.subLabelItem}>24 book</Text>
                    </View>
                    <View style={styles.itemProfile}>
                        <IconStatus />
                        <Text style={styles.labelItem}>Status</Text>
                        <Text style={styles.subLabelItem}>Reader</Text>
                    </View>
                    <View style={styles.itemProfile}>
                        <IconEditProfile />
                        <Text style={styles.labelItem}>Edit Profil</Text>
                        <Text style={styles.subLabelItem}>24 book</Text>
                    </View>
                    <View style={styles.itemProfile}>
                        <IconAbout />
                        <Text style={styles.labelItem}>Tentan Aplikasi</Text>
                    </View>
                </View>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')} style={styles.btnLogOut}>
                    <Text style={styles.text}>Log Out</Text>
                </TouchableOpacity>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    backgroundContainer: {
        flex: 1,
        width: null,
        height: null,
    },
    logoContainer: {
        paddingTop: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imgprofile: {
        height: 120,
        width: 120,
        marginHorizontal: 72,
        borderRadius: 100
    },
    name: {
        color: "white",
        fontSize: 22,
        marginHorizontal: 100,
        marginTop: 4,
    },
    username: {
        color: "#626FB4",
        fontSize: 16,
        marginHorizontal: 100,
        marginTop: 4,
        marginBottom: 18
    },
    containerProfile: {
        paddingLeft: 30
    },
    itemProfile: {
        marginTop: 20
    },
    labelItem: {
        marginTop: -50,
        marginLeft: 60,
        fontSize: 20,
        color: "white"
    },
    subLabelItem: {
        marginTop: 4,
        marginLeft: 60,
        fontSize: 18,
        color: "#50D9EA"
    },
    btnLogOut: {
        marginHorizontal: 50,
        alignItems: 'center',
        height: 45,
        borderRadius: 25,
        backgroundColor: '#432577',
        justifyContent: 'center',
        marginTop: 40
    },
    text: {
        color: 'rgba(255, 255, 255, 0.7)',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})
