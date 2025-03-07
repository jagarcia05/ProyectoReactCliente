import SearchInput from "../molecules/SearchInput";
import NavigationMenu from '../molecules/NavigationMenu';
import LogoHeader from '../molecules/LogoHeader';

interface HeaderProps {
    searchTerm: string;
    setSearchTerm: (term: string) => void;
}

const Header: React.FC<HeaderProps> = ({ searchTerm, setSearchTerm }) => {

    return (
        <header className="bg-black w-full py-4">
            <nav className="container mx-auto flex flex-col md:flex-row items-center justify-between px-15">

                <LogoHeader />

                <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

                <NavigationMenu />

            </nav>
        </header>
    );
};

export default Header;
