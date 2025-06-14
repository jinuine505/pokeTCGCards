import { useParams } from "react-router";
import useSets from "../hooks/useSet";
import useCards from "../hooks/useCards"
import CardCard from "../components/CardCard";
import "../css/SetDetails.css";

// Helper functions
const formatId = (id) => id.toLowerCase().replace(/-/g, '');

const getSetById = (sets, setId) => {
    return sets.find((set) => formatId(set.id) === formatId(setId));
}

const getCardsById = (cards, setId) => {
    return cards.filter((card) => card.id.startsWith(`${formatId(setId)}-`));
}

const SetDetails = () => {
    const { setId } = useParams();
    // Load the sets and cards
    const { data: sets, isPending: setsPending, isError: setsError } = useSets();
    const { data: cards, isPending: cardsPending, isError: cardsError } = useCards();

    // Check loading state or errors
    const isPending = setsPending || cardsPending;
    const isError = setsError || cardsError;
    if (isPending) return <div className="loading">Loading...</div>
    if (isError) return <div className="error">Error loading data</div>;

    // Assign the set from given setId, or else null
    const set = sets ? getSetById(sets, setId) : null;
    if (!set) return <div className="error">Set not found</div>

    // Assign the cards from given setId, or else empty array
    const setCards = cards ? getCardsById(cards, setId) : [];
    if (setCards.length === 0) return <div className="error">Cards not found</div>

    return (
        <div className="set-details">
            <div className="set-name"><h2>{`${set.name} (${setId})`}</h2></div>
            <div className="card-grid">
                {setCards.map((card) => (
                    <CardCard card={card} set={setId} key={card.id} />
                ))}
            </div>
        </div>
    );
}

export default SetDetails;