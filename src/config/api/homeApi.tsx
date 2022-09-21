import {ApiRequest} from './axios';
import {topNewsPath} from './apiPaths';

export const fetchTopNews = async (page: number) => {
  return new Promise(resolve => {
    ApiRequest({
      RequestUrl: topNewsPath + `&pageSize=5&page=${page}`,
      params: {},
      requestType: 'GET',
    }).then((response: any) => {
      console.log(response, 'response')
      resolve(response);
    });
  });
};
