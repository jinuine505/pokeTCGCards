import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useLocation } from "react-router";
import "../css/SearchBar.css"

const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    // Extract query
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);

    // Update search bar with query in the url
    useEffect(() => {
        setSearchQuery(searchParams.get("query") || "");
    }, [location.search])

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/search?query=${searchQuery.trim()}`);
    };

    return (
        <form className="search-bar " onSubmit={handleSubmit}>
            <input className="search-input"
                type="text"
                placeholder="Search Cards"
                value={searchQuery}
                required
                onChange={(e) => { setSearchQuery(e.target.value) }}
            />
            <button className="search-btn" type="submit"><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
        </form>
    );
}

export default SearchBar;