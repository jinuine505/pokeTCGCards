import { Link } from "react-router-dom";
import "../css/SetCard.css";

const SetCard = ({ set }) => {
    return (
        <Link className="set-card" to={`/${set.id}`}>
            <div className="set-content">
                <div className="set-image">
                    <img src={`${set.logo}.webp`} alt={set.id} title={set.name}/>
                </div>
                <div className="set-info">
                    <h2>{set.name}</h2>
                </div>
            </div>
        </Link>
    );
}
 
export default SetCard;