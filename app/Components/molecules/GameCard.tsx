import React from 'react';
import type { Game, ApiResponse } from 'app/types/game'; // Correcto si verbatimModuleSyntax está habilitado

import Card from '../atoms/Card';
import Button from '../atoms/Button';

interface GameCardProps {
  game: Game;
  onClick: () => void;
}

const GameCard: React.FC<GameCardProps> = ({ game, onClick }) => {
  return (
    <Card>
      <img src={game.background_image} alt={game.name} style={{ width: '100%', borderRadius: '4px' }} />
      <h3>{game.name}</h3>
      <p>Rating: {game.rating}</p>
      <Button onClick={onClick}>View Details</Button>
    </Card>
  );
};

export default GameCard;