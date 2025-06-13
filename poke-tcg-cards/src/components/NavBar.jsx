import { Link } from 'react-router'
import '../css/NavBar.css'
import logo from '../assets/pokeball.webp'

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="nav-brand">
                <Link to="/"><img src={logo} title="Pokemon TCG Database" /></Link>
            </div>
            <div className="nav-links">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/favorites">Favorites</Link>
            </div>
        </nav>
    );
}
 
export default NavBar
