import React from 'react';
import './About.css'; // Updated import statement
import resturant_chef from 'assets/images/restaurantchefB.jpg';
const About = () => {
    return (
        <div className = "About">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist</p>
            <img src={resturant_chef} height={270} width='100%'></img>
        </div>
    );
};

export default About;
