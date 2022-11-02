import React, {useEffect, useState} from 'react';
import {fetchTopNews} from '../../../config/api/homeApi';
import NewsCards from '../common/NewsCards';

// HomePage UI

const HomePage: React.FC = () => {
  const [topNews, setTopNews] = useState<Array<any>[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  // fetching top News
  useEffect(() => {
    fetchTopNews(page).then((response: any) => {
      const {articles, status} = response;
      if (status === 'ok' && articles.length) {
        setTopNews(items => [...items, ...articles]);
        setLoading(false);
      } else {
        setLoading(false);
      }
    });
  }, [page]);

  return (
    <NewsCards
      page={page}
      news={topNews}
      setPage={value => {
        setPage(value);
      }}
      loading={loading}
    />
  );
};

export default HomePage;
