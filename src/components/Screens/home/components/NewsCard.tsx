import {View, Text, Image} from 'react-native';
import React from 'react';
import homeStyles from '../../../../styles/HomeStyles';

interface newsTypes {
  topNews: any;
}

const NewsCard: React.FC<newsTypes> = props => {
  return (
    <View>
      {props.topNews.map((value: any, index: number) => {
        return (
          <View key={index} style={homeStyles.cardView}>
            <Text style={homeStyles.title}>{value.title}</Text>
            <Image
              style={homeStyles.cardImage}
              source={{uri: value.urlToImage}}
            />
            <Text style={homeStyles.cardDescription}>{value.description}</Text>
          </View>
        );
      })}
    </View>
  );
};

export default NewsCard;
