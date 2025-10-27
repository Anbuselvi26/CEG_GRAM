import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const UserSubClubs = ({ navigation, route }) => {
    const { clubName } = route.params;

    // Function to get sub clubs based on selected club
    const getSubClubs = (club) => {
        switch (club) {
            case 'Dance':
                return ['Beatfreakz', 'Twisters', 'GRF'];
            case 'Variety':
                return ['Spartanz', 'Bloopers', 'Stunners', 'Theatron'];
            case 'Music':
                return ['Sruthilaya', 'Saptham'];
            case 'Literature':
                return ['Leo', 'Maadhavam', 'Literature Club Of AU', 'AU Podium', 'Litclub', 'CEG Acxions'];
            case 'Sports':
                return ['Anna Hockey League', 'Anna Volleyball League', 'Castle Red', 'CEG Cricket', 'Dhrona', 'AU Football', 'AUBBF'];
            case 'NCC':
                return ['Army', 'Navy'];
            case 'NSS':
                return ['Unit-1', 'Unit-2', 'Unit-3', 'Unit-4', 'Unit-5', 'Unit-6', 'Unit-7', 'Unit-8', 'Unit-9', 'Unit-10', 'Unit-11', 'Unit-12'];
            case 'Tech':
                return ['Motor Sports', 'Robotics', 'ACM CEG', 'AstroClub', 'EQ Club', 'Quizzers'];
            case 'Forum':
                return ['Aakriti', 'CTF', 'SAAS'];
            case 'Entrepreneur':
                return ['AUSEC'];
            case 'Journalism':
                return ['Pixels', 'Guindy Times'];
            case 'Services':
                return ['Rotaract', 'Organic Farming', 'Green Brigade', 'Siruthuligal'];
            case 'Department':
                return ['MCS', 'CSAU', 'ECEA'];
            default:
                return [];
        }
    };

    const subClubs = getSubClubs(clubName);

    // Function to navigate to the sub club description page
    const navigateToSubClubsDescription = (subClubName) => {
        navigation.navigate('UserSubClubDescription', { subClubName });
    };

    // Function to chunk array into rows
    const chunkArray = (array, size) => {
        return array.reduce((acc, _, i) => {
            if (i % size === 0) {
                acc.push(array.slice(i, i + size));
            }
            return acc;
        }, []);
    };

    // Render sub club buttons
    return (
        <View style={styles.container}>
            {/* Check if clubName is NSS, then apply row logic, else render buttons normally */}
            <View style={styles.headerTitleContainer}>
                <Text style={[styles.headerText, { color: '#add2c9' }]}>SUB </Text>
                <Text style={[styles.headerText, { color: '#5ea3a3' }]}>CLUBS</Text>
            </View>
            {clubName === 'NSS' ? (
                chunkArray(subClubs, 2).map((row, rowIndex) => (
                    <View key={rowIndex} style={styles.row}>
                        {row.map((subClub, index) => (
                            <TouchableOpacity key={index} style={styles.button1} onPress={() => navigateToSubClubsDsescription(subClub)}>
                                <Text style={styles.buttonText}>{subClub}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                ))
            ) : (
                subClubs.map((subClub, index) => (
                    <TouchableOpacity key={index} style={styles.button} onPress={() => navigateToSubClubsDescription(subClub)}>
                        <Text style={styles.buttonText}>{subClub}</Text>
                    </TouchableOpacity>
                ))
            )}
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
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    button: {
        width: 200,
        height: 50,
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#5ea3a3',
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
    },
    button1: {
        flex: 1,
        padding: 10,
        backgroundColor: '#5ea3a3',
        borderRadius: 5,
        marginHorizontal: 5,
    },
});

export default UserSubClubs;
