import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import homeStyles from '../../../../styles/HomeStyles';
import {useNavigation} from '@react-navigation/native';

interface newsTypes {
  topNews: any;
}

const NewsCard: React.FC<newsTypes> = props => {
  const navigation = useNavigation();

  return (
    <View>
      {props.topNews.map((value: any, index: number) => (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Details', {news: value});
          }}
          key={index}>
          <View style={homeStyles.cardView}>
            <Text style={homeStyles.title}>{value.title}</Text>
            <Image
              style={homeStyles.cardImage}
              source={{uri: value.urlToImage}}
            />
            <Text style={homeStyles.cardDescription}>{value.description}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default NewsCard;
