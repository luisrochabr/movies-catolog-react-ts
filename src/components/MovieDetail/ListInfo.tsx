import { Box, Typography } from '@mui/material';

interface ListInfoProps {
  title: string;
  content: string;
}

const ListInfo = ({ title, content }: ListInfoProps) => {
  const contentArray = content.split(', ');
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Typography
        variant="h1"
        color={'#7B8C98'}
        sx={{ fontSize: '16px', fontFamily: 'Roboto', fontWeight: '500' }}
      >
        {title}
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {contentArray.length > 0 &&
          contentArray.map((item, index) => (
            <Typography
              key={index}
              variant="h1"
              color={'white'}
              sx={{
                fontSize: '16px',
                fontFamily: 'Roboto',
                fontWeight: '500',
              }}
            >
              {item}
            </Typography>
          ))}
      </Box>
    </Box>
  );
};

export default ListInfo;
