import React, { useState } from 'react';
import { Container, Box, Input } from '@mui/material';
import { MoviesList } from '../../components/MovieList';
import useDebounce from '../../core/hooks/useDebounce';
import { Search } from '@mui/icons-material';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState<string>('tomato');
  const debouncedTerm = useDebounce<string>(searchTerm, 700);

  return (
    <Container sx={{ marginTop: '50px' }}>
      <Input
        type="search"
        spellCheck="false"
        fullWidth
        startAdornment={
          <Search
            sx={{
              color: '#7b8c98',
              fontSize: '16px',
            }}
          />
        }
        placeholder="Search movies..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        sx={{
          gap: '8px',
          padding: '8px',
          backgroundColor: '#f0f0f0',
          height: '30px',
          borderRadius: '4px',
        }}
      />
      <Box padding={{ xs: 8, sm: 6, md: 0 }} marginTop={'30px'}>
        <MoviesList searchTerm={debouncedTerm} />
      </Box>
    </Container>
  );
};

export default Home;
