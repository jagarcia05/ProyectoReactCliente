import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchGames } from 'app/Service/api';
import GameList from '../Components/Organisms/GameList';
import type { Game } from 'app/types/game';

const SearchResults: React.FC = () => {
  const { search } = useLocation();
  const query = new URLSearchParams(search).get('query') || '';  // Extracción directa del query
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Llamada para obtener los juegos según el query
  useEffect(() => {
    const loadSearchResults = async () => {
      try {
        const { games } = await fetchGames(1, 10, query); // Aquí accede a "games"  // Desestructuración directa
        setGames(games);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
      } finally {
        setLoading(false);
      }
    };

    if (query) loadSearchResults();  // Asegurarse de que haya un query antes de hacer la solicitud
  }, [query]);  // Re-cargar resultados solo cuando el query cambia

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
