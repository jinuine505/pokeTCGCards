import { useState, useEffect } from "react";
import { getPacks, Test } from "../services/api";
import PackCard from "../components/PackCard";
import "../css/Home.css"

const Home = () => {
    const [packs, setPacks] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch card set data
    useEffect(() => {
        const loadPacks = async () => {
            try {
                const packData = await getPacks();
                setPacks(packData);
            }
            catch (err) {
                setError(err);
            }
            finally {
                setLoading(false);
            }
        }

        loadPacks();
        Test();
    }, [])

    return (
        <div className="home">
            {error && <div className="error">{error}</div>}

            {isLoading ? (<div className="loading">Loading...</div>) : (<div className="pack-grid">
                {packs.map((pack, index) => (
                    <PackCard pack={pack} key={index} />
                ))}
            </div>)}

        </div>
    );
}

export default Home;