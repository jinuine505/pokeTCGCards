import useCards from "./useCards";
import useSets from "./useSet";

const useCardsAndSets = () => {
    // Load the sets and cards
    const { data: sets, isPending: setsPending, isError: setsError } = useSets();
    const { data: cards, isPending: cardsPending, isError: cardsError } = useCards();

    // Consolidate isPending from both queries
    const isPending = setsPending || cardsPending;
    // Consolidate isError from both queries
    const isError = setsError || cardsError;
    
    return { cards, sets, isPending, isError};
}
 
export default useCardsAndSets;