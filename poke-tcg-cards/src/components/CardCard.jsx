import "../css/CardCard.css";
import { Link } from "react-router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faCheck } from '@fortawesome/free-solid-svg-icons';


const CardCard = ({ card, setId }) => {
    const cardNum = card.id.split("-")[1];

    const handleClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
    }

    return (
        <Link to={`/${setId}/${cardNum}`} className="card-card">
            <div className="card-content">
                <div className="card-image">
                    <img src={`${card.image}`} alt={card.id} title={card.name} />
                </div>
                <div className="card-overlay">
                    <div className="card-btns">
                        <button className="collect-btn" title="Check" onClick={handleClick}>
                            <FontAwesomeIcon icon={faCheck} />
                        </button>
                        <button className="save-btn" title="Star" onClick={handleClick}>
                            <FontAwesomeIcon icon={faStar} />
                        </button>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default CardCard;