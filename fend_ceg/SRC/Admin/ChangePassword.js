import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const ChangePassword = ({navigation}) => {

    
  const [existingPassword, setExistingPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');



    return (
        <View style={styles.container}>
        <View style={styles.headerTitleContainer}>
            <Text style={[styles.headerText, { color: '#add2c9' }]}>CEG</Text>
            <Text style={[styles.headerText, { color: '#5ea3a3' }]}>GRAM</Text>
        </View>
        <View style={styles.inputContainer}>
            
            <TextInput
                style={styles.input}
                placeholder="Existing Password"
                secureTextEntry
                value={existingPassword}
                onChangeText={setExistingPassword}
            />

             <TextInput
                style={styles.input}
                placeholder="New Password"
                secureTextEntry
                value={newPassword}
                onChangeText={setNewPassword}
            />

             <TextInput
                style={styles.input}
                placeholder="Confirm Password"
                secureTextEntry
                value={confirmPassword}
                onChangeText={setConfirmPassword}
            />
        </View>
        <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('AdminLogin')}>
            <Text style={styles.buttonText}>Change Password</Text>
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

export default ChangePassword;