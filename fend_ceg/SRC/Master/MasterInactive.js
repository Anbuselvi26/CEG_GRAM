import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native'; 

const MasterInactive = () => {
        return (
            <View style={styles.container}>
                <View style={styles.outerContainer}>
                    <ScrollView contentContainerStyle={styles.scrollViewContainer} style={{ height: 0 }}>
                        {/* Beatfreaks Section */}
                        <View style={styles.sectionContainer}>
                            <View style={styles.innerContainer}>
                                <Text style={styles.headerText}>Saptham</Text>
                                <View style={styles.subHeaderTextContainer}>
                                    <View style={styles.subHeaderRow}>
                                        <View style={styles.subHeaderItem}>
                                            <Text style={styles.subHeaderText}>Official classical club of CEG</Text>
                                        </View>
                                    </View>
                                    <View style={styles.subHeaderRow}>
                                        <View style={styles.subHeaderItem}>
                                            <Text style={styles.subHeaderText}>Anna University</Text>
                                        </View>
                                    </View>
                                    <View style={styles.subHeaderRow}>
                                        <View style={styles.subHeaderItem}>
                                            <Text style={styles.subHeaderText}>Email - saptham@gmail.com</Text>
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
    
                        {/* Literature Club of AU Section */}
                        <View style={styles.sectionContainer}>
                            <View style={styles.innerContainer}>
                                <Text style={styles.headerText}>Lit Club of AU</Text>
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
                                            <Text style={styles.subHeaderText}>Email - litclub@gmail.com</Text>
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
    
                    
                        {/* Motor Sports Section */}
                        <View style={styles.sectionContainer}>
                            <View style={styles.innerContainer}>
                                <Text style={styles.headerText}>SAAS</Text>
                                <View style={styles.subHeaderTextContainer}>
                                    <View style={styles.subHeaderRow}>
                                        <View style={styles.subHeaderItem}>
                                            <Text style={styles.subHeaderText}>Students Arts and Association Society</Text>
                                        </View>
                                    </View>
                                    <View style={styles.subHeaderRow}>
                                        <View style={styles.subHeaderItem}>
                                            <Text style={styles.subHeaderText}>College of Engineering Guindy AU</Text>
                                        </View>
                                    </View>
                                    <View style={styles.subHeaderRow}>
                                        <View style={styles.subHeaderItem}>
                                            <Text style={styles.subHeaderText}>Email - saasceg@gmail.com</Text>
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

export default MasterInactive;
