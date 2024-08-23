import { TechType } from "@/types/type";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useTech = () => {
    const {data} = useQuery({
        queryKey: ["tech"],
        queryFn : async () => {
          const response = await axios.get<TechType>(`api/gettechs`)
          return response.data
        }
      })
    return { data }
};
