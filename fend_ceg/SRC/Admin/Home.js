
import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView, Platform } from "react-native";

import STYLES from '../../styles/index';


const Home = ({ navigation }) => {
  

  return ( 
     <SafeAreaView style={{paddingHorizontal:20, flex: 1, backgroundColor: '#eaf6f6' }}>
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 10, paddingTop: 40}}>


    <View style={STYLES.main} >
    
   <View style={{ flexDirection: 'row',  textAlign: 'center', paddingHorizontal: 5, marginBottom: 20}}>
        <Text style={{ fontWeight: 'bold', fontSize: 35, color: '#add2c9' , textAlign: 'center'}}>
          CEG
        </Text>
        <Text style={{ fontWeight: 'bold', fontSize: 35, color: '#5ea3a3' , textAlign: 'center'}}>
          GRAM
        </Text>
      </View>
      

         <View style={STYLES.container}>

         
 <View style={{ flexDirection: 'column',  paddingHorizontal: 5, marginTop: 20, marginBottom: 20}}>
        <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'black' , textAlign: 'justify', fontStyle: "Times New Roman"}}>
          OPEN CALL - GREY TAGS
        </Text>
        <Text style={{ fontWeight: 'normal', fontSize: 15, color: 'black' , textAlign: 'justify', fontStyle: "Times New Roman", marginTop: 20}}>
          Hello All! We are happy to announce that we will be conduting the open call for all the 1st years on 1st April 2024. We look forward to meet everyone. 
        </Text>
      </View>

       <View style={{ flexDirection: 'column',  paddingHorizontal: 5, marginTop: 20, marginBottom: 20}}>
        <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'black' , textAlign: 'justify', fontStyle: "Times New Roman"}}>
          EVENT 1 - CONTEST
        </Text>
        <Text style={{ fontWeight: 'normal', fontSize: 15, color: 'black' , textAlign: 'justify', fontStyle: "Times New Roman", marginTop: 20}}>
          We challenge all students to participate in this 1st edition of the DANCE-X intra college level solo dance contest held on 10th April, 2024.
        </Text>
      </View>


    </View> 
    </View>
    </ScrollView>
        </SafeAreaView>
  );
}

export default Home;