import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchGameDetails } from 'app/Service/api';
import type { Game } from 'app/types/game';

const GameDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [game, setGame] = useState<Game | null>(null);

  useEffect(() => {
    const loadGameDetails = async () => {
      if (id) { // Verificamos si 'id' no es undefined
        const data = await fetchGameDetails(id);
        setGame(data);
      }
    };

    loadGameDetails();
  }, [id]);

  if (!game) return <div>Loading...</div>;

  return (
    <div>
      <h1>{game.name}</h1>
      <img src={game.background_image} alt={game.name} style={{ width: '100%' }} />
    </div>
  );
};

export default GameDetails;
