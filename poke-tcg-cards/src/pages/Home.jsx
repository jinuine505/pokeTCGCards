import useSets from "../hooks/useSet";
import SetCard from "../components/SetCard";
import "../css/Home.css"

const Home = () => {
    const {data: sets, isPending, isError, error} = useSets();

    return (
        <div className="home">
            {isError && <div className="error">{error.message}</div>}

            {isPending ? (<div className="loading">Loading...</div>) : (<div className="set-grid">
                {sets.map((set, index) => (
                    <SetCard set={set} key={index} />
                ))}
            </div>)}

        </div>
    );
}

export default Home;