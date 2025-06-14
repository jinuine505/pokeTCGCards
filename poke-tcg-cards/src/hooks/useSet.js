import { getSets } from "../services/api";
import { useQuery } from "@tanstack/react-query";

export const useSets = () => {
    return useQuery({
        queryKey: ['sets'],
        queryFn: getSets
    })
};