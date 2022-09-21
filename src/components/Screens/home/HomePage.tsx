import {View, Text, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import {fetchTopNews} from '../../../config/api/homeApi';
import NewsCard from './components/NewsCard';
import {isCloseToBottom} from '../../../common/helper';

const HomePage: React.FC = () => {
  const [topNews, setTopNews] = useState<Array<any>[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchTopNews(page).then((response: any) => {
      const {articles, status} = response;
      if (status === 'ok' && articles.length) {
        setTopNews(articles);
        setLoading(false);
      } else {
        setLoading(false);
      }
    });
  }, [page]);

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
          <NewsCard topNews={topNews} />
        </ScrollView>
      )}
    </View>
  );
};

export default HomePage;
