import { AxiosRequestConfig } from 'axios';
import { requestFromApi } from '@api/apiTransport';
import { PostItem } from '@interface/Posts';

export const fetchPostList = async () => {
  const requestConfig: AxiosRequestConfig = {
    url: '/posts',
    method: 'get',
  };

  return requestFromApi<PostItem[]>(requestConfig);
};
