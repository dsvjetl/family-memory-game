import PropTypes from 'prop-types';
import { Avatar } from '@mui/material';
import { useState, useEffect } from 'react';
import { Face } from '@mui/icons-material';

import { theme } from '../../../../shared/utils/theme';
import { Card } from '../../models';

const MemoryCard = ({ card, onCardClick }) => {
  const [preloadedImage, setPreloadedImage] = useState('');

  useEffect(() => {
    const image = new Image();
    image.src = `src/assets/${card.fileName}`;
    image.onload = () => setPreloadedImage(image.src);
  }, [card.fileName]);

  const handleCardClick = () => {
    console.log({ card });
    onCardClick(card);
  };

  return (
    <Avatar
      alt="Card image"
      src={preloadedImage}
      sx={{
        width: 175,
        height: 175,
        marginBottom: 3,
        boxShadow: `0px 0px 14px 3px ${true ? theme.palette.success.main : theme.palette.primary.main}`,
        cursor: `${'pointer'}`,
        // pointerEvents: `${areImagesDisabled ? 'none' : ''}`,
      }}
      variant={'rounded'}
      onClick={handleCardClick}
    >
      {!true && <Face fontSize={'large'} color={'primary'} />}
    </Avatar>
  );
};

MemoryCard.propTypes = {
  card: PropTypes.shape(Card).isRequired,
  onCardClick: PropTypes.func.isRequired,
  matches: PropTypes.arrayOf(PropTypes.shape(Card)).isRequired,
  selectedCards: PropTypes.arrayOf(PropTypes.shape(Card)).isRequired,
};

export default MemoryCard;
