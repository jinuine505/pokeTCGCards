import useCards from "../hooks/useCards";
import useSets from "../hooks/useSet";
import VersionCard from "./VersionCard";
import { formatId, getSetById } from "../utility/helperFuncs";
import "../css/VersionsList.css"

// Helper function
const clearEx = (name) => name.replace(/\s+ex$/, '');

const VersionsList = ({ card }) => {
    // Load all sets
    const { data: sets, isPending: setsPending, isError: setsError } = useSets();
    // Load all cards
    const { data: cards, isPending: cardsPending, isError: cardsError } = useCards();

    // Consolidate isPending from both queries
    const isPending = setsPending || cardsPending;
    // Consolidate isError from both queries
    const isError = setsError || cardsError;

    // Check loading state or errors
    if (isPending) return <div className="loading">Loading...</div>
    if (isError) return <div className="error">Error loading data</div>;

    // Find all versions of the given card except itself
    const versions = cards.filter((cardInList) => (clearEx(cardInList.name) === clearEx(card.name)
        && !(cardInList.id === card.id)));

    return (
        <div className="versions-list">
            {(versions.length > 0) ? (<div className="card-versions">
                {versions.map((cardVersion) => {
                    let [setId, cardNum] = cardVersion.id.split("-");
                    return (<VersionCard set={getSetById(sets, setId)}
                                        setId={formatId(setId)}
                                        cardNum={cardNum} 
                                        card={cardVersion}
                                        key={cardVersion.id} />)
                })}
            </div>) : (<div className="no-versions">{`No versions of ${card.name} found`}</div>)}
        </div>
    );
}

export default VersionsList;