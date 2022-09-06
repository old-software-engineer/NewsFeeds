import {NEWS_API} from '../env';

const axios = require('axios');

interface ApiParams {
  requestType: string;
  RequestUrl: string;
  params: object;
}

const ApiRequest = ({requestType, RequestUrl, params}: ApiParams) => {
  return new Promise(resolve => {
    const headers = {
      Accept: 'application/json',
      'x-api-key': `${NEWS_API}`,
    };
    axios({
      method: requestType,
      url: RequestUrl,
      params: params,
      headers: headers,
    })
      .then((response: any) => {
        const {data} = response;
        resolve(data);
      })
      .catch((error: any) => {
        resolve(error);
      });
  });
};

export {ApiRequest};
