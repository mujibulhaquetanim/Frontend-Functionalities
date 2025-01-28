import { axiosInstance } from "./axiosInstance";
import { Icomment, Itodo } from "../types/todoTypes";

export const getTodos = async (): Promise<Itodo[]> => {
    const response = await axiosInstance.get<Itodo[]>('/todos');
    return response.data;   
}

export const getComments = async (page: number): Promise<Icomment[]> => {
    const response = await axiosInstance.get<Icomment[]>(`/comments?postId=${page}`);
    return response.data;
}