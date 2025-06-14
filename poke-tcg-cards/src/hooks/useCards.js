import { getCards } from "../services/api";
import { useQuery } from "@tanstack/react-query";

const useCards = () => {
    return useQuery({
        queryKey: ['cards'],
        queryFn: getCards
    })
};

export default useCards;