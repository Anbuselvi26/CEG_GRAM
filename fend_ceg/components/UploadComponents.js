import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const UploadComponents = ({ navigation }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Post')} >
     
       <MaterialCommunityIcons name="arrow-down-bold-box" size={24} color="black" />
      
    </TouchableOpacity>
  );
};

export default UploadComponents;
