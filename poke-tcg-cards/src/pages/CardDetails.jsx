import { useParams } from "react-router";
import useCardDetails from "../hooks/useCardDetails";
import CardDetailsCard from "../components/CardDetailsCard";

const CardDetails = () => {
    const { setId, cardNum } = useParams();
   
    // Load the set and card given the setId and the cardNum
    const {set, card, isPending, isError} = useCardDetails(setId, cardNum);

    // Check loading state or errors
    if (isPending) return <div className="loading">Loading...</div>
    if (isError) return <div className="error">Error loading data</div>;

    if (!set) return <div className="error">Set not found</div>
    if (!card) return <div className="error">{`Card ${cardNum} not found in ${set.name}`}</div>

    return (
        <div className="card-details">
            <CardDetailsCard card={card}/>
        </div>
    );
}
 
export default CardDetails;