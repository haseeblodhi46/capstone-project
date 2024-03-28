import './Card.css'

function Card(props) {
    return (
        <div className = "Card" id = {props.idname} >
            <img src={props.image} ></img>
            <h1>{props.foodname}</h1>
        </div>
    );
}

export default Card;