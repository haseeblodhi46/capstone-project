import React from 'react';
import './About.css'; // Updated import statement
import resturant_chefA from 'assets/images/restaurantchefA.jpg';
import resturant_chefB from 'assets/images/restaurantchefB.jpg';
const About = () => {
    return (
        <div className = "About">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist and fellation wna what not for content, keeping adding lemons. 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat </p>
            <div className = "image-div">
                <img src={resturant_chefB} height={270} width='100%'></img>
                <img src={resturant_chefA} height={270} width='100%'></img>
            </div>
        </div>
    );
};

export default About;
