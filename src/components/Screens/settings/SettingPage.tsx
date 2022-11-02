/* eslint-disable react-native/no-inline-styles */
import {View, Text} from 'react-native';
import React from 'react';
import homeStyles from '../../../styles/HomeStyles';

// Will Work on Setting Page
const SettingPage: React.FC = () => {
  return (
    <View style={homeStyles.centerMain}>
      <Text style={homeStyles.bold}>Setting Page</Text>
    </View>
  );
};

export default SettingPage;
