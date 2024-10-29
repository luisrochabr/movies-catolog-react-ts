import React from 'react';
import { useGetMovieByIdQuery } from '../../features/movies/movieAPI';
import { Box, Container, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { ArrowBack } from '@mui/icons-material';
import { IRates } from '../../features/movies/types/rates';
import Rating from '../../components/Rating';
import NoImage from '../../assets/no_data.png';

const MovieDetails = () => {
  const { id } = useParams();
  const { data: movie, error, isLoading } = useGetMovieByIdQuery(id);
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: </div>;
  if (!movie) return <div>No movie found</div>;
  const imdbRating: IRates | undefined = movie.Ratings?.find(
    (rating) => rating.Source === 'Internet Movie Database',
  );
  const rottenTomatoesRating: IRates | undefined = movie.Ratings?.find(
    (rating) => rating?.Source === 'Rotten Tomatoes',
  );
  return (
    <Container sx={{ marginRight: '120px', marginLeft: '120px', padding: 0 }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          width: '100%',
          height: '100%',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flex: 2,
            flexDirection: 'column',
            height: '100vh',
          }}
        >
          <Box
            onClick={() => {
              window.history.back();
            }}
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
              {movie.Runtime} • {movie.Year}
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
              {movie.Title}
            </Typography>
          </Box>
          <Box
            sx={{ display: 'flex', flexDirection: 'row', marginTop: '20px' }}
          >
            <Rating
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
              {movie.Plot}
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            height: '100vh',
          }}
        >
          {/* <Box
            component="img"
            sx={{
              borderRadius: '8px',
            }}
            alt={movie.Title}
            src={movie.Poster}
          /> */}
          <img
            src={movie.Poster}
            alt={movie.Title}
            style={{ borderRadius: '8px' }}
            onError={(e) => (e.currentTarget.src = NoImage)}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default MovieDetails;
