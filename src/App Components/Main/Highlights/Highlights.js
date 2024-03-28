import './Highlights.css'
import Button from 'assets/reusable_components/Button/Button.js';
import Card from 'assets/reusable_components/Card/Card.js';
import bruchetta from 'assets/images/bruchetta.png';
import greek_salad from 'assets/images/greek salad.jpg';
import lemon_dessert from 'assets/images/lemon dessert.jpg';

function Highlights() {
    return (
        <div className = "Highlights">
            <h1>This Weeks Specials!</h1>
            <Card
            idname = "first"
            alt = "bruchetta"
            image = {bruchetta}
            foodname = {"Bruchetta"}
            description = {"A traditional Italian appetizer made with fresh tomatoes, basil, and garlic"}
            />
            <Card
            idname = "second"
            alt = "greek salad"
            image = {greek_salad}
            foodname = {"Greek Salad"}
            description = {"A traditional Greek salad made with fresh cucumbers, tomatoes, and feta cheese"}
            />
            <Card
            idname = "third"
            alt = "lemon dessert"
            image = {lemon_dessert}
            foodname = {"Lemon Dessert"}
            description = {"A light and refreshing lemon dessert made with fresh lemons and cream"}
            />
            <Button text={'Online Menu'}/>
        </div>
    );
}

export default Highlights;