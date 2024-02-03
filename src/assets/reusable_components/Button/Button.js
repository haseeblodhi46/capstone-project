import './Button.css'
import { Link } from 'react-router-dom';

function Button(props) {
    return (
        <button className = "Button">
            <Link className='link-style' to="/reservation">{props.text}</Link>
        </button>
    );
}

export default Button;