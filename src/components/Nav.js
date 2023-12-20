
import '../styles/Nav.css'
import logo from '../assets/images/lemonlogovertical.svg';


function Nav() {
    return (
        <nav className="Nav">
            <div className="Nav-logo">
                <img src={logo} alt="Lemon Logo" />
            </div>
            <div className="Nav-options">
                <ul>
                    <li>Home</li>
                    <li>Projects</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;