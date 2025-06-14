import "../css/VersionCard.css"
import { Link } from "react-router";

const VersionCard = ({ set, setId, cardNum, card }) => {
    return (
        <div className="version-card">
            <Link className="card-content" to={`/${setId}/${cardNum}`}>
                <img src={`${card.image}`} alt={card.id} title={card.name} />
                <p className="card-name">{card.name}</p>
                <p className="set-name">{set.name}</p>
                <p className="card-rarity">{card.rarity}</p>
            </Link>
        </div>
    );
}

export default VersionCard;