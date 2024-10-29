import { Box } from '@mui/material';
import NoImage from '../../assets/no_data.png';

interface PosterProps {
  poster: string;
  title?: string;
}

const Poster = ({ poster, title = '' }: PosterProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        marginTop: {
          xs: '20px',
          sm: '120px',
        },
        paddingLeft: {
          xs: '0px',
          sm: '20px',
        },
        height: {
          xs: 'auto',
          sm: '100vh',
        },
        width: {
          xs: '100%',
          sm: '40%',
        },
      }}
    >
      <img
        src={poster}
        alt={title}
        style={{ borderRadius: '8px' }}
        onError={(e) => (e.currentTarget.src = NoImage)}
      />
    </Box>
  );
};

export default Poster;
