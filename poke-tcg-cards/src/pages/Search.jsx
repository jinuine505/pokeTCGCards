import { useLocation } from "react-router";
import CardCard from "../components/CardCard";
import useCardSearch from "../hooks/useCardSearch";
import useSets from "../hooks/useSet";
import { formatId } from "../utility/helperFuncs";
import "../css/SetDetails.css"

const Search = () => {
    // Extract query
    const location = useLocation();
    const serachParams = new URLSearchParams(location.search);
    const searchQuery = serachParams.get("query");

    // Load 
    const { filteredCards, isLoading, isError } = useCardSearch(searchQuery);
    const { data: sets } = useSets();

    return (
        <div className="card-grid">
            {filteredCards.map((card) => {
                const cardId = card.id.split("-")[0];
                const match = sets.find((set) => formatId(set.id) === cardId);
                return <CardCard card={card} setId={match.id} key={card.id} />
            })}
        </div>
    );
}

export default Search;