import React from 'react';
import { useSearchMoviesQuery } from '../../features/movies/movieAPI';
import MovieListItem from '../MovieListItem';
import { Grid2 as Grid, Skeleton } from '@mui/material';
import { IMovie } from '../../features/movies/types/movie';

interface MoviesListProps {
  searchTerm: string;
  page: number;
}

const MoviesList = ({ searchTerm, page }: MoviesListProps) => {
  const { data, error, isLoading, isFetching } = useSearchMoviesQuery({
    searchTerm,
    page,
  });
  const movies = data?.Search || [];

  if (isLoading)
    return (
      <Grid size={{ xs: 12, sm: 4, md: 2 }}>
        <Skeleton
          variant="rectangular"
          width={140}
          height={198}
          sx={{ borderRadius: '4px' }}
        />
      </Grid>
    );

  return (
    <>
      {movies &&
        movies.map((movie: IMovie) => (
          <Grid
            size={{ xs: 2, sm: 3, md: 2 }}
            key={movie.imdbID}
            spacing={{ xs: 2 }}
          >
            <MovieListItem movie={movie} key={movie.imdbID} />
          </Grid>
        ))}
    </>
  );
};

export { MoviesList };
