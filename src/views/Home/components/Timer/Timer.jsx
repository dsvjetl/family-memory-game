import { Box, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { add } from '../../../../store/timeSlice';

const Timer = ({ isGameEnded, newGameStarted }) => {
  const [time, setTime] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);

    if (isGameEnded) {
      dispatch(add(formatTime(time)));
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [dispatch, isGameEnded, time]);

  useEffect(() => {
    if (newGameStarted) setTime(0);
  }, [newGameStarted]);

  const formatTime = (time) => {
    const minutes = String(Math.floor(time / 60)).padStart(2, '0');
    const seconds = String(time % 60).padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  return (
    <Box textAlign={'center'} marginTop={5}>
      <Typography variant={'h4'}>
        Time:{' '}
        <Typography
          variant={'span'}
          sx={{
            fontWeight: '200',
            color: 'secondary.main',
          }}
        >
          {formatTime(time)}
        </Typography>
      </Typography>
    </Box>
  );
};

Timer.propTypes = {
  isGameEnded: PropTypes.bool.isRequired,
  newGameStarted: PropTypes.bool.isRequired,
};

export default Timer;
