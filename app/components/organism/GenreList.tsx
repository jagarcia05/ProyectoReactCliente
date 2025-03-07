import type { Genre } from 'app/types/genre';
import GenreCard from '../molecules/GenreCard';

interface GenreListProps {
  genres: Genre[];
}

function GenreList({ genres }: GenreListProps) {
  return (
    <div className="flex flex-wrap justify-center py-4 px-15">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {genres.map((genre) => (
          <GenreCard
            key={genre.id}
            genre={genre}
          />
        ))}
      </div>
    </div>
  );
}

export default GenreList;
