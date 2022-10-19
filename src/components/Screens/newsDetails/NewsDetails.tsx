import {View, Text} from 'react-native';
import React, {useEffect} from 'react';

const NewsDetails: React.FC = ({route}) => {
  const {news} = route.params;
  useEffect(() => {
    console.log(news, 'news');
  });

  return (
    <View>
      <Text>Details Page</Text>
    </View>
  );
};

export default NewsDetails;
