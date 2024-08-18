import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {getToken} from '../../utils/Auth/TokenMangement';

const url: string = 'https://stage.quiri-ai.com/api/v1';

// Define a service using a base URL and expected endpoints
export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: url,
    mode: 'cors',
    prepareHeaders: async (headers, {getState}) => {
      // console.log(headers, 'headers=>')
      headers.set('authorization', `Bearer ${getToken()}}`);
      return headers;
    },
  }),
  endpoints: builders => ({}),
});
