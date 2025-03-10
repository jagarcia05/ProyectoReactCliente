import React, { useEffect, useState } from "react";
import { fetchPlatforms, fetchGenres } from "~/service/api";

interface FiltersProps {
  setFilters: (filters: { platform?: string; genre?: string }) => void;
}

const Filters: React.FC<FiltersProps> = ({ setFilters }) => {
  const [platforms, setPlatforms] = useState<string[]>([]);
  const [genres, setGenres] = useState<string[]>([]);
  const [selectedPlatform, setSelectedPlatform] = useState<string>("Todos");
  const [selectedGenre, setSelectedGenre] = useState<string>("Todos");
  const [isPlatformOpen, setIsPlatformOpen] = useState(false);
  const [isGenreOpen, setIsGenreOpen] = useState(false);

  useEffect(() => {
    const loadFilters = async () => {
      try {
        const platformData = await fetchPlatforms();
        const genreData = await fetchGenres();
        setPlatforms(["Todos", ...platformData.results.map((p: { name: string }) => p.name)]);
        setGenres(["Todos", ...genreData.results.map((g: { name: string }) => g.name)]);
      } catch (error) {
        console.error("Error fetching filters:", error);
      }
    };

    loadFilters();
  }, []);

  const handlePlatformSelect = (platform: string) => {
    setSelectedPlatform(platform);
    setFilters({ platform: platform === "Todos" ? undefined : platform, genre: selectedGenre === "Todos" ? undefined : selectedGenre });
    setIsPlatformOpen(false);
  };

  const handleGenreSelect = (genre: string) => {
    setSelectedGenre(genre);
    setFilters({ platform: selectedPlatform === "Todos" ? undefined : selectedPlatform, genre: genre === "Todos" ? undefined : genre });
    setIsGenreOpen(false);
  };

  const handleClearFilters = () => {
    setSelectedPlatform("Todos");
    setSelectedGenre("Todos");
    setFilters({});
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 pb-5">
      <div className="relative w-48">
        <label className="block text-sm font-medium text-gray-300 mb-1">Plataforma</label>
        <button
          className="flex items-center justify-between w-full px-4 py-2 text-white bg-gray-700 rounded-lg shadow hover:bg-gray-600"
          onClick={() => setIsPlatformOpen(!isPlatformOpen)}
        >
          {selectedPlatform} <span className="ml-2">&#9660;</span>
        </button>
        {isPlatformOpen && (
          <ul className="absolute left-0 mt-2 w-full bg-gray-800 text-white shadow-lg rounded-lg z-10 max-h-100 overflow-y-auto">
            {platforms.map((platform) => (
              <li
                key={platform}
                className="px-4 py-2 hover:bg-gray-600 cursor-pointer"
                onClick={() => handlePlatformSelect(platform)}
              >
                {platform}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="relative w-48">
        <label className="block text-sm font-medium text-gray-300 mb-1">Género</label>
        <button
          className="flex items-center justify-between w-full px-4 py-2 text-white bg-gray-700 rounded-lg shadow hover:bg-gray-600"
          onClick={() => setIsGenreOpen(!isGenreOpen)}
        >
          {selectedGenre} <span className="ml-2">&#9660;</span>
        </button>
        {isGenreOpen && (
          <ul className="absolute left-0 mt-2 w-full bg-gray-800 text-white shadow-lg rounded-lg z-10 max-h-100 overflow-y-auto">
            {genres.map((genre) => (
              <li
                key={genre}
                className="px-4 py-2 hover:bg-gray-600 cursor-pointer"
                onClick={() => handleGenreSelect(genre)}
              >
                {genre}
              </li>
            ))}
          </ul>
        )}
      </div>

      <button
        className="self-end px-4 py-2 text-white bg-red-600 rounded-lg shadow hover:bg-red-500"
        onClick={handleClearFilters}
      >
        Limpiar Filtros
      </button>
    </div>
  );
};

export default Filters;
