interface SearchInputProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="w-3/5 md:w-1/2 px-5 relative">
      <input
        className="w-full p-2 rounded-lg outline-none border border-white text-white pr-10"
        type="text"
        placeholder="Buscar..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {searchTerm && (
        <button
          className="absolute right-7 top-1/2 transform -translate-y-1/2 text-white"
          onClick={() => setSearchTerm("")}
        >
          ✖
        </button>
      )}
    </div>
  );
};

export default SearchInput;
