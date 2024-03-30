import './Card2.css'

function Card2(props) {
    return (
        <div className = "Card2" id = {props.idname} >
            <div className = "image-description-container">
                <img src={props.image} alt={props.alt}></img>
                <p>{props.name}</p>
            </div>
        </div>
    );
}

export default Card2;