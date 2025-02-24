import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchGameDetails } from 'app/Service/api';
import type { Game } from 'app/types/game';

const GameDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Extraemos el parámetro 'id' de la URL
  const [game, setGame] = useState<Game | null>(null); // Estado para almacenar los detalles del juego
  const [loading, setLoading] = useState(true); // Estado de carga
  const [error, setError] = useState<string | null>(null); // Estado de error

  useEffect(() => {
    const loadGameDetails = async () => {
      if (id) {
        try {
          const data = await fetchGameDetails(id); // Llamamos a la API para obtener los detalles del juego
          setGame(data); // Establecemos los detalles del juego
        } catch (err) {
          // Verificamos si 'err' es una instancia de Error
          if (err instanceof Error) {
            setError(err.message); // Establecemos el mensaje de error si es un Error
          } else {
            setError('An unknown error occurred'); // Mensaje genérico si el error no es de tipo Error
          }
        } finally {
          setLoading(false); // Finalizamos el estado de carga
        }
      }
    };

    loadGameDetails();
  }, [id]); // Dependemos de 'id' para recargar los detalles del juego cuando cambie

  // Renderizamos diferentes estados según el estado de carga y error
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!game) return <div>Game not found</div>; // Si no se encuentra el juego, mostramos un mensaje

  // Renderizamos los detalles del juego si se han cargado correctamente
  return (
    <div>
      <h1>{game.name}</h1>
      <img src={game.background_image} alt={game.name} style={{ width: '100%' }} />
      
    </div>
  );
};

export default GameDetails;
