import './Hero.css'
import resturant_food from 'assets/images/restaurantfood.jpg';
import Button from 'assets/reusable_components/Button/Button.js';
import React, { useEffect, useState, useRef} from "react";

function Hero() {

   const [navHeight, setNavHeight] = useState(0);

    useEffect(() => {
        let nav = document.querySelector('.Nav');
        setNavHeight(nav.clientHeight);
        console.log(navHeight);
    }, [navHeight]);

    const hero_style = {
        position: 'relative',
        top: navHeight+'px',
    }


    return (
        <div className = "Hero">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist</p>
            <Button text={'Reserve a table'} linkto = {'/BookingPage'}/>
            <img src={resturant_food}></img>
        </div>
    );
}

export default Hero;