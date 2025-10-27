import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, navigation } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const MasterActive = ({navigation}) => {
    return (
        <View style={styles.container}>
        <View style={styles.outerContainer}>
            <ScrollView contentContainerStyle={styles.scrollViewContainer} style={{ height: 0 }}>
                {/* Beatfreaks Section */}
                {/* <TouchableOpacity onPress={() => navigation.navigate('MasterActive')}> */}
                <View style={styles.sectionContainer}>
                    <View style={styles.innerContainer}>
                        <Text style={styles.headerText}>CEG Stunners</Text>
                        <View style={styles.subHeaderTextContainer}>
                            <View style={styles.subHeaderRow}>
                                <View style={styles.subHeaderItem}>
                                    <Text style={styles.subHeaderText}>Official variety club of CEG</Text>
                                </View>
                            </View>
                            <View style={styles.subHeaderRow}>
                                <View style={styles.subHeaderItem}>
                                    <Text style={styles.subHeaderText}>Anna University</Text>
                                </View>
                            </View>
                            <View style={styles.subHeaderRow}>
                                <View style={styles.subHeaderItem}>
                                    <Text style={styles.subHeaderText}>Email - stunners@gmail.com</Text>
                                </View>
                            </View>
                            <View style={styles.subHeaderRow}>
                                <View style={styles.subHeaderItem}>
                                    <Text style={styles.subHeaderText}>Phone - 120138124</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                {/* </TouchableOpacity> */}
                {/* Literature Club of AU Section */}
                {/* <TouchableOpacity onPress={() => handleClubPress(clubName)}> */}
                <View style={styles.sectionContainer}>
                    <View style={styles.innerContainer}>
                        <Text style={styles.headerText}>AU Podium</Text>
                        <View style={styles.subHeaderTextContainer}>
                            <View style={styles.subHeaderRow}>
                                <View style={styles.subHeaderItem}>
                                    <Text style={styles.subHeaderText}>Litearture Club of CEG</Text>
                                </View>
                            </View>
                            <View style={styles.subHeaderRow}>
                                <View style={styles.subHeaderItem}>
                                    <Text style={styles.subHeaderText}>Anna University</Text>
                                </View>
                            </View>
                            <View style={styles.subHeaderRow}>
                                <View style={styles.subHeaderItem}>
                                    <Text style={styles.subHeaderText}>Email - aupodium@gmail.com</Text>
                                </View>
                            </View>
                            <View style={styles.subHeaderRow}>
                                <View style={styles.subHeaderItem}>
                                    <Text style={styles.subHeaderText}>Phone - 43724812</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                {/* </TouchableOpacity> */}
            
                {/* Motor Sports Section */}
                {/* <TouchableOpacity onPress={() => handleClubPress(clubName)}> */}
                <View style={styles.sectionContainer}>
                    <View style={styles.innerContainer}>
                        <Text style={styles.headerText}>CEG Tech Forum</Text>
                        <View style={styles.subHeaderTextContainer}>
                            <View style={styles.subHeaderRow}>
                                <View style={styles.subHeaderItem}>
                                    <Text style={styles.subHeaderText}>Official Technical Society</Text>
                                </View>
                            </View>
                            <View style={styles.subHeaderRow}>
                                <View style={styles.subHeaderItem}>
                                    <Text style={styles.subHeaderText}>College of Engineering Guindy AU</Text>
                                </View>
                            </View>
                            <View style={styles.subHeaderRow}>
                                <View style={styles.subHeaderItem}>
                                    <Text style={styles.subHeaderText}>Email - ctfforum@gmail.com</Text>
                                </View>
                            </View>
                            <View style={styles.subHeaderRow}>
                                <View style={styles.subHeaderItem}>
                                    <Text style={styles.subHeaderText}>Phone - 8293572835</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                {/* </TouchableOpacity> */}
            </ScrollView>
        </View>
    </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFF', // Set the background color to white
    },
    outerContainer: {
        width: '80%',
        flex: 1,
    },
    scrollViewContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    innerContainer: {
        width: '100%', // Set to 100% for full width
        backgroundColor: '#eaf6f6',
        borderRadius: 10,
        padding: 20,
    },
    sectionContainer: {
        marginBottom: 10, // Reduce the space between sections
        borderWidth: 1,
        borderColor: '#5ea3a3',
        borderRadius: 10,
        padding: 10,
        width: '90%', // Adjust width as needed
        marginTop: 10, // Adjust margin between sections
    },
    headerText: {
        color: '#5ea3a3',
        fontSize: 24,
        fontWeight: 'bold',
    },
    subHeaderTextContainer: {
        marginTop: 10,
    },
    subHeaderRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    subHeaderItem: {
        marginRight: 10,
        marginBottom: 5,
    },
    subHeaderText: {
        color: '#000',
        fontSize: 16,
    },
});

export default MasterActive;
