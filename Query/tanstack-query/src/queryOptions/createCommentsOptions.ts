import { queryOptions } from "@tanstack/react-query";
import { getComments } from "../axios/todoFetching";

export function createCommentsOptions(page: number){
    return queryOptions({
        queryKey: ['comments', page],
        queryFn: ()=> getComments(page)
    })
}