import './Hero.css'
import resturant_food from 'assets/images/restaurantfood.jpg';


function Hero() {
    return (
        <div className = "Hero">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist</p>
            <button>Reserve a table</button>
            <img src={resturant_food}></img>
        </div>
    );
}

export default Hero;