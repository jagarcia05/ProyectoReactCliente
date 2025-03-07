import { useNavigate } from 'react-router-dom';
import ButtonHeader from '../atoms/ButtonHeader';

const NavigationMenu: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="hidden md:flex w-full md:w-1/3 justify-center ps-8" id="navbarNav">
      <ul className="flex w-full justify-between text-center">
        <li>
          <ButtonHeader text="Juegos" onClick={() => navigate(`/`)} />
        </li>
        <li>
          <ButtonHeader text="Plataformas" onClick={() => navigate(`/platforms`)} />
        </li>
        <li>
          <ButtonHeader text="Géneros" onClick={() => navigate(`/genres`)} />
        </li>
      </ul>
    </div>
  );
};

export default NavigationMenu;
