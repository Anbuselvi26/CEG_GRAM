
import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View, Image, TextInput } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView, Platform } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import DateTimePicker from '@react-native-community/datetimepicker';
import STYLES from '../../styles/index';

const Post = ({navigation}) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
    const [isDatePickerVisible, setDatePickerVisible] = useState(false);
  
    const showDatePicker = () => {
      setDatePickerVisible(true);
    };
  
    const hideDatePicker = () => {
      setDatePickerVisible(false);
    };
  
    const handleConfirm = (date) => {
       hideDatePicker();
      setSelectedDate(date);
     
    };
 
  return ( 
     <SafeAreaView style={{paddingHorizontal:20, flex: 1, backgroundColor: '#eaf6f6' }}>
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 10, paddingTop: 40}}>

    <View style={STYLES.main} >
    
       <View style={{ flexDirection: 'row', marginTop: 50,  textAlign: 'center', paddingBottom: 25, paddingHorizontal: 10}}>
        <Text style={{ fontWeight: 'bold', fontSize: 35, color: '#add2c9' , textAlign: 'center'}}>
          CEG
        </Text>
        <Text style={{ fontWeight: 'bold', fontSize: 35, color: '#5ea3a3' , textAlign: 'center'}}>
          GRAM
        </Text>
      </View>
      
      <View style={STYLES.container}>
      <View style={{paddingTop: 40 , paddingBottom: 30}}>
     

        <TextInput placeholderTextColor= "#36454F" placeholder="Title" style={STYLES.inp} />

            <TextInput style={STYLES.textArea}
            textAlignVertical='top'
            placeholder="Content..."
            placeholderTextColor= '#a5a5a5'
            numberOfLines={12}
            multiline={true}
            color="#36454F"
        />
         
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Text style={{ fontWeight: '200', fontFamily: 'Times New Roman', fontSize: 15, color: '#36454F', textAlign: 'left' }}>
        Deletion Date:
      </Text>
      <TouchableOpacity onPress={showDatePicker}>
        <Text style={[STYLES.newInp, { marginLeft: 10 }]}>
          {selectedDate ? selectedDate.toLocaleDateString() : 'Select a date'}
        </Text>
      </TouchableOpacity>
      <DateTimePickerModal
        date={selectedDate || new Date()}
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>

        
       <View style={{  justifyContent: 'space-between'}}>
       <View  style={{ marginRight: 10, marginLeft: 80 }}>
        <View style={[STYLES.btnSecondary, { paddingHorizontal: 20, paddingVertical: 10 }]} >
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 18 }}>
              POST
            </Text>
          </TouchableOpacity>
        </View>
</View>

      </View>


      </View>
    </View>
        

    </View>
    </ScrollView>
        </SafeAreaView>
  );
}

export default Post;