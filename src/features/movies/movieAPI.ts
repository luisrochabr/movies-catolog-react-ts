import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { IMovie } from './types/movie';
import { Config } from '../../core/common/config';

export interface SearchParams {
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
    searchMovies: builder.query<ListResponse<IMovie>, SearchParams>({
      query: ({ searchTerm, page }) =>
        `?apikey=${Config.apiKey}&s=${searchTerm}&page=${page}`,
    }),
    getMovieById: builder.query<IMovie, string | undefined>({
      query: (id) => `?apikey=${Config.apiKey}&i=${id}`,
    }),
  }),
});

export const { useSearchMoviesQuery, useGetMovieByIdQuery } = movieApi;
