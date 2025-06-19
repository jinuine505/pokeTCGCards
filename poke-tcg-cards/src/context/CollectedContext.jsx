import { createContext, useContext, useState, useEffect} from "react";

const CollectedContext = createContext();

export const useCollectedContext = () => useContext(CollectedContext);

export const CollectedProvider = ({ children }) => {
    const [collected, setCollected] = useState(() => {
        const stored = localStorage.getItem('collected');
        return stored ? JSON.parse(stored) : [];
    });

    useEffect(() => {
        localStorage.setItem('collected', JSON.stringify(collected));
    }, [collected])

    const toggleCollected = (card) => {
        setCollected((prev) => {
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

     const isCollected = (card) => {
        return collected.some((c) => c.id === card.id);
    }

    const value = {
        collected,
        toggleCollected,
        isCollected
    }

    return (<CollectedContext.Provider value={value}>
        {children}
    </CollectedContext.Provider>);
};

