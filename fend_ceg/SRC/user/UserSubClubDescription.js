import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const UserSubClubsDescription = ({ route }) => {
    const { subClubName } = route.params;

    // Function to get the description based on the selected sub club
    const getDescription = (subClub) => {
        // Add descriptions for each sub club
        switch (subClub) {
            case 'Motor Sports':
                return {
                    title: 'Motor Sports',
                    description: 'Driven to Perform \n\n Founded by CEG Anna University\n\n Email: motorsports@example.com \n\n Phone: +1234567890  ',
                };
            case 'Beatfreakz':
                return {
                    title: 'Beatfreakz',
                    description: 'All Girls Dance Crew of Anna University \n\n Founded by Vijay Varman \n\n Email: beatfreakz@gmail.com \n\n Phone: +1234567890 ',
                };
            case 'Twisters':
                return {
                    title: 'Twisters',
                    description: 'Driven to Perform \n\n Founded by CEG Anna University\n\n Email: twister@example.com \n\n Phone: +1234567890  ',
                };
            case 'GRF':
                return {
                    title: 'GRF',
                    description: 'Driven to Perform \n\n Founded by CEG Anna University\n\n Email: grf@example.com \n\n Phone: +1234567890  ',
                };
            case 'Sruthilaya':
                return {
                    title: 'Sruthilaya',
                    description: 'Driven to Perform \n\n Founded by CEG Anna University\n\n Email: sruthilaya@example.com \n\n Phone: +1234567890  ',
                };
            case 'Saptham':
                return {
                    title: 'Saptham',
                    description: 'Driven to Perform \n\n Founded by CEG Anna University\n\n Email: saptam@example.com \n\n Phone: +1234567890  ',
                };
            case 'Spartanz':
                return {
                    title: 'Spartanz',
                    description: 'Driven to Perform \n\n Founded by CEG Anna University\n\n Email: spartanz@example.com \n\n Phone: +1234567890  ',
                };
            case 'Bloopers':
                return {
                    title: 'Bloopers',
                    description: 'Driven to Perform \n\n Founded by CEG Anna University\n\n Email: bloopers@example.com \n\n Phone: +1234567890  ',
                };
            case 'Stunners':
                return {
                    title: 'Stunners',
                    description: 'Driven to Perform \n\n Founded by CEG Anna University\n\n Email: stunners@example.com \n\n Phone: +1234567890  ',
                };
            case 'Theatron':
                return {
                    title: 'Theatron',
                    description: 'Driven to Perform \n\n Founded by CEG Anna University\n\n Email: theatron@example.com \n\n Phone: +1234567890  ',
                };
            case 'Leo':
                return {
                    title: 'Leo',
                    description: 'Driven to Perform \n\n Founded by CEG Anna University\n\n Email: leo@example.com \n\n Phone: +1234567890  ',
                };
            case 'Maadhavam':
                return {
                    title: 'Maadhavam',
                    description: 'Driven to Perform \n\n Founded by CEG Anna University\n\n Email: maadhavam@example.com \n\n Phone: +1234567890  ',
                };
            case 'AU Podium':
                return {
                    title: 'AU Podium',
                    description: 'Driven to Perform \n\n Founded by CEG Anna University\n\n Email: au_podium@example.com \n\n Phone: +1234567890  ',
                };
            case 'Literature Club of AU':
                return {
                    title: 'Literature Club',
                    description: 'Driven to Perform \n\n Founded by CEG Anna University\n\n Email: literature_clud@example.com \n\n Phone: +1234567890  ',
                };
            case 'LitClub':
                return {
                    title: 'LitClub',
                    description: 'Driven to Perform \n\n Founded by CEG Anna University\n\n Email: litclub@example.com \n\n Phone: +1234567890  ',
                };
            case 'CEG Acxions':
                return {
                    title: 'CEG Acxions',
                    description: 'Driven to Perform \n\n Founded by CEG Anna University\n\n Email: cegacxions@example.com \n\n Phone: +1234567890  ',
                };
            case 'Anna Hockey League':
                return {
                    title: 'Anna Hockey League',
                    description: 'Driven to Perform \n\n Founded by CEG Anna University\n\n Email: annahockeyleague@example.com \n\n Phone: +1234567890  ',
                };
            case 'Anna Volleyball':
                return {
                    title: 'Anna Volleyball',
                    description: 'Driven to Perform \n\n Founded by CEG Anna University\n\n Email: annavolleyball@example.com \n\n Phone: +1234567890  ',
                };
            case 'Castle Red':
                return {
                    title: 'Castle Red',
                    description: 'Driven to Perform \n\n Founded by CEG Anna University\n\n Email: castel_red@example.com \n\n Phone: +1234567890  ',
                };
            case 'CEG Cricket':
                return {
                    title: 'CEG Cricket',
                    description: 'Driven to Perform \n\n Founded by CEG Anna University\n\n Email: ceg_cricket@example.com \n\n Phone: +1234567890  ',
                };
            case 'Dhrona':
                return {
                    title: 'Dhrona Silambam',
                    description: 'Driven to Perform \n\n Founded by CEG Anna University\n\n Email: dhrona_Silamabm@example.com \n\n Phone: +1234567890  ',
                };
            case 'AU Football':
                return {
                    title: 'AU Football',
                    description: 'Driven to Perform \n\n Founded by CEG Anna University\n\n Email: AU_football@example.com \n\n Phone: +1234567890  ',
                };
            case 'AUBBF':
                return {
                    title: 'AUBBF',
                    description: 'Driven to Perform \n\n Founded by CEG Anna University\n\n Email: aubbf@example.com \n\n Phone: +1234567890  ',
                };
            case 'Army':
                return {
                    title: 'Army',
                    description: 'Driven to Perform \n\n Founded by CEG Anna University\n\n Email: army@example.com \n\n Phone: +1234567890  ',
                };
            case 'Navy':
                return {
                    title: 'Navy',
                    description: 'Driven to Perform \n\n Founded by CEG Anna University\n\n Email: navy@example.com \n\n Phone: +1234567890  ',
                };
            case 'Unit-1':
                return {
                    title: 'NSS Unit 1',
                    description: 'Driven to Perform \n\n Founded by CEG Anna University\n\n Email: nss_unit1@example.com \n\n Phone: +1234567890  ',
                };
            case 'Aakriti':
                return {
                    title: 'Aakriti',
                    description: 'Driven to Perform \n\n Founded by CEG Anna University\n\n Email: aakriti@example.com \n\n Phone: +1234567890  ',
                };
            case 'CTF':
                return {
                    title: 'CTF',
                    description: 'Driven to Perform \n\n Founded by CEG Anna University\n\n Email: ctf@example.com \n\n Phone: +1234567890  ',
                };
            case 'SAAS':
                return {
                    title: 'SAAS',
                    description: 'Driven to Perform \n\n Founded by CEG Anna University\n\n Email: saas@example.com \n\n Phone: +1234567890  ',
                };
            case 'AUSEC':
                return {
                    title: 'AUSEC',
                    description: 'Driven to Perform \n\n Founded by CEG Anna University\n\n Email: ausec@example.com \n\n Phone: +1234567890  ',
                };
            case 'Pixels':
                return {
                    title: 'Pixels Photography',
                    description: 'Driven to Perform \n\n Founded by CEG Anna University\n\n Email: pixels@example.com \n\n Phone: +1234567890  ',
                };
            case 'Guindy Times':
                return {
                    title: 'Guindy Times',
                    description: 'Driven to Perform \n\n Founded by CEG Anna University\n\n Email: gt@example.com \n\n Phone: +1234567890  ',
                };
            case 'Rotract':
                return {
                    title: 'Rotract',
                    description: 'Driven to Perform \n\n Founded by CEG Anna University\n\n Email: rotract@example.com \n\n Phone: +1234567890  ',
                };
            case 'MCS':
                return {
                    title: 'Math Computing Society',
                    description: 'Driven to Perform \n\n Founded by CEG Anna University\n\n Email: mcs@example.com \n\n Phone: +1234567890  ',
                };
            default:
                return {
                    title: 'Unknown',
                    description: 'Description not available...',
                };
        }
    };

    const { title, description } = getDescription(subClubName);

    return (
        <View style={styles.container}>
            <Text style={[styles.title, { color: '#5ea3a3' }]}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start', // Align content at the top of the screen
        alignItems: 'flex-start', // Align text from left to right
        paddingTop: 20, // Add padding to space it from the top
        paddingHorizontal: 20, // Add horizontal padding for better layout
        backgroundColor: '#eaf6f6',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'left',
    },
    description: {
        fontSize: 18,
        textAlign: 'left',
        color: 'black', // Description color is black
    },
});

export default UserSubClubsDescription;
