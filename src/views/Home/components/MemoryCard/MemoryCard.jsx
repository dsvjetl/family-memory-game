import PropTypes from 'prop-types';
import { Avatar, useMediaQuery } from '@mui/material';
import { useEffect, useState } from 'react';
import { Face } from '@mui/icons-material';

import { theme } from '../../../../shared/utils/theme';
import { Card } from '../../models';

const MemoryCard = ({ card, onCardClick, matches, disabled }) => {
  const [isMatch, setIsMatch] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const underLaptop = useMediaQuery(theme.breakpoints.down('laptop'));
  const underTablet = useMediaQuery(theme.breakpoints.down('tablet'));

  useEffect(() => {
    const isMatch =
      matches.some((match) => match.p_key === card.p_key) ||
      matches.some((match) => match.f_key === card.f_key) ||
      matches.some((match) => match.p_key === card.f_key) ||
      matches.some((match) => match.f_key === card.p_key);

    setIsMatch(isMatch);

    if (!isMatch) {
      setIsVisible(false);
    }
  }, [card.f_key, card.p_key, matches]);

  useEffect(() => {
    if (!disabled) setIsVisible(false);
  }, [disabled]);

  const handleCardClick = () => {
    if (isVisible) {
      return;
    }

    onCardClick(card);
    setIsVisible(true);
  };

  const avatarSize = () => {
    let size = 165;

    if (underLaptop) {
      size = 110;
    }

    if (underTablet) {
      size = 75;
    }

    return {
      width: size,
      length: size,
    };
  };

  return (
    <>
      {/*< Hidden avatars for better rendering >*/}
      <Avatar
        alt="Card image"
        src={`images/${card.fileName}`}
        sx={{
          width: avatarSize().width,
          height: avatarSize().length,
          marginBottom: 3,
          visibility: 'hidden',
          display: 'none',
        }}
        variant={'rounded'}
      />
      {/*</ Hidden avatars for better rendering >*/}
      {isVisible || isMatch ? (
        <Avatar
          alt="Card image"
          src={`images/${card.fileName}`}
          sx={{
            width: avatarSize().width,
            height: avatarSize().length,
            marginBottom: 3,
            boxShadow: `0px 0px 14px 3px ${isMatch ? theme.palette.success.main : theme.palette.primary.main}`,
            pointerEvents: `${disabled ? 'none' : ''}`,
          }}
          variant={'rounded'}
        />
      ) : (
        <Avatar
          alt="Card logo"
          sx={{
            width: avatarSize().width,
            height: avatarSize().length,
            marginBottom: 3,
            boxShadow: `0px 0px 14px 3px ${theme.palette.primary.main}`,
            cursor: `${'pointer'}`,
            pointerEvents: `${disabled ? 'none' : ''}`,
          }}
          variant={'rounded'}
          onClick={handleCardClick}
        >
          <Face fontSize={'large'} color={'primary'} />
        </Avatar>
      )}
    </>
  );
};

MemoryCard.propTypes = {
  card: PropTypes.shape(Card).isRequired,
  onCardClick: PropTypes.func.isRequired,
  matches: PropTypes.arrayOf(
    PropTypes.shape({
      p_key: PropTypes.number.isRequired,
      f_key: PropTypes.number.isRequired,
    }),
  ).isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default MemoryCard;
