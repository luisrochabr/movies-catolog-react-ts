import React from 'react';
import { Typography } from '@mui/material';
import { ReactComponent as TomatoIcon } from '../../assets/tomato.svg';
import { Favorite, FavoriteBorderOutlined } from '@mui/icons-material';
import {
  RatingContainer,
  RatingItem,
  AddToFavorites,
  RatingBadge,
} from './styles';
import { useLocalStorage } from '../../core/hooks/useLocalStorage';

interface RatingProps {
  imdbID?: string;
  imdbRating?: string;
  rottenTomatoesRating?: string;
}

const Rating: React.FC<RatingProps> = ({
  imdbID,
  imdbRating,
  rottenTomatoesRating,
}) => {
  const [isFavorite, setIsFavorite] = useLocalStorage<boolean>(
    imdbID || '',
    false,
  );
  return (
    <RatingContainer>
      {imdbRating && (
        <RatingItem>
          <RatingBadge bgColor="#FF9B39" textColor="#000">
            <Typography
              variant="body2"
              component="span"
              sx={{ fontWeight: 'bold' }}
            >
              IMDb
            </Typography>
          </RatingBadge>
          <Typography
            variant="body2"
            component="span"
            sx={{
              fontFamily: 'Roboto',
              fontSize: '12px',
              fontWeight: '400',
            }}
          >
            {imdbRating}
          </Typography>
        </RatingItem>
      )}
      {rottenTomatoesRating && (
        <RatingItem>
          <RatingBadge bgColor="#F93A1E" textColor="#000">
            <TomatoIcon data-testid="tomato-icon" />
          </RatingBadge>
          <Typography
            variant="body2"
            component="span"
            sx={{
              fontFamily: 'Roboto',
              fontSize: '12px',
              fontWeight: '400',
            }}
          >
            {rottenTomatoesRating}
          </Typography>
        </RatingItem>
      )}

      <AddToFavorites onClick={() => setIsFavorite(!isFavorite)}>
        {isFavorite ? (
          <Favorite sx={{ color: 'red' }} />
        ) : (
          <FavoriteBorderOutlined sx={{ color: 'white' }} />
        )}
        <Typography variant="body2" component="span">
          Add to favorites
        </Typography>
      </AddToFavorites>
    </RatingContainer>
  );
};

export default Rating;
