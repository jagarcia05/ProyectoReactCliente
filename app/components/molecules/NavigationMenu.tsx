import ButtonHeader from '../atoms/ButtonHeader';

const NavigationMenu: React.FC = () => {
  const handleNavigation = (path: string) => {
    window.location.href = path;
  };

  return (
    <div className="hidden md:flex w-full md:w-1/3 justify-center ps-8" id="navbarNav">
      <ul className="flex w-full justify-between text-center">
        <li>
          <ButtonHeader text="Juegos" onClick={() => handleNavigation(`/`)} />
        </li>
        <li>
          <ButtonHeader text="Plataformas" onClick={() => handleNavigation(`/platforms`)} />
        </li>
        <li>
          <ButtonHeader text="Géneros" onClick={() => handleNavigation(`/genres`)} />
        </li>
      </ul>
    </div>
  );
};

export default NavigationMenu;
