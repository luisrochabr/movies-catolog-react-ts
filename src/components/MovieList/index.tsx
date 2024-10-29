import React, { useEffect, useState } from 'react';
import { useSearchMoviesQuery } from '../../features/movies/movieAPI';
import MovieListItem from '../MovieListItem';
import {
  Box,
  Button,
  Grid2 as Grid,
  Pagination,
  Skeleton,
} from '@mui/material';
import { IMovie } from '../../features/movies/types/movie';
import { usePagination } from '../../core/hooks/usePagination';
import { ArrowCircleLeft, ArrowCircleRight } from '@mui/icons-material';
import NoData from '../NoData';

interface MoviesListProps {
  searchTerm: string;
}

const MoviesList = ({ searchTerm }: MoviesListProps) => {
  const [page, setPage] = useState(1);
  const { data, error, isLoading } = useSearchMoviesQuery({
    searchTerm,
    page,
  });
  const movies = data?.Search || [];
  const totalResults = data?.totalResults || 0;
  const { junmpToPage, currentPage, totalPages } = usePagination({
    totalResults,
    perPage: 10,
  });

  useEffect(() => {
    setPage(currentPage);
  }, [currentPage]);

  if (isLoading) {
    return (
      <Grid
        container
        spacing={{ xs: 8, sm: 6, md: 4, lg: 6 }}
        columns={{ xs: 4, sm: 9, md: 10, lg: 12 }}
      >
        {Array.from(new Array(10)).map((_, index) => (
          <Grid key={index} size={{ xs: 2, sm: 3, md: 2 }}>
            <Skeleton
              sx={{ bgcolor: 'grey.900', borderRadius: 4 }}
              variant="rectangular"
              width={'140px'}
              height={'198px'}
            />
          </Grid>
        ))}
      </Grid>
    );
  }
  if (error) return <div>Error...</div>;

  return (
    <>
      {movies && movies.length > 0 ? (
        <>
          <Grid
            container
            spacing={{ xs: 8, sm: 6, md: 4, lg: 6 }}
            columns={{ xs: 4, sm: 9, md: 10, lg: 12 }}
          >
            {movies.map((movie: IMovie) => (
              <Grid key={movie.imdbID} size={{ xs: 2, sm: 3, md: 2 }}>
                <MovieListItem movie={movie} key={movie.imdbID} />
              </Grid>
            ))}

            <Button variant="text" sx={{ padding: 0, margin: 0 }}>
              <Box
                onClick={() => junmpToPage(currentPage - 1)}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#00000',
                  borderRadius: 4,
                  cursor: 'pointer',
                  overflow: 'hidden',
                  width: '140px',
                  height: '198px',
                }}
              >
                <ArrowCircleLeft fontSize="large" />
              </Box>
            </Button>
            <Button variant="text" sx={{ padding: 0, margin: 0 }}>
              <Box
                onClick={() => junmpToPage(currentPage + 1)}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#00000',
                  borderRadius: 4,
                  cursor: 'pointer',
                  overflow: 'hidden',
                  width: '140px',
                  height: '198px',
                }}
              >
                <ArrowCircleRight fontSize="large" />
              </Box>
            </Button>
          </Grid>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: '20px',
              marginBottom: '20px',
            }}
          >
            <Pagination
              count={totalPages}
              page={currentPage}
              onChange={(event, page) => junmpToPage(page)}
              hideNextButton
              hidePrevButton
              color="primary"
            />
          </Box>
        </>
      ) : (
        <NoData />
      )}
    </>
  );
};

export { MoviesList };
