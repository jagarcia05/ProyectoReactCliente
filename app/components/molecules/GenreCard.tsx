import type { Genre } from 'app/types/genre';

import Card from '../atoms/Card';

interface GenreCardProps {
    genre: Genre;

}
function GenreCard({ genre }: GenreCardProps) {
    return (
        <Card>
            <img src={genre.image_background} alt={genre.name} className="w-full h-50 object-cover rounded-t-lg" />
            <div className="p-4">
                <h3 className="text-2xl font-bold mb-2">{genre.name}</h3>
                <p>Cantidad de juegos: {genre.games_count}</p>
            </div>
        </Card>
    );
};

export default GenreCard;