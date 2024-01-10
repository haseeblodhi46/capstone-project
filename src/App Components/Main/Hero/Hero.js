import './Hero.css'
import resturant_food from 'assets/images/restaurantfood.jpg';
import Button from 'assets/reusable_components/Button/Button.js';


function Hero() {
    return (
        <div className = "Hero">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist</p>
            <Button text={'Reserve a table'}/>
            <img src={resturant_food}></img>
        </div>
    );
}

export default Hero;