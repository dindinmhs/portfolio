import { ProjectType } from "@/types/type";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useProjects = () => {
    const {isPending, data} = useQuery({
        queryKey: ["project"],
        queryFn : async () => {
          const response = await axios.get<ProjectType[]>(`api/getproject`)
          return response.data
        }
      })
    return { isPending, data }
};
