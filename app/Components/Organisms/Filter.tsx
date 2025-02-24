import React, { useState } from 'react';

interface FiltersProps {
  onFilterChange: (filters: { genre: string; platform: string }) => void;
  genres: string[];
  platforms: string[];
}

const Filters: React.FC<FiltersProps> = ({ onFilterChange, genres, platforms }) => {
  const [selectedGenre, setSelectedGenre] = useState('');
  const [selectedPlatform, setSelectedPlatform] = useState('');

  // Maneja el cambio del género
  const handleGenreChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const genre = e.target.value;
    setSelectedGenre(genre);
    onFilterChange({ genre, platform: selectedPlatform });
  };

  // Maneja el cambio de la plataforma
  const handlePlatformChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const platform = e.target.value;
    setSelectedPlatform(platform);
    onFilterChange({ genre: selectedGenre, platform });
  };

  return (
    <div>
      <h3>Filters</h3>

      {/* Filtro por género */}
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

      {/* Filtro por plataforma */}
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
