import { createContext, useContext, useState, useEffect} from "react";

const StarredContext = createContext();

export const useStarredContext = () => useContext(StarredContext);

export const StarredProvider = ({ children }) => {
    const [starred, setStarred] = useState(() => {
        const stored = localStorage.getItem('starred');
        return stored ? JSON.parse(stored) : [];
    });

    useEffect(() => {
        localStorage.setItem('starred', JSON.stringify(starred));
    }, [starred])

    const toggleStarred = (card) => {
        setStarred((prev) => {
            // Check if card id exists in array
            if (prev.find((c) => c.id === card.id)) {
                // Remove card if exists in starred array already
                return prev.filter((c) => c.id !== card.id);
            } else {
                // Add card if does not exist in starred array
                return [...prev, card];
            }
        })
    }

     const isStarred = (card) => {
        return starred.some((c) => c.id === card.id);
    }

    const value = {
        starred,
        toggleStarred,
        isStarred
    }

    return (<StarredContext.Provider value={value}>
        {children}
    </StarredContext.Provider>);
};

