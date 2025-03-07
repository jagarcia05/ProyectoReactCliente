import { useOutletContext } from "react-router-dom";
import GameList from "~/components/organism/GameList";

const Games: React.FC = () => {
  const { searchTerm } = useOutletContext<{ searchTerm: string }>();

  return (
    <div className="bg-black text-white">
      <div className="container mx-auto py-4">
        <GameList searchTerm={searchTerm} />
      </div>
    </div>
  );
};

export default Games;
