import React from 'react';
import { useGetMovieByIdQuery } from '../../features/movies/movieAPI';
import { Box, Container, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowBack } from '@mui/icons-material';
import { IRates } from '../../features/movies/types/rates';
import Rating from '../../components/Rating';
import NoImage from '../../assets/no_data.png';
import MovieDetailsLoader from '../../components/Loader/MovieDetailsLoader';
import DataNotFound from '../../components/DataNotFound';

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
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              marginTop: '8px',
            }}
          >
            <Typography variant="body1" color={'#7B8C98'} sx={{ gap: '8px' }}>
              {movie?.Runtime} • {movie?.Year} • {movie?.Rated}
            </Typography>
          </Box>
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
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                marginTop: '20px',
              }}
            >
              <Rating
                imdbID={movie?.imdbID}
                imdbRating={imdbRating?.Value}
                rottenTomatoesRating={rottenTomatoesRating?.Value}
              />
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                marginTop: '20px',
                gap: '8px',
                marginRight: '4px',
              }}
            >
              <Typography
                variant="body1"
                color={'#7B8C98'}
                sx={{
                  fontSize: '16px',
                  fontFamily: 'Roboto',
                  fontWeight: '500',
                }}
              >
                Plot
              </Typography>
              <Typography
                variant="body1"
                color={'white'}
                sx={{
                  fontSize: '16px',
                  fontFamily: 'Roboto',
                  fontWeight: '400',
                }}
              >
                {movie?.Plot}
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            marginTop: {
              xs: '20px',
              sm: '120px',
            },
            paddingLeft: {
              xs: '0px',
              sm: '20px',
            },
            height: {
              xs: 'auto',
              sm: '100vh',
            },
            width: {
              xs: '100%',
              sm: '40%',
            },
          }}
        >
          <img
            src={movie?.Poster}
            alt={movie?.Title}
            style={{ borderRadius: '8px' }}
            onError={(e) => (e.currentTarget.src = NoImage)}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default MovieDetails;
