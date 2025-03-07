interface ButtonHeaderProps {
  text: string;
  onClick: () => void;
}

const ButtonHeader: React.FC<ButtonHeaderProps> = ({ text, onClick }) => {
  return (
    <button
      className="text-white font-bold hover:text-gray-400"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default ButtonHeader;