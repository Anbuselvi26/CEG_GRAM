import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
// import request, { gql } from 'graphql-request'

// BASEURL = 'http://192.168.29.192:8000/graphql/'
// BASEURL = 'http://127.0.0.1:8000/graphql'

// const LOGIN = gql`
//     mutation tokenAuth {
//             tokenAuth($email: String!, $password: String!) {
//             success
//             errors
//             token
//             refreshToken
//         }
//     }
// `;

// const LoginUpdate = gql`
//     mutation userdetail($id: String!) {
//         login(id: $id) {  
//         set
//         }
//     }
// `;

const AdminLogin = ({navigation}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const handleLogin = () => {
    //     // Perform login logic here, e.g., validation, authentication
    //     // console.log('Email:', email);
    //     // console.log('Password:', password);

    //     navigation.navigate('MasterInactive');
    // };

    // const handleLogin = async () => {
    //     try {
    //         console.log("enter try-------->")
    //         const response = await request(BASEURL, LOGIN, {
    //             email: email,
    //             password: password,
    //         });
    //         console.log("response-------->", response);
    //         if (response.tokenAuth.success) {
    //             // saveAuth(response);
    //             // setCurrentUser(response);
    //             // const loginResponse = await request(BASEURL, LoginUpdate, {
    //             //     id: response.tokenAuth.user.id
    //             // });
    //             // console.log(loginResponse);
    //             navigation.navigate('AdminSignup')
    //         } else {
    //             // saveAuth(undefined);
    //             setStatus('The login details are incorrect');
    //         }
    //     } catch (error) {
    //         console.error(error);
    //         // saveAuth(undefined);
    //         setStatus('Incorrect');
    //     }

    // };

    return (
        <View style={styles.container}>
        <View style={styles.headerTitleContainer}>
            <Text style={[styles.headerText, { color: '#add2c9' }]}>CEG</Text>
            <Text style={[styles.headerText, { color: '#5ea3a3' }]}>GRAM</Text>
        </View>
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.input}
                placeholder="Email"
                keyboardType="email-address"
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />
        </View>
        <TouchableOpacity style={styles.Button} onPress={() => navigation.navigate('Home')}>
            <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.Button} onPress={() => navigation.navigate('AdminSignUp')}>
            <Text style={styles.buttonText}>Signup</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.Button} onPress={() => navigation.navigate('ChangePassword')}>
            <Text style={styles.buttonText}>Forget Password?</Text>
        </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#eaf6f6',
    },
        headerTitleContainer: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    headerText: {
        fontSize: 40,
        fontWeight: 'bold',
    },
    inputContainer: {
        width: '80%',
        marginBottom: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: '#5ea3a3',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    },
    Button: {
        backgroundColor: '#5ea3a3',
        paddingVertical: 15,
        width: '80%',
        borderRadius: 5,
        marginBottom: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default AdminLogin;