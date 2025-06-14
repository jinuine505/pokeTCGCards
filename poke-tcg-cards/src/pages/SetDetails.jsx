import { useParams } from "react-router";
import useSetDetails from "../hooks/useSetDetails";
import CardCard from "../components/CardCard";
import "../css/SetDetails.css";

const SetDetails = () => {
    const { setId } = useParams();
    // Load the set and cards for given setId
    const { set, setCards, isPending, isError} = useSetDetails(setId);

    // Check loading state or errors
    if (isPending) return <div className="loading">Loading...</div>
    if (isError) return <div className="error">Error loading data</div>;

    // Check if set is defined
    if (!set) return <div className="error">Set not found</div>

    return (
        <div className="set-details">
            <div className="set-name"><h2>{`${set.name} (${setId})`}</h2></div>
            {!(setCards.length === 0) ? (<div className="card-grid">
                {setCards.map((card) => (
                    <CardCard card={card} set={setId} key={card.id} />
                ))}
            </div>) : <div className="error">No cards available</div>}
        </div>
    );
}

export default SetDetails;