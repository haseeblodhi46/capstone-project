import './Card2.css'

function Card2(props) {
    return (
        <div className = "Card2" id = {props.idname} >
            <div className='ratings-class'>
                <span className='fa fa-star checked'></span>
                <span className='fa fa-star checked'></span>
                <span className='fa fa-star checked'></span>
                <span className='fa fa-star checked'></span>
                <span className='fa fa-star checked'></span>
            </div>
            <div className = "image-description-container">
                <img src={props.image} alt={props.alt}></img>
                <p>{props.name}</p>
            </div>
            <div className = 'review-class'>
                <p>{props.review}</p>
            </div>
        </div>
    );
}

export default Card2;