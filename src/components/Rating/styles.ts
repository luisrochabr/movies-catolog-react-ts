import { styled } from 'styled-components';
import { Box } from '@mui/material';

export const RatingContainer = styled(Box)`
  display: flex;
  align-items: center;
  gap: 12px;
  border-radius: 8px;
`;

export const RatingItem = styled(Box)`
  display: flex;
  align-items: center;
  gap: 10px;
  color: #fff;
  border-radius: 4px;
  padding-right: 8px;
  border: 1px solid #171c21;
`;

export const RatingBadge = styled(Box)<{ bgColor: string; textColor: string }>`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  border-radius: 4px 0 0 4px;
  gap: 10px;
  padding: 9px 10px;
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ textColor }) => textColor};
`;

export const AddToFavorites = styled(Box)`
  display: flex;
  align-items: center;
  color: #7b8c98;
  border-radius: 4px;
  border: 1px solid #171c21;
  gap: 8px;
  padding: 8px;
  cursor: pointer;
  &:hover {
    border: 1px solid #ffffff;
    color: #ffffff;
  }
`;
