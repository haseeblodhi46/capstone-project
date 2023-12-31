import './Main.css'
import Hero from './Hero/Hero.js';
import Highlights from './Highlights/Highlights.js';
import Testimonials from './Testimonials/Testimonials.js';
import About from './About/About.js';

function Main() {
    return (
        <main className = "Main">
            <Hero />
            <Highlights />
            <Testimonials />
            <About />
        </main>
    )
}

export default Main;