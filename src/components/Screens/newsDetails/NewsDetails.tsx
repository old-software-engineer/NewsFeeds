import {View, Text, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import {fetchCustomNews} from '../../../config/api/homeApi';
import {isCloseToBottom} from '../../../common/helper';
import NewsCard from './components/newsCard';

// Filtered News using sources

const NewsDetails: React.FC = (props: any) => {
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [news, setNews] = useState<Array<any>[]>([]);

  const param = props?.route?.params?.search
    ? props?.route?.params?.search
    : props?.route?.params?.title;

  // fetching News by source id
  useEffect(() => {
    fetchCustomNews(param, page).then((response: any) => {
      const {articles, status} = response;
      if (status === 'ok' && articles.length) {
        setNews(items => [...items, ...articles]);
        setLoading(false);
      } else {
        setLoading(false);
      }
    });
  }, [page, param]);

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

export default NewsDetails;
