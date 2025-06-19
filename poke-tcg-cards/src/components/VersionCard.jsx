import "../css/VersionCard.css"
import { useCollectedContext } from "../context/CollectedContext";
import { Link } from "react-router";

const VersionCard = ({ set, setId, cardNum, card }) => {
    const { isCollected } = useCollectedContext();

    return (
        <div className="version-card">
            <Link className="card-content" to={`/${setId}/${cardNum}`}>
                <img className={isCollected(card) ? "collected" : ""} src={`${card.image}`} alt={card.id} title={card.name} />
                <p className="card-name">{card.name}</p>
                <p className="set-name">{set.name}</p>
                <p className="card-rarity">{card.rarity}</p>
            </Link>
        </div>
    );
}

export default VersionCard;