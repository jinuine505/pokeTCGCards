import { getCards } from "../services/api";
import { useQuery } from "@tanstack/react-query";

const useCards = () => {
    return useQuery({
        queryKey: ['cards'],
        queryFn: getCards,
        staleTime: 7 * 24 * 60 * 60 * 1000, // One week
        cacheTime: 7 * 25 * 60 * 60 * 1000
    })
};

export default useCards;