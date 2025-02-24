import React from 'react';
import type { Game } from 'app/types/game';
import GameCard from '../molecules/GameCard';

interface GameListProps {
  games: Game[];
  onGameClick: (id: number) => void;
}

function GameList({ games, onGameClick }: GameListProps) {
  return (
    <div className="flex flex-wrap justify-center gap-8 p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {games.map((game) => (
          <GameCard
            key={game.id}
            game={game}
            onClick={() => onGameClick(game.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default GameList;
