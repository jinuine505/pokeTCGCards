import useCardsAndSets from "./useCardsAndSets";
import { formatId, getSetById } from "../utility/helperFuncs";

// Helper function
const getCardsById = (cards, setId) => {
    // Assign the cards from given setId, or else empty array
    if (!Array.isArray(cards)) return [];
    return cards.filter((card) => card.id.startsWith(`${formatId(setId)}-`));
}

const useSetDetails = (setId) => {
    // Load the sets and cards
    const { cards, sets, isPending, isError } = useCardsAndSets();
    
    const set = getSetById(sets, setId);
    const setCards = getCardsById(cards, setId);

    return { set, setCards, isPending, isError};
}

export default useSetDetails;