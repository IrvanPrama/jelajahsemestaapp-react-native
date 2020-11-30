import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ImageBackground, Image, Dimensions } from 'react-native';
import bgImage from '../../assets/images/image.jpg'
import logo from '../../assets/images/logo.png'
import { faEyeSlash, faLock, faUserAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
// import {
//     emailValidator,
//     passwordValidator,
//     nameValidator
// } from "../core/utils";

const { width: WIDTH } = Dimensions.get('window')
export default class SignUp extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
            showPass: false,
        }
    }

    show = () => {
        this.setState({
            showPass: true
        })
    }

    render() {
        const { username, password } = this.state;
        return (
            <ImageBackground source={bgImage} style={styles.backgroundContainer}>
                <View
                    style={styles.logoContainer}>

                    <Image source={logo} style={styles.logo} />

                </View>
                <View>
                    <FontAwesomeIcon icon={faUserAlt} style={styles.inputIcon} size={20} color={'white'} />

                    <TextInput
                        style={styles.input}
                        value={username}
                        placeholder={'Username'}
                        onChangeText={(username) => this.setState({ username })}
                        placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
                        underlineColorAndroid={'transparent'}
                    />
                </View>

                <View>
                    <FontAwesomeIcon icon={faLock} style={styles.inputIcon} size={20} color={'white'} />
                    <TextInput
                        style={styles.input}
                        value={password}
                        placeholder={'Password'}
                        secureTextEntry={true}
                        onChangeText={(password) => this.setState({ password })}
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
                <View>
                    <FontAwesomeIcon icon={faLock} style={styles.inputIcon} size={20} color={'white'} />
                    <TextInput
                        style={styles.input}
                        value={password}
                        placeholder={'Re Type Password'}
                        secureTextEntry={true}
                        onChangeText={(password) => this.setState({ password })}
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

                <TouchableOpacity style={styles.btnSignUp} onPress={() => this.props.navigation.navigate('Login')}>
                    <Text style={styles.text}>Sign Up</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
                    <Text style={styles.text}>Already Have an Account? Login</Text>
                </TouchableOpacity>

            </ImageBackground>
        )
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
    text: {
        color: 'blue',
        fontSize: 23
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
    btnSignUp: {
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
