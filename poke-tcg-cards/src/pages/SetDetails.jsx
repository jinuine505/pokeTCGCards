import { useParams } from "react-router";
import { getCardsFromSet, getSetById } from "../services/api";
import { useEffect, useState } from "react";
import CardCard from "../components/CardCard";
import "../css/SetDetails.css"

const SetDetails = () => {
    const { packId } = useParams();
    const [cards, setCards] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [setName, setSetName] = useState('');

    // Fetch cards data
    useEffect(() => {
        const loadCards = async () => {
            try {
                // Set card data from set
                const cards = await getCardsFromSet(packId);
                setCards(cards);

                // Set the set name
                const set = await getSetById(packId);
                setSetName(set.name);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        }

        loadCards();
    }, [packId])

    return (
        <div className="set-details">
            <div className="set-name"><h2>{`${setName} (${packId})`}</h2></div>
            {error && <div className="error">{error}</div>}
            {isLoading ? (<div className="loading">Loading...</div>) : (<div className="card-grid">
                {cards.map((card) => (
                    <CardCard card={card} set={packId} key={card.id} />
                ))}
            </div>)}
        </div>
    );
}

export default SetDetails;