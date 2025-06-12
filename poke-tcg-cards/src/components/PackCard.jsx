import { Link } from "react-router-dom";
import "../css/PackCard.css"

const PackCard = ({ pack }) => {
    return (
        <Link className="pack-card" to={`/${pack.id}`}>
            <div className="pack-content">
                <div className="pack-image">
                    <img src={`${pack.logo}.webp`} alt={pack.id} />
                </div>
                <div className="pack-info">
                    <h2>{pack.name}</h2>
                </div>
            </div>
        </Link>
    );
}
 
export default PackCard;