export interface Itodo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

export interface Icomment {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
}