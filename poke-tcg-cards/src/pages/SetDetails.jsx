import { useParams } from "react-router";
import { getCardsFromSet } from "../services/api";
import { useEffect, useState } from "react";
import CardCard from "../components/CardCard";
import "../css/SetDetails.css"

const SetDetails = () => {
    const { packId } = useParams();
    const [cards, setCards] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch cards data
    useEffect(() => {
        const loadCards = async () => {
            try {
                const cards = await getCardsFromSet(packId);
                setCards(cards);
            } catch (err) {
                setError(err);
            }
            finally {
                setLoading(false);
            }
        }

        loadCards();
    }, [packId])

    return (
        <div className="set-details">
            {error && <div className="error">{error}</div>}
            {isLoading ? (<div className="loading">Loading...</div>) : (<div className="card-grid">
                {cards.map((card) => (
                    <CardCard card={card} key={card.id} />
                ))}
            </div>)}
        </div>
    );
}

export default SetDetails;