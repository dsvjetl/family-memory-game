import { Box, Container, Stack } from '@mui/material';
import { MemoryCard } from '../MemoryCard';
import { cards } from '../../constants/cards';
import { useEffect, useState } from 'react';

const MemoryGame = () => {
  const [shuffledCards, setShuffledCards] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  const [matches, setMatches] = useState([]);
  const [cardName, setCardName] = useState('');

  useEffect(() => {
    setShuffledCards(cards.concat(cards).sort(() => Math.random() - 0.5));
  }, []);

  useEffect(() => {
    if (matches.includes(cardName)) return;

    if (selectedCards.length === 3) {
      setSelectedCards([]);
    }

    if (selectedCards.length === 2 && selectedCards[0] === cardName) {
      setMatches((cards) => [...cards, cardName]);
      setSelectedCards([]);
    }

    if (selectedCards.length === 2 && selectedCards[0] !== cardName) {
      setSelectedCards([]);
    }
  }, [selectedCards, cardName, matches]);

  const onCardClick = async (cardName) => {
    setSelectedCards((cards) => [...cards, cardName]);
    setCardName(cardName);
  };

  return (
    <Container maxWidth={'desktop'}>
      <Box marginTop={10}>
        <Stack
          direction="row"
          flexWrap={'wrap'}
          justifyContent={'space-between'}
        >
          {shuffledCards.map((card, index) => (
            <MemoryCard
              key={index}
              name={card}
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
