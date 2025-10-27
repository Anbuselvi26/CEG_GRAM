import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const AdminSignup = ({navigation}) => {

    const [clubInfo, setClubInfo] = useState('');
    const [clubEmail, setClubEmail] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [type, setType] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = () => {
        // Perform signup logic here
        // You can access the state variables (clubInfo, clubEmail, etc.) to submit the form data
        console.log('Club Info:', clubInfo);
        console.log('Club Email:', clubEmail);
        console.log('Contact Number:', contactNumber);
        console.log('Type:', type);
        console.log('Description:', description);
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
                    placeholder="Club Name"
                    value={clubInfo}
                    onChangeText={text => setClubInfo(text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    value={clubEmail}
                    onChangeText={text => setClubEmail(text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Contact"
                    value={contactNumber}
                    onChangeText={text => setContactNumber(text)}
                    keyboardType="phone-pad"
                />
                <TextInput
                    style={[styles.input, styles.descriptionInput]}
                    placeholder="Description"
                    value={description}
                    onChangeText={text => setDescription(text)}
                    multiline
                    numberOfLines={10}
                />
            </View>
            <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('AdminLogin')}>
                <Text style={styles.buttonText}>Sign Up</Text>
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
        width: '90%',
        marginBottom: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: '#5ea3a3',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    },
    descriptionInput: {
        textAlignVertical: "top"
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

export default AdminSignup;
