import {View, Text, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import {fetchTopNews} from '../../../config/api/homeApi';
import NewsCard from "./components/NewsCard";

const HomePage: React.FC = () => {
  const [topNews, setTopNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTopNews().then((response: any) => {
      const {articles, status} = response;
      if (status === 'ok') {
        setTopNews(articles);
        setLoading(false);
      } else {
        setLoading(false);
      }
    });
  }, []);

  return (
    <View>
      {loading ? (
        <Text>loading ....</Text>
      ) : (
        <ScrollView>
          <NewsCard topNews={topNews} />
        </ScrollView>
      )}
    </View>
  );
};

export default HomePage;
