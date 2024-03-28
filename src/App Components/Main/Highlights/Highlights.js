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
            <Card idname = "first" image = {bruchetta} foodname = {"Bruchetta"}/>
            <Card idname = "second" image = {greek_salad} foodname = {"Greek Salad"}/>
            <Card idname = "third"  image = {lemon_dessert} foodname = {"Lemon Dessert"}/>
            <Button text={'Online Menu'}/>
        </div>
    );
}

export default Highlights;