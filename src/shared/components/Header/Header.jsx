import { Box, Typography } from '@mui/material';

const Header = () => {
  return (
    <Box
      bgcolor={'primary.main'}
      padding={1}
      textAlign={'center'}
      color={'background.paper'}
    >
      <Typography variant={'h1'} fontSize={25}>
        Svjetličić Memory Game
      </Typography>
    </Box>
  );
};

export default Header;
