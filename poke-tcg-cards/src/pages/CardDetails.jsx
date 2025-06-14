import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getCardFromSetAndNum } from "../services/api";
import CardDetailsCard from "../components/CardDetailsCard";

const CardDetails = () => {
    const { setId, cardNum } = useParams();
    const [card, setCard] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch the card data
    useEffect(() => {
        const loadCard = async () => {
            try {
                const fetchedCard = await getCardFromSetAndNum(setId, cardNum);
                setCard(fetchedCard);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        }

        loadCard();
    }, [cardNum])

    return (
        <div className="card-details">
            {!isLoading && <CardDetailsCard card={card}/>}
        </div>
    );
}
 
export default CardDetails;