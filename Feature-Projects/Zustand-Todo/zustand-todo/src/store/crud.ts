import { create } from "zustand";

interface Todo{
    id: number,
    text: string,
    done: boolean
}

interface TodoState{
    todos: Todo[],
    addTodo: (text: string)=> void,
    toggleTodo: (id: number)=> void,
    removeTodo: (id: number)=> void,
    updateTodo: (id: number, updatedTodo: Partial<Todo>)=> void
}

export const useTodoStore = create<TodoState>((set)=>({
    todos: [],
    addTodo: (text: string)=> {
        const newTodo: Todo = {id: Date.now(), text, done: false}
        set(state=> ({}))
    },
    toggleTodo: (id: number)=>{
        set(state=> ({}))
    },
    removeTodo: (id: number)=>{
        set(state=> ({}))},
    updateTodo: (id: number, updatedTodo: Partial<Todo>)=>{
        set(state=>({}))
    }
}))