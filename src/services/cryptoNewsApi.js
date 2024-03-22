import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoNewsHeaders = {
  'x-bingapis-sdk': 'true',
  'X-RapidAPI-Key': '7438718a94msh64b82db8d4024c4p12acbcjsnced57555e7c7',
  'X-RapidAPI-Host': 'cryptocurrency-news2.p.rapidapi.com'
};
// url: 'https://crypto-news16.p.rapidapi.com/news/top/5',
// headers: {
//   'X-RapidAPI-Key': '7438718a94msh64b82db8d4024c4p12acbcjsnced57555e7c7',
//   'X-RapidAPI-Host': 'crypto-news16.p.rapidapi.com'

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

export const cryptoNewsApi = createApi({
  reducerPath: 'cryptoNewsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://cryptocurrency-news2.p.rapidapi.com' }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ newsCategory, count }) => createRequest(`/v1/coindesk?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;