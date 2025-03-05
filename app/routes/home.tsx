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
  const [page, setPage] = useState<number>(1);
  const [nextPage, setNextPage] = useState<number | null>(null);
  const [prevPage, setPrevPage] = useState<number | null>(null);

  const navigate = useNavigate();

  // Fetch games from the API when the page changes
  useEffect(() => {
    const loadGames = async () => {
      setLoading(true);
      setError(null);
      try {
        const { games, nextPage, prevPage } = await fetchGames(page, 10); // 10 juegos por página
        setGames(games);
        setNextPage(nextPage);
        setPrevPage(prevPage);
      } catch {
        setError('Failed to load games');
      } finally {
        setLoading(false);
      }
    };
    loadGames();
  }, [page]);

  // Handle filter changes
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
        genres={['Action', 'Adventure', 'RPG']} // Reemplazar con géneros dinámicos si es necesario
        platforms={['PC', 'PlayStation', 'Xbox']} // Reemplazar con plataformas dinámicas si es necesario
        onFilterChange={handleFilterChange}
      />
      <GameList games={filteredGames} onGameClick={(id) => navigate(`/game/${id}`)} />

      {/* Paginación */}
      <div className="flex justify-center space-x-4 mt-4">
        <button
          onClick={() => setPage(prevPage!)}
          disabled={!prevPage}
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Anterior
        </button>
        <span className="px-4 py-2 bg-gray-200 rounded">Página {page}</span>
        <button
          onClick={() => setPage(nextPage!)}
          disabled={!nextPage}
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Siguiente
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
