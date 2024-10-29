import { Box, Typography } from '@mui/material';

interface ContentProps {
  plot: string;
}

const Content = ({ plot }: ContentProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        marginTop: '20px',
        gap: '8px',
        marginRight: '4px',
      }}
    >
      <Typography
        variant="body1"
        color={'#7B8C98'}
        sx={{
          fontSize: '16px',
          fontFamily: 'Roboto',
          fontWeight: '500',
        }}
      >
        Plot
      </Typography>
      <Typography
        variant="body1"
        color={'white'}
        sx={{
          fontSize: '16px',
          fontFamily: 'Roboto',
          fontWeight: '400',
        }}
      >
        {plot}
      </Typography>
    </Box>
  );
};

export default Content;
