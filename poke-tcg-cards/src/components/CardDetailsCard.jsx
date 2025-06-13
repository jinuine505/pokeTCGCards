import { useEffect, useState } from "react";
import { getSetById } from "../services/api";
import "../css/CardDetailsCard.css"
import "../css/CardDetailsStyling.css"

const CardDetailsCard = ({ card }) => {
    const isRare = card.rarity.includes('☆') ||card.rarity.includes('♕');

    return (
        <div className={`card-details-card ${isRare ? "gold-shadow" : ""} type-${card.type?.toLowerCase()}`}>
            <div className="card-content">
                <div className="card-image">
                    <img src={`${card.image}`} alt={card.id} title={card.name} />
                </div>
                <div className="card-info">
                    <h1 className="card-name">{card.name}</h1>
                    <p className="card-health">{`HP: ${card.health}`}</p>
                    <p className="card-type">{`Type: ${card.type}`}</p>
                    <p className="card-rarity">{`Rarity: ${card.rarity}`}</p>
                    <p className="card-artist">{`Artist: ${card.artist}`}</p>
                </div>
            </div>
        </div>
    );
}
 
export default CardDetailsCard;