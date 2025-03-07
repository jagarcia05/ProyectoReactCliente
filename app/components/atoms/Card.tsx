interface CardProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ children, onClick }) => {
  return (
    <div
      className={`bg-gray-700 rounded-lg shadow-lg text-white ${onClick ? 'cursor-pointer' : ''}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Card;
