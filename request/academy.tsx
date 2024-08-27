import { AcademyType } from "@/types/type";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useAcademy = () => {
    const {data} = useQuery({
        queryKey: ["academy"],
        queryFn : async () => {
          const response = await axios.get<AcademyType[]>(`api/getacademies`)
          return response.data
        }
      })
    return { data }
};
