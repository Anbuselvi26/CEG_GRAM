import React, { useState } from 'react';
import { View, Text, TextInput, Button, Picker } from 'react-native';
import 'react-native-gesture-handler';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView, Platform, StyleSheet } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import STYLES from '../../styles/index';

const ClubInfo = () => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [contactNo, setContactNo] = useState('');
  const [description, setDescription] = useState('');
  const [selectedType, setSelectedType] = useState('music');

  const handleSave = () => {
    // Logic to save edited data
  };

  return (
    <SafeAreaView
      style={{ paddingHorizontal: 20, flex: 1, backgroundColor: '#eaf6f6' }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 10, paddingTop: 40 }}>
        <View style={STYLES.main}>
          <View
            style={{
              flexDirection: 'row',
              textAlign: 'center',
              paddingHorizontal: 5,
            }}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 35,
                color: '#add2c9',
                textAlign: 'center',
              }}>
              CEG
            </Text>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 35,
                color: '#5ea3a3',
                textAlign: 'center',
              }}>
              GRAM
            </Text>
          </View>

          <View style={{ paddingTop: 30 }}>
            <TextInput
              placeholderTextColor="#36454F"
              placeholder="Club Name"
              style={STYLES.inp}
            />
            <TextInput
              placeholderTextColor="#36454F"
              placeholder="Phone Number"
              style={STYLES.inp}
              keyboardType="numeric"
            />
            <TextInput
              placeholderTextColor="#36454F"
              placeholder="Email"
              style={STYLES.inp}
              keyboardType="email-address"
            />

            <View style={STYLES.input}>
              <DropDownPicker
                items={[
                  { label: 'Music', value: 'music' },
                  { label: 'Dance', value: 'dance' },
                  { label: 'Sports', value: 'sports' },
                ]}
                defaultIndex={0}
                containerStyle={{ height: 40 }}
                onChangeItem={(item) => console.log(item.label, item.value)}
              />
            </View>

            <TextInput
              style={STYLES.textArea}
              textAlignVertical="top"
              placeholder="Write your Club description.."
              placeholderTextColor="#36454F"
              numberOfLines={5}
              multiline={true}
              color="#36454F"
            />

            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <View style={{ marginRight: 10, marginLeft: 80 }}>
                <View
                  style={[
                    STYLES.btnSecondary,
                    { paddingHorizontal: 20, paddingVertical: 10 },
                  ]}>
                  <TouchableOpacity>
                    <Text
                      style={{
                        color: '#fff',
                        fontWeight: 'bold',
                        fontSize: 18,
                      }}>
                      EDIT
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={{ marginRight: 80, marginLeft: 10 }}>
                <View
                  style={[
                    STYLES.btnSecondary,
                    { paddingHorizontal: 20, paddingVertical: 10 },
                  ]}>
                  <TouchableOpacity onPress={handleSave}>
                    <Text
                      style={{
                        color: '#fff',
                        fontWeight: 'bold',
                        fontSize: 18,
                      }}>
                      SAVE
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ClubInfo;