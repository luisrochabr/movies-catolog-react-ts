import React from 'react';
import { Typography } from '@mui/material';
import { ReactComponent as TomatoIcon } from '../../assets/tomato.svg';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {
  RatingContainer,
  RatingItem,
  AddToFavorites,
  RatingBadge,
} from './styles';

interface RatingComponentProps {
  imdbRating: string | undefined;
  rottenTomatoesRating: string | undefined;
}

const RatingComponent: React.FC<RatingComponentProps> = ({
  imdbRating,
  rottenTomatoesRating,
}) => {
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
            <TomatoIcon />
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

      <AddToFavorites>
        <FavoriteBorderIcon fontSize="small" />
        <Typography variant="body2" component="span">
          Add to favorites
        </Typography>
      </AddToFavorites>
    </RatingContainer>
  );
};

export default RatingComponent;
