import { useQuery } from "@tanstack/react-query";
import { getTodos } from "../axios/todoFetching";

{
    /* another way to fetch data using custom hook (useTodoQuery)*/
  }

export const useTodoQuery = ()=> {
    return useQuery({
        queryKey: ['todos'],
        queryFn: getTodos,
        staleTime: 1000 * 60,
    })
}