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
  const [nextPage, setNextPage] = useState<number | null>(null);
  const [prevPage, setPrevPage] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadGames = async () => {
      setLoading(true);
      setError(null);
      try {
        const { games, nextPage, prevPage } = await fetchGames(page, 12, searchTerm);
        setGames(games);
        setNextPage(nextPage);
        setPrevPage(prevPage);
      } catch {
        setError("Error al cargar los juegos");
      } finally {
        setLoading(false);
      }
    };

    loadGames();
  }, [page, searchTerm]);

  const filteredGames = games.filter((game) => {
    const matchesPlatform =
      !filters.platform || filters.platform === "Todos" || game.platforms.some((p) => p.platform.name === filters.platform);
    const matchesGenre =
      !filters.genre || filters.genre === "Todos" || game.genres.some((g) => g.name === filters.genre);

    return matchesPlatform && matchesGenre;
  });

  if (loading) return <div className="text-white">Cargando...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div className="flex flex-col py-4 px-15">

      <Filters setFilters={setFilters} />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredGames.length > 0 ? (
          filteredGames.map((game) => <GameCard key={game.id} game={game} />)
        ) : null}
      </div>

      {filteredGames.length === 0 && (
        <p className="text-white text-center mt-4">No hay juegos disponibles.</p>
      )}

      <div className="w-full flex justify-center mt-4">
        <Pagination page={page} nextPage={nextPage} prevPage={prevPage} setPage={setPage} />
      </div>
    </div>
  );

}

export default GameList;
