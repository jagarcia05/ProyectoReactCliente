import React, { useEffect, useState } from 'react';
import { fetchGenres } from '../service/api';
import GenreList from '~/components/organism/GenreList';
import { useOutletContext } from "react-router-dom";
import type { Genre } from 'app/types/genre';

const Genres: React.FC = () => {
    const { searchTerm } = useOutletContext<{ searchTerm: string }>();
    const [genres, setGenres] = useState<Genre[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadGenres = async () => {
            try {
                const { results } = await fetchGenres();
                setGenres(results);
            } catch {
                setError('Failed to load genres');
            } finally {
                setLoading(false);
            }
        };
        loadGenres();
    }, []);

    const filteredGenres = genres.filter((genre) =>
        genre.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (loading) return <div className="text-white">Loading...</div>;
    if (error) return <div className="text-red-500">Error: {error}</div>;

    return (
        <div className="container mx-auto p-4 bg-black flex flex-col">
            <GenreList genres={filteredGenres} />

            {filteredGenres.length === 0 && (
                <p className="text-white text-center mt-4">No hay géneros disponibles.</p>
            )}
        </div>
    );
};

export default Genres;
