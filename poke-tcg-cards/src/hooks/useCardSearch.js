import { useMemo, useState } from "react";
import useCards from "./useCards";

// Helper function
const getCardsByName = (cards, searchQuery) => {
    // Assign the cards from given setId
    return cards.filter((card) => card.name.toLowerCase().includes(searchQuery.toLowerCase()));
}

const useCardSearch = (searchQuery) => {
    // Load all cards
    const { data: cards, isPending, isError } = useCards();

    const filteredCards = useMemo(() => {
        // Return empty array if cards is not an array or there is no query
        if (!Array.isArray(cards) || !searchQuery) return [];

        // Split query by spaces
        const searchKeys = searchQuery.toLowerCase().split(" ");

        // Filter card names by each search key in the query
        return cards.filter((card) =>
            (searchKeys.every((key) => (card.name.toLowerCase().includes(key))))
        )
    }, [cards, searchQuery]);

    return { filteredCards, isPending, isError };
}

export default useCardSearch;