import useCards from "./useCards";

// Helper function
const getCardsByName = (cards, searchQuery) => {
    // Assign the cards from given setId, or else empty array
    if (!Array.isArray(cards)) return [];
    return cards.filter((card) => card.name.toLowerCase().includes(searchQuery.toLowerCase()));
}

const useCardSearch = (searchQuery) => {
     // Load all cards
    const {data: cards, isPending, isError} = useCards();
    
    // Filter card names by query
    const filteredCards = getCardsByName(cards, searchQuery);
    
    return { filteredCards, isPending, isError};
}
 
export default useCardSearch;