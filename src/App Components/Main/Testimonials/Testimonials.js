import './Testimonials.css';
import Card2 from 'assets/reusable_components/Card2/Card2.js';
import claire from 'assets/images/claire.jpg';
import jake from 'assets/images/jake.png';
import sherry from 'assets/images/sherry.jpg';

const Testimonials = () => {
    return (
        <div className = "Testimonials">
            <h1>Testimonials</h1>
            <div className = "Testimonials-Container">
                <Card2 idname = "first" image = {claire} name = {'Claire'}/>
                <Card2 idname = "second" image = {jake} name = {'Jake'}/>
                <Card2 idname = "third" image = {sherry} name = {'Sherry'}/>
            </div>
        </div>
    );
};

export default Testimonials;
