import { useStarredContext } from "../context/StarredContext";
import CardCard from "../components/CardCard";
import useSets from "../hooks/useSet";
import { formatId } from "../utility/helperFuncs";
import { useLayoutEffect } from "react";
import "../css/Starred.css"

const Starred = () => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    const { starred } = useStarredContext();

    // Load all sets
    const { data: sets, isPending, isError } = useSets();

    // Check loading state or errors
    if (isPending) return <div className="loading">Loading...</div>
    if (isError) return <div className="error">Error loading data</div>;

    return (
        <div className="starred-cards">
            {(starred.length > 0) ? (<>
                <h2 className="starred-header">Starred Cards</h2>
                <div className="card-grid">
                    {starred.map((card) => {
                        // Match formats of two different card set ids (ex. A-1 === a1)
                        const cardSet = card.id.split("-")[0];
                        const match = sets.find((set) => formatId(set.id) === cardSet);

                        return <CardCard card={card} setId={match.id} key={card.id} />
                    })}
                </div>
            </>
            ) : (<div className="starred-empty">
                <h2>No Starred Cards</h2>
            </div>)
            }
        </div >
    );
}

export default Starred;