import { getSets } from "../services/api";
import { useQuery } from "@tanstack/react-query";

const useSets = () => {
    return useQuery({
        queryKey: ['sets'],
        queryFn: getSets,
        staleTime: 7 * 24 * 60 * 60 * 1000, // One week
        cacheTime: 7 * 25 * 60 * 60 * 1000
    })
};

export default useSets;