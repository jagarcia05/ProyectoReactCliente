import Logo from "../../assets/logo.png";

const LogoHeader: React.FC = () => {
  const handleNavigation = () => {
    window.location.href = `/`;
  };

  return (
    <div className="w-1/5 md:w-1/6">
      <div onClick={handleNavigation} className="cursor-pointer">
        <img src={Logo} alt="Logo" />
      </div>
    </div>
  );
};

export default LogoHeader;
