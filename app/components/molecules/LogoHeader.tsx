import { useNavigate } from 'react-router-dom';
import Logo from "../../assets/logo.png";

const LogoHeader: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="w-1/5 md:w-1/6">
      <div onClick={() => navigate(`/`)} className="cursor-pointer">
        <img src={Logo} alt="Logo" className="" />
      </div>
    </div>
  );
};

export default LogoHeader;
