import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoNewsHeaders = {
  "x-bingapis-sdk": "true",
  "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
  "x-rapidapi-key": "971b7b4480msh72174cc7299248fp103f9bjsn72e876671988",
};

const baseUrl = "https://bing-news-search1.p.rapidapi.com";

const createRequest = (url) => ({
  url,
  headers: cryptoNewsHeaders,
});

export const cryptoNewsApi = createApi({
  reducerPath: "cryptoNewsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: (newsCategory, count) =>
        createRequest(
          `/news/search?q=${newsCategory}&safeSearch=off&textFormate=Raw&freshness=Day&count=${count}`
        ),
    }),
  }),
});
export const{
  useGetCryptoNewsQuery,
}= cryptoNewsApi;