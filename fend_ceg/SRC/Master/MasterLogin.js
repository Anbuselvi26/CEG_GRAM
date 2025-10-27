import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const MasterLogin = ({navigation}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Perform login logic here, e.g., validation, authentication
        console.log('Email:', email);
        console.log('Password:', password);

        navigation.navigate('MasterInactive');
    };

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
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
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
    loginButton: {
        backgroundColor: '#5ea3a3',
        paddingVertical: 15,
        width: '80%',
        borderRadius: 5,
        
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default MasterLogin;
