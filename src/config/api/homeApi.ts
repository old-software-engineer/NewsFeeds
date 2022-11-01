import {ApiRequest} from './axios';
import {topNewsPath, customNewsPath} from './apiPaths';
import {NEWS_API} from '../env';

// Method to fetch top news which have sourceIds
export const fetchTopNews = async (page: number): Promise<any> => {
  // getting sourceInfo of News
  const sources: any = await ApiRequest({
    RequestUrl: `${topNewsPath}/sources?country=in&apiKey=${NEWS_API}`,
    params: {},
    requestType: 'GET',
  });
  // extracting soureceIds from rich data
  const sourceIds = sources?.sources
    ?.map((item: any) => {
      return item.id;
    })
    .join(',');
  // API request for fething top news
  return Promise.all([
    ApiRequest({
      RequestUrl: topNewsPath + `?sources=${sourceIds}&pageSize=5&page=${page}`,
      params: {},
      requestType: 'GET',
    }),
  ]).then((res: any) => {
    return {articles: res[0]?.articles, status: res[0].status};
  });
};

// Method to fetch custom news with text
export const fetchCustomNews = async (
  title: String,
  page: number,
): Promise<any> => {
  return Promise.all([
    ApiRequest({
      requestType: 'GET',
      RequestUrl: `${customNewsPath}&q=${title}&pageSize=5&page=${page}&apiKey=${NEWS_API}`,
      params: {},
    }),
  ]).then((res: any) => {
    console.log(res, 'response in dfd');
    return {articles: res[0]?.articles, status: res[0].status};
  });
};
