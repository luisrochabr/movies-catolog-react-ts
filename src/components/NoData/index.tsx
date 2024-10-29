import { Box, Typography } from '@mui/material';
import NoDataIcon from '../../assets/no_data.png';

const NoData = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '60vh',
        gap: '24px',
      }}
    >
      <img src={NoDataIcon} alt="No Data" />
      <Box>
        <Typography
          align="center"
          variant="h1"
          sx={{
            fontFamily: 'Roboto',
            fontSize: '24px',
          }}
        >
          Don't know what to search?
        </Typography>
        <Typography
          align="center"
          variant="body1"
          sx={{
            fontFamily: 'Roboto',
            fontSize: '16px',
            color: '#7B8C98',
          }}
        >
          Here's an offer you can't refuse
        </Typography>
      </Box>
    </Box>
  );
};

export default NoData;
