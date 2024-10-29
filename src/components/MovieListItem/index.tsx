import React, { useState } from 'react';
import { Box, Link } from '@mui/material';
import { FavoriteBorderOutlined } from '@mui/icons-material';
import { IMovie } from '../../features/movies/types/movie';
import NoImage from '../../assets/no_data.png';

interface MovieListItemProps {
  movie: IMovie;
}

const MovieListItem = ({ movie }: MovieListItemProps) => {
  const [imageError, setImageError] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <Link
      href={`/${movie.imdbID}`}
      variant="body2"
      sx={{ height: '100%', textDecoration: 'none', color: 'inherit' }}
    >
      <img
        src={movie.Poster}
        alt={movie.Title}
        hidden
        onError={() => setImageError(true)}
      />
      <Box
        key={movie.imdbID}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundImage: `url(${imageError ? NoImage : movie.Poster})`,
          backgroundSize: `${imageError ? 'contain' : 'cover'}`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
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
    </Link>
  );
};

export default MovieListItem;
