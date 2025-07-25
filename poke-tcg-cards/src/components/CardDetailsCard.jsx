import { useEffect, useState } from "react";
import { getSetById } from "../services/api";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faCheck } from '@fortawesome/free-solid-svg-icons';
import { useStarredContext } from "../context/StarredContext";
import { useCollectedContext } from "../context/CollectedContext";
import "../css/CardDetailsCard.css";
import "../css/CardDetailsStyling.css";

const CardDetailsCard = ({ card }) => {
    const handleCollect = (e) => {
        e.preventDefault();
        toggleCollected(card);
    }

    const handleStar = (e) => {
        e.preventDefault();
        toggleStarred(card);
    }

    const { toggleStarred, isStarred } = useStarredContext();
    const { toggleCollected, isCollected } = useCollectedContext();


    const isRare = card.rarity.includes('☆') || card.rarity.includes('♕') || card.fullart === "Yes";

    return (
        <div className={`card-details-card ${isRare ? "gold-shadow" : ""} type-${card.type?.toLowerCase()}`}>
            <div className="card-content">
                    <div className="card-image">
                        <img className={isCollected(card) ? "collected" : ""} src={`${card.image}`} alt={card.id} title={card.name} />
                        <div className="card-btns">
                        <button className={`collect-btn ${isCollected(card) ? "collected" : ""}`} title="Check" onClick={handleCollect}>
                            <FontAwesomeIcon icon={faCheck} />
                        </button>
                        <button className={`star-btn ${isStarred(card) ? "starred" : ""}`} title="Star" onClick={handleStar}>
                            <FontAwesomeIcon icon={faStar} />
                        </button>
                    </div>
                </div>
                <div className="card-info">
                    <h1 className="card-name">{card.name}</h1>
                    <p className="card-health">{`HP: ${card.health}`}</p>
                    <p className="card-type">{`Type: ${card.type}`}</p>
                    <p className="card-rarity">{`Rarity: ${card.rarity}`}</p>
                    <p className="card-artist">{`Artist: ${card.artist}`}</p>
                    <p className="card-pack">{`Pack: ${card.pack}`}</p>
                </div>
            </div>
        </div>
    );
}

export default CardDetailsCard;