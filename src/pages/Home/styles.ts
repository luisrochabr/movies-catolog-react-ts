import styled from 'styled-components';
import { Card, Container, Input } from '@mui/material';
import { Search } from '@mui/icons-material';

export const SContainer = styled(Container)`
  margin-top: 50px;
`;

export const SInput = styled(Input)`
  padding: 8px;
  background-color: #f0f0f0;
  height: 30px;
  border-radius: 4px;
`;

export const SearchIcon = styled(Search)`
  height: 16px;
  width: 16px;
  color: #7b8c98;
`;

export const SCard = styled(Card)`
  min-width: 140px;
  min-height: 198px;
  border-radius: 8px;
  background-color: blue;
`;

export const Image = styled.img`
  box-fit: cover;
`;
