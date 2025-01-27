import { axiosInstance } from "./axiosInstance";

export const getTodos = async () => {
    const response = await axiosInstance.get('/todos');
    return response.data;
}