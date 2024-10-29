import { Box, Button, Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const DataNotFound = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '100wh',
          height: '100vh',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '16px',
        }}
      >
        <Typography
          align="center"
          variant="h1"
          sx={{
            fontFamily: 'Roboto',
            fontSize: '24px',
          }}
        >
          Ops...movie not found
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate('/')}
        >
          Go back
        </Button>
      </Box>
    </Container>
  );
};

export default DataNotFound;
