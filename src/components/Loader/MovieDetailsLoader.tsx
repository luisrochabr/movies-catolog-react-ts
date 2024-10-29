import React from 'react';
import { Container, Skeleton } from '@mui/material';

const MovieDetailsLoader = () => {
  return (
    <Container>
      <Skeleton
        data-testid="movie-details-skeleton"
        sx={{ bgcolor: 'grey.900', borderRadius: 4 }}
        variant="rectangular"
        width={'50%'}
        height={'100vh'}
      />
      <Skeleton
        data-testid="movie-details-skeleton"
        sx={{ bgcolor: 'grey.900', borderRadius: 4 }}
        variant="rectangular"
        width={'50%'}
        height={'100vh'}
      />
    </Container>
  );
};

export default MovieDetailsLoader;
