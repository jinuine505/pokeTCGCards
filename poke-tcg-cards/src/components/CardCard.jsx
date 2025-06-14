import "../css/CardCard.css";
import { Link } from "react-router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faCheck } from '@fortawesome/free-solid-svg-icons';


const CardCard = ({ card, set }) => {
    const cardNum = card.id.split("-")[1];

    const handleClick = (e) => {
        e.preventDefault();
    }
    
    return (
        <div className="card-card">
            <Link to={`/${set}/${cardNum}`}>
                <div className="card-content">
                    <div className="card-image">
                        <img src={`${card.image}`} alt={card.id} title={card.name} />
                        <div className="card-overlay">
                            <div className="card-btns">
                                <button className="collect-btn" onClick={handleClick}>
                                    <FontAwesomeIcon icon={faCheck} />
                                </button>
                                <button className="save-btn" onClick={handleClick}>
                                    <FontAwesomeIcon icon={faStar} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default CardCard;