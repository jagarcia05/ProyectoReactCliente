import { useState, useEffect } from "react";
import type { Game } from "app/types/game";
import GameCard from "../molecules/GameCard";
import Filters from "../molecules/Filters";
import Pagination from "../molecules/Pagination";
import { fetchGames } from "../../service/api";

interface GameListProps {
  searchTerm?: string;
}

function GameList({ searchTerm = "" }: GameListProps) {
  const [games, setGames] = useState<Game[]>([]);
  const [filters, setFilters] = useState<{ platform?: string; genre?: string }>({});
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadGames = async () => {
      setLoading(true);
      setError(null);
      try {
        const { games } = await fetchGames(1, 100, searchTerm);
        setGames(games);
        setPage(1); 
      } catch {
        setError("Error al cargar los juegos");
      } finally {
        setLoading(false);
      }
    };

    loadGames();
  }, [searchTerm]);

  useEffect(() => {
    setPage(1);
  }, [filters]);

  const filteredGames = games.filter((game) => {
    const matchesPlatform =
      !filters.platform || filters.platform === "Todos" || game.platforms.some((p) => p.platform.name === filters.platform);
    const matchesGenre =
      !filters.genre || filters.genre === "Todos" || game.genres.some((g) => g.name === filters.genre);

    return matchesPlatform && matchesGenre;
  });

  const pageSize = 12;
  const totalPages = Math.ceil(filteredGames.length / pageSize);
  const paginatedGames = filteredGames.slice((page - 1) * pageSize, page * pageSize);

  if (loading) return <div className="text-white">Cargando...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div className="flex flex-col py-4 px-15">
      <Filters setFilters={setFilters} />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {paginatedGames.length > 0 ? (
          paginatedGames.map((game) => <GameCard key={game.id} game={game} />)
        ) : null}
      </div>

      {paginatedGames.length === 0 && (
        <p className="text-white text-center mt-4">No hay juegos disponibles.</p>
      )}

      <div className="w-full flex justify-center mt-4">
        {totalPages > 1 && (
          <Pagination page={page} totalPages={totalPages} setPage={setPage} />
        )}
      </div>
    </div>
  );
}

export default GameList;