import {ApiRequest} from './axios';
import {topNewsPath} from './apiPaths';

export const fetchTopNews = async (page: number) => {
  return Promise.all([
    ApiRequest({
      RequestUrl: topNewsPath + `&pageSize=5&page=${page}`,
      params: {},
      requestType: 'GET',
    }),
  ]).then((res: any) => {
    return {articles: res[0]?.articles, status: res[0].status};
  });
};
