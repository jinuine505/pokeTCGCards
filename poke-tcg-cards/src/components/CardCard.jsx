import "../css/CardCard.css"
import { Link } from "react-router";

const CardCard = ({ card, set }) => {
    const cardNum = card.id.split("-")[1];

    return (
        <Link className="card-card" to={`/${set}/${cardNum}`}>
            <div className="card-content">
                <div className="card-image">
                    <img src={`${card.image}`} alt={card.id} title={card.name} />
                </div>
            </div>
        </Link>
    );
}
 
export default CardCard;