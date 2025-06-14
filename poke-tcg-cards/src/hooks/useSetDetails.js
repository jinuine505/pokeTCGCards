import useCards from "./useCards";
import useSets from "./useSet";

// Helper functions
const formatId = (id) => id.toLowerCase().replace(/-/g, '');

const getSetById = (sets, setId) => {
    return sets.find((set) => formatId(set.id) === formatId(setId));
}

const getCardsById = (cards, setId) => {
    return cards.filter((card) => card.id.startsWith(`${formatId(setId)}-`));
}

const useSetDetails = (setId) => {
    // Load the sets and cards
    const { data: sets, isPending: setsPending, isError: setsError } = useSets();
    const { data: cards, isPending: cardsPending, isError: cardsError } = useCards();

    // Consolidate isPending from both queries
    const isPending = setsPending || cardsPending;
    // Consolidate isError from both queries
    const isError = setsError || cardsError;
    
    // Assign the set from given setId, or else null
    const set = sets ? getSetById(sets, setId) : null;

    // Assign the cards from given setId, or else empty array
    const setCards = cards ? getCardsById(cards, setId) : [];

    return { set, setCards, isPending, isError};
}

export default useSetDetails;