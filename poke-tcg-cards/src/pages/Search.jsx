import { useLocation } from "react-router";
import useCards from "../hooks/useCards";
import CardCard from "../components/CardCard";
import useCardSearch from "../hooks/useCardSearch";
import "../css/SetDetails.css"

const Search = () => {
    // Extract query
    const location = useLocation();
    const serachParams = new URLSearchParams(location.search);
    const searchQuery = serachParams.get("query");

    const { filteredCards, isLoading, isError } = useCardSearch(searchQuery);

    return (
        <div className="card-grid">
            {filteredCards.map((card) => (
                    <CardCard card={card} setId={card.id} key={card.id} />
                ))}
        </div>
    );
}

export default Search;