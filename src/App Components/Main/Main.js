import './Main.css'
import Hero from './Hero/Hero.js';
import Highlights from './Highlights/Highlights.js';
import Testimonials from './Testimonials/Testimonials.js';
import About from './About/About.js';
import React, { useEffect, useState, useRef} from "react";


function Main() {

    const [navHeight, setNavHeight] = useState(0);

    useEffect(() => {
        let nav = document.querySelector('.Nav');
        setNavHeight(nav.clientHeight);
        console.log(navHeight);
    }, [navHeight]);

    const main_style = {
        position: 'relative',
        top: navHeight+'px',
    }

    return (
        <main className = "Main" style = {main_style}>
            <Hero />
            <Highlights />
            <Testimonials />
            <About />
        </main>
    )
}

export default Main;