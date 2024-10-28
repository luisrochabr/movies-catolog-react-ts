import React, { useState } from 'react';
import { Box } from '@mui/material';
import { FavoriteBorderOutlined } from '@mui/icons-material';
import { IMovie } from '../../features/movies/types/movie';

interface MovieListItemProps {
  movie: IMovie;
}

const MovieListItem = ({ movie }: MovieListItemProps) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  return (
    <Box
      key={movie.imdbID}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundImage: `url(${movie.Poster})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: 4,
        cursor: 'pointer',
        overflow: 'hidden',
        width: '150px',
        height: '250px',
      }}
    >
      {isHovered && (
        <Box
          sx={{
            display: 'flex',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            width: '100%',
            height: '100%',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              width: '100%',
              height: '100%',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-end',
                marginTop: 2,
                marginRight: 2,
              }}
            >
              <FavoriteBorderOutlined sx={{ color: 'white' }} />
            </Box>

            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                color: 'white',
                padding: 2,
              }}
            >
              <Box
                sx={{
                  fontSize: 12,
                  fontFamily: 'Roboto',
                  fontWeight: 'bold',
                  color: 'white',
                }}
              >
                {movie.Title}
              </Box>
              <Box
                sx={{
                  fontSize: 12,
                  fontFamily: 'Roboto',
                  color: '#7B8C98',
                }}
              >
                {movie.Year}
              </Box>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default MovieListItem;
