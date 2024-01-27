import './Footer.css'
import logo from 'assets/images/lemonlogovertical.png';
function Footer() {
    return (
        <footer>
            <img src={logo}></img>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Menu</li>
                <li>Reservations</li>
                <li>Order Online</li>
                <li>Login</li>
                <li>Contact</li>
            </ul>
             <p>© 2021 - All Rights Reserved</p>
        </footer>
    )
}

export default Footer;