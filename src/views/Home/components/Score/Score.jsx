import { Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';

const Score = ({ matchesLength, cardsLength }) => {
  return (
    <Box textAlign={'center'} marginBottom={6}>
      <Typography variant={'h6'} fontWeight={400}>
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
