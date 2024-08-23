import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useAbout = () => {
    const {data} = useQuery({
        queryKey: ["about"],
        queryFn : async () => {
          const response = await axios.get<string[]>(`api/getabout`)
          return response.data
        }
      })
    return { data }
};
