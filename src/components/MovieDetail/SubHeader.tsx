import { Box, Typography } from '@mui/material';

interface SubHeaderProps {
  runtime?: string;
  year?: string;
  rated?: string;
}

const SubHeader = ({ runtime, year, rated }: SubHeaderProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        marginTop: '8px',
        gap: '8px',
        color: '#7B8C98',
      }}
    >
      {runtime && <Typography variant="body1">{runtime}</Typography>}
      {runtime && year && <Typography variant="body1">•</Typography>}
      {year && <Typography variant="body1">{year}</Typography>}
      {year && rated && rated !== 'N/A' && (
        <Typography variant="body1">•</Typography>
      )}
      {rated && rated !== 'N/A' && (
        <Box
          sx={{
            padding: '4px',
            backgroundColor: '#7B8C98',
            borderRadius: '4px',
            alignContent: 'center',
          }}
        >
          <Typography
            variant="body1"
            sx={{
              fontFamily: 'Roboto',
              fontSize: '12px',
              fontWeight: '700',
              color: '#011016',
            }}
          >
            {rated}
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default SubHeader;
