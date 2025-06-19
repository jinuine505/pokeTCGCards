import { Link } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faStar } from '@fortawesome/free-solid-svg-icons';
import '../css/NavBar.css';
import logo from '/pokeball.webp';
import SearchBar from './SearchBar';

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="nav-brand">
                <Link to="/"><img src={logo} title="TCG Pocket Database" /></Link>
            </div>
            <div className="nav-search-bar">
                <SearchBar />
            </div>
            <div className="nav-links">
                <Link className="nav-link" to="/" title="Home"><FontAwesomeIcon icon={faHouse} /></Link>
                <Link className="nav-link" to="/favorites" title="Starred"><FontAwesomeIcon icon={faStar} /></Link>
            </div>
        </nav>
    );
}
 
export default NavBar
