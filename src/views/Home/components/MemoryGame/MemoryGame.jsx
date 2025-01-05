import { Box, Container, Stack } from '@mui/material';
import { useEffect, useState } from 'react';
import { MemoryCard } from '../MemoryCard';
import { cards } from '../../constants';
import { shuffleArray } from '../../../../shared/utils/shuffleArray';

const MemoryGame = () => {
  const [shuffledCards, setShuffledCards] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    setShuffledCards(shuffleArray(cards));
    console.log({ shuffledCards });
  }, [shuffledCards]);

  useEffect(() => {
    console.log({ selectedCards });

    if (selectedCards.length && selectedCards[0].fileName === 'iva-3.png') {
      alert('Catch!');
    }
  }, [selectedCards]);

  const onCardClick = (card) => {
    setSelectedCards((cards) => [...cards, card]);
  };

  return (
    <Container maxWidth={'desktop'}>
      <Box marginTop={10}>
        <Stack
          direction="row"
          flexWrap={'wrap'}
          justifyContent={'space-between'}
        >
          {shuffledCards.map((card) => (
            <MemoryCard
              key={card.p_key}
              card={card}
              onCardClick={onCardClick}
              matches={matches}
              selectedCards={selectedCards}
            />
          ))}
        </Stack>
      </Box>
    </Container>
  );
};

export default MemoryGame;
