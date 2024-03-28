import React from 'react';
import './About.css'; // Updated import statement
import resturant_chefA from 'assets/images/restaurantchefA.jpg';
import resturant_chefB from 'assets/images/restaurantchefB.jpg';
const About = () => {
    return (
        <div className = "About">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>We are a family-owned Mediterranean restaurant, dedicated to preserving time-honored recipes while infusing them with a contemporary flair. Our culinary journey takes you on a delightful exploration of rich flavors, vibrant spices, and fresh ingredients. Whether you're savoring our classic hummus, indulging in grilled kebabs, or relishing our flaky baklava. </p>
            <div className = "image-div">
                <img src={resturant_chefB} height={270} width='100%'></img>
                <img src={resturant_chefA} height={270} width='100%'></img>
            </div>
        </div>
    );
};

export default About;
