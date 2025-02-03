import {
  Box,
  Container,
  Stack,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Confetti from 'react-confetti';

import { MemoryCard } from '../MemoryCard';
import { cards } from '../../constants';
import { Timer } from '../Timer';
import { Score } from '../Score';
import { Dialog } from '../../../../shared/components/Dialog';
import { delay } from '../../../../shared/utils/delay';
import { theme } from '../../../../shared/utils/theme';

const MemoryGame = () => {
  const [shuffledCards, setShuffledCards] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  const [matches, setMatches] = useState([]);
  const [isGameEnded, setIsGameEnded] = useState(false);
  const [areCardsDisabled, setAreCardsDisabled] = useState(false);
  const [hasNewGameStarted, setHasNewGameStarted] = useState(false);

  const finalTime = useSelector((state) => state.time.finalTime);
  const overTablet = useMediaQuery(theme.breakpoints.up('tablet'));
  const underTablet = useMediaQuery(theme.breakpoints.down('tablet'));

  const delayLength = 1500;

  useEffect(() => {
    setShuffledCards([...cards].sort(() => Math.random() - 0.5));
  }, []);

  useEffect(() => {
    const wait = async () => await delay(delayLength);

    if (
      selectedCards.length === 2 &&
      selectedCards[0].p_key === selectedCards[1].p_key
    ) {
      return;
    }

    if (
      selectedCards.length === 2 &&
      selectedCards[1].f_key === selectedCards[0].p_key
    ) {
      setMatches((matches) => [
        ...matches,
        {
          p_key: selectedCards[0].p_key,
          f_key: selectedCards[0].f_key,
        },
      ]);
    }

    if (
      selectedCards.length === 2 &&
      selectedCards[1].f_key !== selectedCards[0].p_key
    ) {
      setAreCardsDisabled(true);
      wait().then(() => {
        setAreCardsDisabled(false);
      });
    }

    if (selectedCards.length >= 2) setSelectedCards([]);
  }, [selectedCards]);

  useEffect(() => {
    if (matches.length >= cards.length / 2) {
      setIsGameEnded(true);
    }
  }, [matches]);

  const onCardClick = (card) => {
    if (hasNewGameStarted) setHasNewGameStarted(false);

    setSelectedCards((cards) => [...cards, card]);
  };

  const playAgain = () => {
    setShuffledCards([...cards].sort(() => Math.random() - 0.5));
    setMatches([]);
    setIsGameEnded(false);
    setHasNewGameStarted(true);
  };

  const renderDialog = () => (
    <Dialog openDialog={isGameEnded} playAgain={playAgain}>
      <Box>
        <Typography
          variant={'h4'}
          textAlign={'center'}
          color={'success'}
          marginBottom={1}
        >
          You won!
        </Typography>
        <Typography variant={'h4'} fontSize={underTablet ? '30px' : null}>
          Your time:{' '}
          <Typography variant={'span'} fontWeight={'100'}>
            {finalTime}
          </Typography>
        </Typography>
      </Box>
    </Dialog>
  );

  return (
    <Container maxWidth="desktop">
      {renderDialog()}
      {isGameEnded && <Confetti />}
      <Timer isGameEnded={isGameEnded} newGameStarted={hasNewGameStarted} />
      <Score cardsLength={cards.length} matchesLength={matches.length} />
      <Box>
        <Stack
          direction="row"
          flexWrap="wrap"
          justifyContent={'space-between'}
          columnGap={overTablet ? 2.1 : 1}
        >
          {shuffledCards.map((card) => (
            <MemoryCard
              key={card.p_key}
              card={card}
              onCardClick={onCardClick}
              matches={matches}
              selectedCards={selectedCards}
              disabled={areCardsDisabled}
            />
          ))}
        </Stack>
      </Box>
    </Container>
  );
};

export default MemoryGame;
