import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import homeStyles from '../../../../styles/HomeStyles';
import {useNavigation} from '@react-navigation/native';
import SharedButton from '../../../../common/SharedButton';

interface newsTypes {
  topNews: any;
}

// Populating News array

const NewsCard: React.FC<newsTypes> = props => {
  const navigation = useNavigation();

  return (
    <View>
      {props.topNews?.map((value: any, index: number) => (
        <View style={homeStyles.cardView} key={index}>
          <TouchableOpacity
            onPress={() => {
              // @ts-ignore: Unreachable code error
              navigation.navigate('NewsDetails', {
                title: value.source.id,
              });
            }}>
            <Text style={homeStyles.title}>{value.source.name}</Text>
            <Image
              style={homeStyles.cardImage}
              source={{uri: value.urlToImage}}
            />
            <Text style={homeStyles.cardDescription}>{value.description}</Text>
          </TouchableOpacity>
          <SharedButton title={value.source.id} />
        </View>
      ))}
    </View>
  );
};

export default NewsCard;
