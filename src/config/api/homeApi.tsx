import {ApiRequest} from './axios';
import {topNewsPath} from './apiPaths';

export const fetchTopNews = async () => {
  return new Promise(resolve => {
    ApiRequest({
      RequestUrl: topNewsPath,
      params: {},
      requestType: 'GET',
    }).then((response: any) => {
      resolve(response);
    });
  });
};
