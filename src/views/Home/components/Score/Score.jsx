import { Box, Typography, useMediaQuery } from '@mui/material';
import PropTypes from 'prop-types';

const Score = ({ matchesLength, cardsLength }) => {
  const underTablet = useMediaQuery((theme) =>
    theme.breakpoints.down('tablet'),
  );

  return (
    <Box textAlign={'center'} marginBottom={underTablet ? 3 : 6}>
      <Typography
        variant={'h6'}
        fontWeight={500}
        fontSize={underTablet ? 17 : null}
      >
        Matches:{' '}
        <Typography variant={'span'} fontWeight={100}>
          {matchesLength}/{cardsLength / 2}
        </Typography>
      </Typography>
    </Box>
  );
};

Score.propTypes = {
  matchesLength: PropTypes.number.isRequired,
  cardsLength: PropTypes.number.isRequired,
};

export default Score;
