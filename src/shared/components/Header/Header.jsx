import { Box, Typography, useMediaQuery } from '@mui/material';

const Header = () => {
  const underTablet = useMediaQuery((theme) =>
    theme.breakpoints.down('tablet'),
  );

  return (
    <Box
      bgcolor={'primary.main'}
      padding={1}
      textAlign={'center'}
      color={'background.paper'}
    >
      <Typography
        variant={'h1'}
        fontSize={underTablet ? 20 : 25}
        fontWeight={500}
      >
        Svjetličić Memory Game
      </Typography>
    </Box>
  );
};

export default Header;
