import React, { useEffect, useState } from 'react';
import { fetchGames } from '../Service/api';
import GameList from '../Components/Organisms/GameList';
import SearchBar from '../Components/molecules/SearchBar';
import Filters from '../Components/Organisms/Filter';
import { useNavigate } from 'react-router-dom';
import type { Game } from 'app/types/game';
import Footer from '~/Layout/Footer';

const Home: React.FC = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [filters, setFilters] = useState({ genre: '', platform: '' });
  const navigate = useNavigate();

  // Fetch games from the API on initial load
  useEffect(() => {
    const loadGames = async () => {
      try {
        const { results } = await fetchGames(); // Direct destructuring for 'results'
        setGames(results);
      } catch {
        setError('Failed to load games');
      } finally {
        setLoading(false);
      }
    };
    loadGames();
  }, []);

  // Handle the filter change event
  const handleFilterChange = (newFilters: { genre: string; platform: string }) => setFilters(newFilters);

  // Handle search query and navigate to search results page
  const handleSearch = (query: string) => navigate(`/search?query=${query}`);

  // Apply filters to the list of games
  const filteredGames = games.filter((game) => {
    const matchesGenre = filters.genre ? game.genres.some((g) => g.name === filters.genre) : true;
    const matchesPlatform = filters.platform ? game.platforms.some((p) => p.platform.name === filters.platform) : true;
    return matchesGenre && matchesPlatform;
  });

  // Render loading, error, or the main content based on the state
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container mx-auto p-4">
      <SearchBar onSearch={handleSearch} />
      <Filters
        genres={['Action', 'Adventure', 'RPG']} // Replace with dynamic genres if needed
        platforms={['PC', 'PlayStation', 'Xbox']} // Replace with dynamic platforms if needed
        onFilterChange={handleFilterChange}
      />
      <GameList games={filteredGames} onGameClick={(id) => navigate(`/game/${id}`)} />
      <Footer />
    </div>
  );
};

export default Home;
