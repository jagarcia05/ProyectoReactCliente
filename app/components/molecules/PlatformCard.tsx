import type { Platform } from 'app/types/platform';
import Card from '../atoms/Card';

interface PlatformCardProps {
    platform: Platform;

}
function PlatformCard({ platform }: PlatformCardProps) {
    return (
        <Card>
            <img src={platform.image_background} alt={platform.name} className="w-full h-50 object-cover rounded-t-lg" />
            <div className="p-4">
                <h3 className="text-2xl font-bold mb-2">{platform.name}</h3>
                <p>Cantidad de juegos: {platform.games_count}</p>
            </div>
        </Card>
    );
};

export default PlatformCard;