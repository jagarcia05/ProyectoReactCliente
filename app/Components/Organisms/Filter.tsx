import React, { useState } from 'react';

interface FiltersProps {
  onFilterChange: (filters: { genre: string; platform: string }) => void;
  genres: string[];
  platforms: string[];
}

const Filters: React.FC<FiltersProps> = ({ onFilterChange, genres, platforms }) => {
  const [selectedGenre, setSelectedGenre] = useState<string>('');
  const [selectedPlatform, setSelectedPlatform] = useState<string>('');

  // Función que maneja el cambio de los filtros
  const handleGenreChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedGenre(event.target.value);
    onFilterChange({
      genre: event.target.value,
      platform: selectedPlatform,
    });
  };

  const handlePlatformChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedPlatform(event.target.value);
    onFilterChange({
      genre: selectedGenre,
      platform: event.target.value,
    });
  };

  return (
    <div>
      <h3>Filters</h3>

      {/* Filtro de género */}
      <div>
        <label htmlFor="genre">Genre: </label>
        <select id="genre" value={selectedGenre} onChange={handleGenreChange}>
          <option value="">All Genres</option>
          {genres.map((genre) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>
      </div>

      {/* Filtro de plataforma */}
      <div>
        <label htmlFor="platform">Platform: </label>
        <select id="platform" value={selectedPlatform} onChange={handlePlatformChange}>
          <option value="">All Platforms</option>
          {platforms.map((platform) => (
            <option key={platform} value={platform}>
              {platform}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Filters;
