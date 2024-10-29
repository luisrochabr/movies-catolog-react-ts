import React, { useState } from 'react';
import { Container, Box, Grid2 as Grid } from '@mui/material';
import { SearchIcon, SInput } from './styles';
import { MoviesList } from '../../components/MovieList';
import useDebounce from '../../core/hooks/useDebounce';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  // const [page, setPage] = useState(1);

  const debouncedTerm = useDebounce<string>(searchTerm, 800);

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
        <Grid
          container
          spacing={{ xs: 8, sm: 6, md: 4, lg: 6 }}
          columns={{ xs: 4, sm: 9, md: 10, lg: 12 }}
        >
          <MoviesList searchTerm={debouncedTerm} page={1} />
        </Grid>
      </Box>
    </Container>
  );
};

export default Home;
