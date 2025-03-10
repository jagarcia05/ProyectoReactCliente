import { FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid, FaGlobe } from 'react-icons/fa';
import { SiNintendo, SiMacos } from 'react-icons/si';
import { GiRetroController } from 'react-icons/gi';
import type { Game } from 'app/types/game';
import Card from '../atoms/Card';
import { useNavigate } from 'react-router-dom';

const platformIcons: Record<string, JSX.Element> = {
  pc: <FaWindows />,
  playstation: <FaPlaystation />,
  xbox: <FaXbox />,
  "nintendo switch": <SiNintendo />,
  "wii u": <SiNintendo />,
  ios: <FaApple />,
  android: <FaAndroid />,
  macos: <SiMacos />,
  linux: <FaLinux />,
  web: <FaGlobe />,
  "classic macintosh": <SiMacos />,
  "apple ii": <FaApple />,
  "commodore / amiga": <GiRetroController />,
  "atari": <GiRetroController />,
  genesis: <GiRetroController />,
  sega: <GiRetroController />,
  dreamcast: <GiRetroController />,
  "3do": <GiRetroController />,
  jaguar: <GiRetroController />,
  "game gear": <GiRetroController />,
  "neo geo": <GiRetroController />,
};

const getPlatformIconKey = (platformName: string) => {
  if (!platformName) return '';
  const name = platformName.toLowerCase();
  if (name.includes("playstation") || name.includes("ps vita")) return "playstation";
  if (name.includes("xbox")) return "xbox";
  if (name.includes("nintendo") || name.includes("wii u")) return "nintendo switch";
  if (name.includes("web")) return "web";
  return name;
};

interface GameCardProps {
  game: Game;
}

function GameCard({ game }: GameCardProps) {
  const navigate = useNavigate();

  return (
    <Card onClick={() => navigate(`/game/${game.id}`)}>
      <img src={game.background_image} alt={game.name} className="w-full h-50 object-cover rounded-t-lg" />
      <div className="p-4">
        <div className="flex space-x-2 text-xl mb-2">
          {Array.from(
            new Set(
              (game.platforms || []).map(p => getPlatformIconKey(p.platform.name))
            )
          ).map(platformKey => (
            <span key={platformKey}>{platformIcons[platformKey] || platformKey}</span>
          ))}
        </div>
        <h3 className="text-2xl font-bold mb-2">{game.name}</h3>
        <p>{game.genres?.map(g => g.name).join(' - ') || 'No genres available'}</p>
        <p>Released: {game.released || 'Unknown'}</p>
      </div>
    </Card>
  );
};

export default GameCard;
