import { useState, useEffect } from "react";
import { getSets } from "../services/api";
import SetCard from "../components/SetCard";
import "../css/Home.css"

const Home = () => {
    const [packs, setPacks] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch card set data
    useEffect(() => {
        const loadSets = async () => {
            try {
                const packData = await getSets();
                setPacks(packData);
            }
            catch (err) {
                setError(err);
            }
            finally {
                setLoading(false);
            }
        }

        loadSets();
    }, [])

    return (
        <div className="home">
            {error && <div className="error">{error}</div>}

            {isLoading ? (<div className="loading">Loading...</div>) : (<div className="pack-grid">
                {packs.map((pack, index) => (
                    <SetCard pack={pack} key={index} />
                ))}
            </div>)}

        </div>
    );
}

export default Home;