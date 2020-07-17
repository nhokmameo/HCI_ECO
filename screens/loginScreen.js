import React, { Component } from 'react';
import {
    StyleSheet, Text, View, ImageBackground, Dimensions, SafeAreaView, Image, TextInput, TouchableOpacity,
    KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback
} from 'react-native';
import NavigationService from '../service/navigation';

export default class loginScreen extends Component {
    state = {
        username: '',
        password: ''

    }

    handleLogin = () => {
        const { username, password } = this.state
        if (username == "") {
            alert("Please fill username")
            return false;
        } else if (password == "") {
            alert("Please fill password")
            return false;
        } else {
            NavigationService.navigate("profileScreen");
        }
        return true;
    }

    render() {
        const {
            username,
            password


        } = this.state;
        return (
            <SafeAreaView>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.container}>
                        <ImageBackground style={styles.backgroundImage}
                            source={require('../assets/images/bg.png')}>
                        </ImageBackground>

                        <View style={styles.logo}>
                            <Image style={{ width: 90, height: 90, resizeMode: 'contain' }} source={require('../assets/images/logo.png')} />
                            <Text style={{ fontSize: 40, color: 'white', fontWeight: '700' }}>GoSport</Text>

                        </View>

                        <View style={styles.inputContainer}>
                            <View style={styles.usernameInput}>
                                <TextInput placeholder="Username/email" style={{ height: 200, width: 300 }}
                                    onChangeText={(value) => this.setState({ username: value })} />
                            </View>

                            <View style={styles.passwordInput}>
                                <TextInput placeholder="Password" secureTextEntry={true}
                                    onChangeText={(value) => this.setState({ password: value })} />
                            </View>

                            <View style={styles.register}>
                                <Text style={{ fontSize: 17, color: '#E1E6DF', fontWeight: '500' }}>Sign Up</Text>
                                <Text style={{ fontSize: 17, color: '#E1E6DF', fontWeight: '500' }}>Forgot Password</Text>
                            </View>
                        </View>

                        <View style={styles.buttonContainer}>
                            <TouchableOpacity onPress={() => {
                                this.handleLogin()

                                // NavigationService.navigate("profileScreen");
                            }}>
                                <View style={styles.button}>
                                    <Text style={{ fontSize: 20, fontWeight: '600', color: 'white' }}>Sign In</Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                    </View>

                </TouchableWithoutFeedback>
            </SafeAreaView>

        );
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height

    },

    backgroundImage: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        position: 'absolute',
        top: 0,
        left: 0,
        // opacity: 0.6
    },
    logo: {
        width: Dimensions.get('screen').width,
        height: 150,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 100,
        // borderColor: 'black',
        // borderWidth: 1,
        // position: 'relative'
        flexDirection: 'column'
    },
    usernameInput: {
        width: Dimensions.get('screen').width * 8 / 10,
        height: 50,
        borderWidth: 1,
        borderColor: 'white',
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20

    },
    passwordInput: {
        width: Dimensions.get('screen').width * 8 / 10,
        height: 50,
        borderWidth: 1,
        borderColor: 'white',
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        marginTop: 20
    },
    inputContainer: {
        alignItems: 'center',
        width: Dimensions.get('screen').width,
        height: 200,
        // borderColor: 'black',
        // borderWidth: 1,
        justifyContent: 'center'
    },
    register: {
        width: Dimensions.get('screen').width * 8 / 10,
        height: 30,
        // borderColor: 'black',
        // borderWidth: 1,
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    button: {
        width: Dimensions.get('screen').width / 2,
        height: 55,
        borderRadius: 20,
        borderColor: 'green',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'green'
    },
    buttonContainer: {
        width: Dimensions.get('screen').width,
        height: 60,
        justifyContent: "center",
        alignItems: 'center'
    }
});
