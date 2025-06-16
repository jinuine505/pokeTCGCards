import useCardsAndSets from "../hooks/useCardsAndSets";
import VersionCard from "./VersionCard";
import { formatId, getSetById } from "../utility/helperFuncs";
import "../css/VersionsList.css"

// Helper function
const clearEx = (name) => name.replace(/\s+ex$/, '');

const VersionsList = ({ card }) => {
    // Load all cards and sets
    const { cards, sets, isPending, isError } = useCardsAndSets();

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