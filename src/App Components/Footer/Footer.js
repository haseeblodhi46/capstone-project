import './Footer.css'
import logo from 'assets/images/lemonlogovertical.png';
import React, { useEffect, useState, useRef} from "react";
function Footer() {

    const [navHeight, setNavHeight] = useState(0);

    useEffect(() => {
        let nav = document.querySelector('.Nav');
        setNavHeight(nav.clientHeight);
        console.log(navHeight);
    }, [navHeight]);

    const foot_style = {
        position: 'relative',
        top: navHeight+'px',
    }

    return (
        <footer style = {foot_style}>
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