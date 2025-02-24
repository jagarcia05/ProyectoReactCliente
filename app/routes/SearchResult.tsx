import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchGames } from 'app/Service/api';
import GameList from '../Components/Organisms/GameList';
import type { Game, ApiResponse } from 'app/types/game'; // Correcto si verbatimModuleSyntax está habilitado

const SearchResults: React.FC = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('query') || '';
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadSearchResults = async () => {
      try {
        const data = await fetchGames(1, query);
        setGames(data.results);
      } catch (err) {
        // Comprobamos si 'err' es una instancia de Error
        if (err instanceof Error) {
          setError(err.message); // Accedemos a 'message' solo si es un Error
        } else {
          setError('An unknown error occurred'); // Manejo de errores desconocidos
        }
      } finally {
        setLoading(false);
      }
    };

    loadSearchResults();
  }, [query]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Search Results for "{query}"</h1>
      <GameList games={games} onGameClick={(id) => console.log(id)} />
    </div>
  );
};

export default SearchResults;
