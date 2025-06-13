import "../css/CardCard.css"

const CardCard = ({ card }) => {
    return (
        <button className="card-card">
            <div className="card-content">
                <div className="card-image">
                    <img src={`${card.image}`} alt={card.id} title={card.name} />
                </div>
            </div>
        </button>
    );
}
 
export default CardCard;