import './Card.css'

function Card(props) {
    return (
        <div className = "Card" id = {props.idname}  >
            <img src={props.image} alt={props.alt} ></img>
            <h1>{props.foodname}</h1>
            <p>{props.description}</p>
        </div>
    );
}

export default Card;