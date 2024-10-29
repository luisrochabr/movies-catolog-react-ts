import React, { useState } from 'react';
import { Container, Box } from '@mui/material';
import { SearchIcon, SInput } from './styles';
import { MoviesList } from '../../components/MovieList';
import useDebounce from '../../core/hooks/useDebounce';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState<string>('tomato');
  const debouncedTerm = useDebounce<string>(searchTerm, 700);

  return (
    <Container sx={{ marginTop: '50px' }}>
      <SInput
        type="search"
        spellCheck="false"
        fullWidth
        startAdornment={<SearchIcon />}
        placeholder="Search movies..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Box padding={{ xs: 8, sm: 6, md: 0 }} marginTop={'30px'}>
        <MoviesList searchTerm={debouncedTerm} />
      </Box>
    </Container>
  );
};

export default Home;
