import React, { useEffect, useState } from 'react';
import { fetchPlatforms } from '../service/api';
import PlatformList from '~/components/organism/PlatformList';
import type { Platform } from 'app/types/platform';
import { useOutletContext } from "react-router-dom";

const Platforms: React.FC = () => {
  const { searchTerm } = useOutletContext<{ searchTerm: string }>();
  const [platforms, setPlatforms] = useState<Platform[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPlatforms = async () => {
      try {
        const { results } = await fetchPlatforms();
        setPlatforms(results);
      } catch {
        setError('Failed to load platforms');
      } finally {
        setLoading(false);
      }
    };
    loadPlatforms();
  }, []);

  const filteredPlatforms = platforms.filter((platform) =>
    platform.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <div className="text-white">Loading...</div>;
  if (error) return <div className="text-red-500">Error: {error}</div>;

  return (
    <div className="container mx-auto p-4 bg-black flex flex-col">
      <PlatformList platforms={filteredPlatforms} />

      {filteredPlatforms.length === 0 && (
        <p className="text-white text-center mt-4">No hay plataformas disponibles.</p>
      )}
    </div>
  );
};

export default Platforms;
