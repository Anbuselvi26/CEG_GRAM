import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ActiveInactive = ({ navigation }) => {
    const handleLogout = () => {
        // Perform logout logic here
        // For example, clear user session, navigate to login screen, etc.
        navigation.navigate('AllLogin'); // Navigate to the login screen after logout
    };

    const handleCancel = () => {
        // Navigate back to the previous screen or dismiss the confirmation dialog
        navigation.goBack();
    };

    return (
        <View style={[styles.container, { backgroundColor: '#eaf6f6' }]}>
            <Text style={styles.confirmationText}></Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={[styles.button, { backgroundColor: '#5ea3a3' }]} onPress={handleLogout}>
                    <Text style={styles.buttonText}>Admin</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, { backgroundColor: '#5ea3a3' }]} onPress={handleCancel}>
                    <Text style={styles.buttonText}>Active</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    confirmationText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#5ea3a3',
    },
    buttonContainer: {
        flexDirection: 'row',
    },
    button: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginRight: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
    },
});

export default Logout;
