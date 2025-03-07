import type { Platform } from 'app/types/platform';
import PlatformCard from '../molecules/PlatformCard';

interface PlatformListProps {
  platforms: Platform[];
}

function PlatformList({ platforms }: PlatformListProps) {
  return (
    <div className="flex flex-wrap justify-center py-4 px-15">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {platforms.map((platform) => (
          <PlatformCard
            key={platform.id}
            platform={platform}
          />
        ))}
      </div>
    </div>
  );
}

export default PlatformList;
