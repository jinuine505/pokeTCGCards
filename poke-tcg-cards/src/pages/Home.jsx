import useSets from "../hooks/useSet";
import SetCard from "../components/SetCard";
import "../css/Home.css"

const Home = () => {
    const { data: sets, isPending, isError, error } = useSets();

    // Check loading state or errors
    if (isPending) return <div className="loading">Loading...</div>
    if (isError) return <div className="error">{error.message}</div>;

    return (
        <div className="home">
            {<div className="set-grid">
                {sets.map((set, index) => (<SetCard set={set} key={index} />))}
            </div>}

        </div>
    );
}

export default Home;