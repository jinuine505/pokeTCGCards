import useCards from "../hooks/useCards";

const VersionsList = ({ setId, card }) => {
    // Load all cards
    const { data: cards, isPending, isError } = useCards();

    // Check loading state or errors
    if (isPending) return <div className="loading">Loading...</div>
    if (isError) return <div className="error">Error loading data</div>;

    // Find all versions of the given card
    const versions = cards.filter((cardInList) => (cardInList.name.includes(card.name)));

    return (
        <div className="versions-list">
            {versions.map((cardVersion) => (
                <p key={cardVersion.id}>{cardVersion.id}</p>
            ))}
        </div>
    );
}

export default VersionsList;