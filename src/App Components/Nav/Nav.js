
import './Nav.css'
import { Link } from 'react-router-dom';
import logo from 'assets/images/lemonlogohorizontal.svg';
import hamburger_icon from 'assets/images/icon_hamburger_menu.svg';


function Nav() {
    return (
        <nav className="Nav">
            <div className="Nav-logo">
                <img src={logo} alt="Lemon Logo" />
            </div>
            <div className="Nav-hamburger-icon">
                <img src={hamburger_icon} alt="Hamburger Icon" />
            </div>
            <div className="Nav-options">
                <ul>
                    <li><Link className='link-style' to="/">Home</Link></li>
                    <li>About</li>
                    <li>Menu</li>
                    <li><Link className='link-style' to="/reservation">Reservations</Link></li>
                    <li>Order Online</li>
                    <li>Login</li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;