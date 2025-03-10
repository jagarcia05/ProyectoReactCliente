import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchGameDetails } from '~/service/api';
import type { Game } from '~/types/game';

function GameDetails() {
  const { id } = useParams<{ id: string }>();
  const [game, setGame] = useState<Game | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;
    fetchGameDetails(id)
      .then((data) => {
        setGame(data);
        setLoading(false);
      })
      .catch((err) => {
        setError('Error fetching game details');
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p className="text-white">Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  if (!game) return <p className="text-white">Game not found</p>;

  return (
    <main className="bg-black min-h-screen p-5">
      <section className="max-w-4xl mx-auto text-white">
        <Link to="/" className="btn border border-white text-white py-2 px-4 inline-block mb-4">&larr; Back</Link>
        <div className="bg-gray-700 p-5 rounded-lg">
          <img src={game.background_image} alt={game.name} className="w-full h-auto object-cover rounded-lg" />
          <h2 className="text-3xl font-bold mt-4">{game.name}</h2>
          <p className="text-gray-400">Released: {game.released}</p>
          <div className="mt-3">
            <p className="font-semibold">Platforms:</p>
            <ul className="list-disc list-inside">
              {game.platforms.map((p, index) => (
                <li key={index}>{p.platform.name}</li>
              ))}
            </ul>
          </div>
          <div className="mt-3">
            <p className="font-semibold">Genres:</p>
            <ul className="list-disc list-inside">
              {game.genres.map((g, index) => (
                <li key={index}>{g.name}</li>
              ))}
            </ul>
          </div>
          <div className="mt-5">
            <p dangerouslySetInnerHTML={{ __html: game.description }}></p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default GameDetails;