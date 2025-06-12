import "../css/CardCard.css"

const CardCard = ({ card }) => {
    return (
        <button className="card-card">
            <div className="card-content">
                <div className="card-image">
                    <img src={`${card.image}/low.webp`} alt={card.id} />
                </div>
                <div className="card-info">
                    <h2>{card.name}</h2>
                </div>
            </div>
        </button>
    );
}
 
export default CardCard;