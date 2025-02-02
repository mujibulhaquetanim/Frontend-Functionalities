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

//Zustand stores state internally in an object created by the create function, using setState for updates. The initial store details aren't visible. Zustand's set function uses shallow merging, meaning it integrates new object data with the existing state. The store is empty until setData is called. here setData is the name of the properties like addTodo, setTodo etc. where data is updated using respective set function zustand. 
// Zustand's set function uses shallow merging, meaning it integrates new object data with the existing state. The store is empty until setData is called.
export const useTodoStore = create<TodoState>((set)=>({
    todos: [],
    addTodo: (text: string)=> {
        const newTodo: Todo = {id: Date.now(), text, done: false}
        set(state=> ({todos: [...state.todos, newTodo]}))
    },
    toggleTodo: (id: number)=>{
        set(state=> ({todos: state.todos.map(todo=>todo.id===id?{...todo, todo: !todo.done}:todo)}))
    },
    removeTodo: (id: number)=>{
        set(state=> ({todos: state.todos.filter(todo=>todo.id !== id)}))},
    updateTodo: (id: number, updatedTodo: Partial<Todo>)=>{
        set(state=>({todos: state.todos.filter(todo=>todo.id===id?{...todo, updatedTodo}:todo)}))
    }
}))