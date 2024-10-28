import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { IMovie } from './types/movie';
import { Config } from '../../core/common/config';

export interface QueryPrarams {
  searchTerm: string;
  page: number;
}

interface ListResponse<T> {
  Search: T[];
  totalResults: number;
}

export const movieApi = createApi({
  reducerPath: 'movieApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${Config.apiUrl}`,
  }),
  endpoints: (builder) => ({
    searchMovies: builder.query<ListResponse<IMovie>, QueryPrarams>({
      query: ({ searchTerm, page }) =>
        `?apikey=${Config.apiKey}&s=${searchTerm}&page=${page}`,
    }),
  }),
});

export const { useSearchMoviesQuery } = movieApi;
