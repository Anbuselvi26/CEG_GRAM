import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const AllLogin = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>CEG</Text>
                <Text style={[styles.headerText, { color: '#5ea3a3' }]}>GRAM</Text>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('MasterLogin')}
                >
                    <Text style={styles.buttonText}>Master</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('UserLogin')}
                >
                    <Text style={styles.buttonText}>User</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('AdminLogin')}
                >
                    <Text style={styles.buttonText}>Admin</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eaf6f6',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    headerText: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#add2c9',
    },
    buttonContainer: {
        width: '80%',
    },
    button: {
        backgroundColor: '#5ea3a3',
        paddingVertical: 15,
        borderRadius: 8,
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default AllLogin;