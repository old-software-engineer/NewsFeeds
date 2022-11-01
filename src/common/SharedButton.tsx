import React from 'react';
import {View, Share, Alert, Button} from 'react-native';
import homeStyles from '../styles/HomeStyles';

interface Props {
  title?: string;
}

const SharedButton: React.FC<Props> = ({title}: any) => {
  const shareData = async () => {
    try {
      await Share.share({
        message: `newsdetails/${title}`,
      });
    } catch (error: any) {
      Alert.alert(error.message);
    }
  };
  return (
    <View style={homeStyles.marginTop}>
      <Button onPress={shareData} title="Share" />
    </View>
  );
};

export default SharedButton;
