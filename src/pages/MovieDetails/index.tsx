import React from 'react';
import { useGetMovieByIdQuery } from '../../features/movies/movieAPI';
import { Box, Container, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowBack } from '@mui/icons-material';
import { IRates } from '../../features/movies/types/rates';
import Rating from '../../components/Rating';

import MovieDetailsLoader from '../../components/Loader/MovieDetailsLoader';
import DataNotFound from '../../components/DataNotFound';
import SubHeader from '../../components/MovieDetail/SubHeader';
import Content from '../../components/MovieDetail/Content';
import Poster from '../../components/MovieDetail/Poster';
import ListInfo from '../../components/MovieDetail/ListInfo';

const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: movie, isLoading } = useGetMovieByIdQuery(id);

  if (isLoading) {
    return <MovieDetailsLoader />;
  }

  const imdbRating: IRates | undefined = movie?.Ratings?.find(
    (rating) => rating.Source === 'Internet Movie Database',
  );
  const rottenTomatoesRating: IRates | undefined = movie?.Ratings?.find(
    (rating) => rating?.Source === 'Rotten Tomatoes',
  );

  if (movie?.Response === 'False') return <DataNotFound />;

  return (
    <Container>
      <Box
        sx={{
          display: 'flex',
          flexDirection: {
            xs: 'column',
            sm: 'row',
          },
          width: '100%',
          height: '100%',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            height: {
              xs: 'auto',
              sm: '100vh',
            },
            width: {
              xs: '100%',
              sm: '60%',
            },
          }}
        >
          <Box
            onClick={() => navigate('/')}
            sx={{
              display: 'flex',
              flexDirection: 'row',
              marginTop: '50px',
              cursor: 'pointer',
            }}
          >
            <ArrowBack sx={{ color: '#7B8C98' }} />
          </Box>
          <SubHeader
            runtime={movie?.Runtime}
            year={movie?.Year}
            rated={movie?.Rated}
          />
          <Box
            sx={{ display: 'flex', flexDirection: 'row', marginTop: '20px' }}
          >
            <Typography
              variant="h1"
              color={'white'}
              sx={{
                fontSize: '60px',
                fontFamily: 'Roboto',
                fontWeight: 'bold',
              }}
            >
              {movie?.Title}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <Rating
              imdbID={movie?.imdbID}
              imdbRating={imdbRating?.Value}
              rottenTomatoesRating={rottenTomatoesRating?.Value}
            />

            {movie?.Plot && <Content plot={movie?.Plot} />}
            <Box sx={{ display: 'flex', flexDirection: 'row', gap: '64px' }}>
              {movie?.Actors && (
                <ListInfo title="Cast" content={movie?.Actors} />
              )}
              {movie?.Genre && (
                <ListInfo title="Genre" content={movie?.Genre} />
              )}
              {movie?.Director && (
                <ListInfo title="Director" content={movie?.Director} />
              )}
            </Box>
          </Box>
        </Box>
        {movie?.Poster && (
          <Poster poster={movie?.Poster} title={movie?.Title} />
        )}
      </Box>
    </Container>
  );
};

export default MovieDetails;
