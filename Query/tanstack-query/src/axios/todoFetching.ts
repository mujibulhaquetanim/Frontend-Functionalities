import { axiosInstance } from "./axiosInstance";
import { Itodo } from "../types/todoTypes";

export const getTodos = async (): Promise<Itodo[]> => {
    const response = await axiosInstance.get<Itodo[]>('/todos');
    return response.data;   
}