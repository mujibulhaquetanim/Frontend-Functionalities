import { queryOptions } from "@tanstack/react-query";
import { getTodos } from "../axios/todoFetching";

export function createTodoQueryOptions() {
    return queryOptions({
        queryKey: ['todos'],
        queryFn: getTodos
    })
}

