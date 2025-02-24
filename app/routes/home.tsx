import React, { useEffect, useState } from 'react';
import { fetchGames } from '../Service/api';
import GameList from '../Components/Organisms/GameList';
import SearchBar from '../Components/molecules/SearchBar';
import Filters from '../Components/Organisms/Filter';
import { useNavigate } from 'react-router-dom';
import type { Game, ApiResponse } from 'app/types/game';
import Footer from '~/Layout/Footer';

const Home: React.FC = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filters, setFilters] = useState({ genre: '', platform: '' });
  const navigate = useNavigate();

  useEffect(() => {
    const loadGames = async () => {
      try {
        const data = await fetchGames();
        setGames(data.results);
      } catch (err) {
        setError('Failed to load games');
      } finally {
        setLoading(false);
      }
    };

    loadGames();
  }, []);

  const handleFilterChange = (newFilters: { genre: string; platform: string }) => {
    setFilters(newFilters);
  };

  // Función para manejar la búsqueda
  const handleSearch = (query: string) => {
    navigate(`/search?query=${query}`); // Redirige a la página de resultados de búsqueda con el query
  };

  const filteredGames = games.filter((game) => {
    const matchesGenre = filters.genre ? game.genres.some((g) => g.name === filters.genre) : true;
    const matchesPlatform = filters.platform ? game.platforms.some((p) => p.platform.name === filters.platform) : true;
    return matchesGenre && matchesPlatform;
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <Filters
        genres={['Action', 'Adventure', 'RPG']}
        platforms={['PC', 'PlayStation', 'Xbox']}
        onFilterChange={handleFilterChange}
      />
      <GameList games={filteredGames} onGameClick={(id) => navigate(`/game/${id}`)} />
      <Footer />
    </div>
  );
};

export default Home;
