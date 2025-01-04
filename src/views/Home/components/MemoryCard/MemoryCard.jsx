import PropTypes from 'prop-types';
import { Avatar } from '@mui/material';
import { useState, useEffect } from 'react';

import { theme } from '../../../../shared/utils/theme';
import { Face } from '@mui/icons-material';

const MemoryCard = ({ name, onCardClick, matches, selectedCards }) => {
  const [isShown, setIsShown] = useState(false);
  const [preloadedImage, setPreloadedImage] = useState('');
  const [isMatch, setIsMatch] = useState(false);
  const [areImagesDisabled, setAreImagesDisabled] = useState(false);

  useEffect(() => {
    const image = new Image();
    image.src = `src/assets/${name}`;
    image.onload = () => setPreloadedImage(image.src);
  }, [name]);

  useEffect(() => {
    const reset = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setIsShown(false);
      setAreImagesDisabled(false);
    };

    if (matches.includes(name)) {
      setIsMatch(true);
      setAreImagesDisabled(false);
    } else if (
      selectedCards.length === 2 &&
      !isMatch &&
      !matches.includes(name)
    ) {
      setAreImagesDisabled(true);
      reset();
    }
  }, [matches, selectedCards, name, isMatch]);

  const handleCardClick = async () => {
    onCardClick(name);
    setIsShown(true);
  };

  return (
    <Avatar
      alt="Card image"
      src={isShown || isMatch ? preloadedImage : null}
      sx={{
        width: 175,
        height: 175,
        marginBottom: 3,
        boxShadow: `0px 0px 14px 3px ${isMatch ? theme.palette.success.main : theme.palette.primary.main}`,
        cursor: `${'pointer'}`,
        pointerEvents: `${areImagesDisabled ? 'none' : ''}`,
      }}
      variant={'rounded'}
      onClick={handleCardClick}
    >
      {!isShown && <Face fontSize={'large'} color={'primary'} />}
    </Avatar>
  );
};

MemoryCard.propTypes = {
  name: PropTypes.string.isRequired,
  onCardClick: PropTypes.func.isRequired,
  matches: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedCards: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default MemoryCard;
