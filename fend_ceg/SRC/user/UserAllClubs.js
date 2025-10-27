// ClubNamesPage.js
import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const UserAllClubs = () => {
    const navigation = useNavigation();

    const clubNames = [
        'Dance', 'Music', 'Variety', 'Literature',
        'Sports', 'NSO', 'NCC', 'NSS',
        'YRC', 'Tech', 'Forum', 'Entrepreneur',
        'Journalism', 'Services', 'Department'
    ];

    // Function to split the array into rows with two elements each
    const chunkArray = (arr, chunkSize) => {
        const chunks = [];
        for (let i = 0; i < arr.length; i += chunkSize) {
            chunks.push(arr.slice(i, i + chunkSize));
        }
        return chunks;
    };

    // Split club names into rows
    const rows = chunkArray(clubNames, 2);

    const handleClubPress = (clubName) => {
        navigation.navigate('UserSubClubs', { clubName });
    };

    return (
        <View style={styles.container}>
            <View style={styles.headerTitleContainer}>
                <Text style={[styles.headerText, { color: '#add2c9' }]}>CL</Text>
                <Text style={[styles.headerText, { color: '#5ea3a3' }]}>UBS</Text>
            </View>
            {/* Map over rows and render buttons */}
            {rows.map((row, rowIndex) => (
                <View key={rowIndex} style={styles.row}>
                    {row.map((clubName, index) => (
                        <TouchableOpacity
                            key={index}
                            style={[styles.button, index === 0 ? { marginRight: 10 } : null]}
                            onPress={() => handleClubPress(clubName)}>
                            <Text style={styles.buttonText}>{clubName}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
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
    row: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    button: {
        flex: 1,
        paddingVertical: 15,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#5ea3a3',
        width: '45%',
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default UserAllClubs;
