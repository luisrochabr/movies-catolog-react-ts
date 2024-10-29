import React, { useState } from 'react';
import { Box, Button, Link } from '@mui/material';
import { Favorite, FavoriteBorderOutlined } from '@mui/icons-material';
import { IMovie } from '../../features/movies/types/movie';
import NoImage from '../../assets/no_data.png';
import { useLocalStorage } from '../../core/hooks/useLocalStorage';

interface MovieListItemProps {
  movie: IMovie;
}

const MovieListItem = ({ movie }: MovieListItemProps) => {
  const [imageError, setImageError] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isFavorite, setIsFavorite] = useLocalStorage<boolean>(
    movie.imdbID,
    false,
  );

  return (
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
        width: '140px',
        height: '198px',
      }}
    >
      <img
        src={movie.Poster}
        alt={movie.Title}
        hidden
        onError={() => setImageError(true)}
      />
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
              }}
            >
              <Button onClick={() => setIsFavorite(!isFavorite)}>
                {isFavorite ? (
                  <Favorite sx={{ color: 'red' }} />
                ) : (
                  <FavoriteBorderOutlined sx={{ color: 'white' }} />
                )}
              </Button>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', flex: 2 }}>
              <Link
                href={`/${movie.imdbID}`}
                variant="body2"
                sx={{
                  height: '100%',
                  textDecoration: 'none',
                  color: 'inherit',
                  flex: 2,
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    padding: 2,
                    flexGrow: 1,
                    height: '100%',
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
              </Link>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default MovieListItem;
