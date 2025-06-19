import "../css/CardCard.css";
import { Link } from "react-router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faCheck } from '@fortawesome/free-solid-svg-icons';
import { useStarredContext } from "../context/StarredContext";
import { useCollectedContext } from "../context/CollectedContext";


const CardCard = ({ card, setId }) => {
    const { toggleStarred, isStarred } = useStarredContext();
    const { toggleCollected, isCollected } = useCollectedContext();
    const cardNum = card.id.split("-")[1];

    const handleCollect = (e) => {
        e.preventDefault();
        toggleCollected(card);
    }

      const handleStar = (e) => {
        e.preventDefault();
        toggleStarred(card);
    }

    return (
        <div className="card-card">
            <div className="card-content">
                <Link to={`/${setId}/${cardNum}`} className="card-image">
                    <img className={isCollected(card) ? "collected" : ""} src={`${card.image}`} alt={card.id} title={card.name} />
                </Link>
                <div className="card-btns">
                    <button className={`collect-btn ${isCollected(card) ? "collected" : ""}`} title="Check" onClick={handleCollect}>
                        <FontAwesomeIcon icon={faCheck} />
                    </button>
                    <button className={`star-btn ${isStarred(card) ? "starred" : ""}`} title="Star" onClick={handleStar}>
                        <FontAwesomeIcon icon={faStar} />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CardCard;