import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ImageBackground, Image, Dimensions, Alert, Input, Item } from 'react-native';
import bgImage from '../../assets/images/image.jpg';
import logo from '../../assets/images/logo.png';
import { faEyeSlash, faLock, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

const { width: WIDTH } = Dimensions.get('window')
export default class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: "",
        }
    }

    myValidate = () => {
        const { username, password } = this.state;
        if (username == "" && password == "") {
            Alert.alert('Harap mengisi kolom Username dan Password');
        }
        else if (username != "deivan" && password != "youtube") {
            Alert.alert('Account Tidak Ditemukan');
        }
        else if (username == "deivan" && password == "") {
            Alert.alert('Password Bemum Dimasukan');
        }
        else if (username == "" && password == "youtube") {
            Alert.alert('Username Belum Dimasukan');
        }
        else if (username == "deivan" && password == "youtube") {
            Alert.alert('Anda Berhasil Login');
            this.props.navigation.navigate('MainApp');
        }
        else {
            Alert.alert('Account tidak ditemukan');
        }
    }


    render() {
        return (
            <ImageBackground source={bgImage} style={styles.backgroundContainer}>
                <View
                    style={styles.logoContainer}>

                    <Image source={logo} style={styles.logo} />

                </View>
                <View>
                    <FontAwesomeIcon icon={faUserAlt} style={styles.inputIcon} size={20} color={'white'} />

                    <TextInput
                        autoCapitalize="none"
                        style={styles.input}
                        placeholder={'username'}
                        onChangeText={username => this.setState({ username })}
                        placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
                        underlineColorAndroid={'transparent'}
                    />
                </View>

                <View>
                    <FontAwesomeIcon icon={faLock} style={styles.inputIcon} size={20} color={'white'} />
                    <TextInput
                        autoCapitalize="none"
                        style={styles.input}
                        placeholder={'password'}
                        secureTextEntry={true}
                        onChangeText={password => this.setState({ password })}
                        placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
                        underlineColorAndroid={'transparent'}
                    />
                    <TouchableOpacity style={styles.btnEye}>
                        <FontAwesomeIcon
                            icon={faEyeSlash}
                            size={20}
                            color={'rgba(255, 255, 255, 0.7)'} />
                    </TouchableOpacity>
                </View>


                <TouchableOpacity onPress={this.myValidate} style={styles.btnLogin}>
                    <Text style={styles.text}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('SignUp')}>
                    <Text style={styles.text}>Sign Up</Text>
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
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputField: {
        width: 280,
        color: 'white',
        borderColor: 'white',
        marginTop: 5
    },
    logoContainer: {
        alignItems: 'center',
        marginBottom: 50
    },
    logo: {
        padding: 20,
        width: 260,
        height: 105,
    },
    logoText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: -20,
        marginBottom: 20,
        opacity: 0.5
    },
    input: {
        width: WIDTH - 55,
        height: 45,
        borderRadius: 25,
        fontSize: 16,
        paddingLeft: 45,
        backgroundColor: 'rgba(0, 0, 0, 0.35)',
        color: 'rgba(255, 255, 255, 0.7)',
        marginHorizontal: 25,
        marginBottom: 10
    },
    inputIcon: {
        position: 'absolute',
        top: 10,
        left: 37
    },
    btnEye: {
        position: 'absolute',
        top: 10,
        right: 37
    },
    btnLogin: {
        width: WIDTH - 55,
        height: 45,
        borderRadius: 25,
        backgroundColor: '#432577',
        justifyContent: 'center',
        marginTop: 20
    },
    text: {
        color: 'rgba(255, 255, 255, 0.7)',
        fontSize: 16,
        textAlign: 'center'
    }
});
