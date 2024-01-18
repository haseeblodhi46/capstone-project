import './Testimonials.css';
import Card2 from 'assets/reusable_components/Card2/Card2.js';

const Testimonials = () => {
    return (
        <div className = "Testimonials">
            <h1>Testimonials</h1>
            <div className = "Testimonials-Container">
                <Card2 idname = "first"/>
                <Card2 idname = "second"/>
                <Card2 idname = "third"/>
            </div>
        </div>
    );
};

export default Testimonials;
