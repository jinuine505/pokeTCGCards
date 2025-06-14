import useSetDetails from "./useSetDetails";

const useCardDetails = (setId, cardNum) => {
    // Load the set and the cards from a given setId
    const { set, setCards, isPending, isError} = useSetDetails(setId);

    // Find the card in the set matching the provided cardNum, else null
    const card = setCards ? setCards.find((card) => (card.id.split("-")[1] === cardNum)) : null;

    return {set, card, isPending, isError}
}

export default useCardDetails;