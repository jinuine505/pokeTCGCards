import { getSets } from "../services/api";
import { useQuery } from "@tanstack/react-query";

const useSets = () => {
    return useQuery({
        queryKey: ['sets'],
        queryFn: getSets
    })
};

export default useSets;