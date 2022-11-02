import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import {isCloseToBottom} from '../../../common/helper';
import NewsCard from '../home/components/NewsCard';

// Shared Component to show the news

interface cardProps {
  page: number;
  news: any[][];
  setPage: (value: any) => void;
  loading: boolean;
}

const NewsCards: React.FC<cardProps> = (props: cardProps) => {
  const {loading, setPage, page, news} = props;

  return (
    <View>
      {loading ? (
        <Text>loading ....</Text>
      ) : (
        <ScrollView
          onScroll={({nativeEvent}) => {
            if (isCloseToBottom(nativeEvent)) {
              setTimeout(() => {
                setPage(page + 1);
              }, 1000);
            }
          }}
          scrollEventThrottle={0}>
          <NewsCard topNews={news} />
        </ScrollView>
      )}
    </View>
  );
};

export default NewsCards;
