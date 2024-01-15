import './Highlights.css'
import Button from 'assets/reusable_components/Button/Button.js';
import Card from 'assets/reusable_components/Card/Card.js';

function Highlights() {
    return (
        <div className = "Highlights">
            <h1>This Weeks Specials!</h1>
            <Card idname = "first"/>
            <Card idname = "second"/>
            <Card idname = "third"/>
            <Button text={'Online Menu'}/>
        </div>
    );
}

export default Highlights;