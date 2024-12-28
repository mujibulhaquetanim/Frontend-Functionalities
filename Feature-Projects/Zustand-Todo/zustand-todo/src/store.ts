import {create} from 'zustand'

interface Todo {
    id: number
    text: string
    done: boolean
}

interface State {
    todos: Todo[]
    addTodo: (text: string) => void
    toggleTodo: (id: number) => void
    removeTodo: (id: number) => void
}

export const useStore = create<State>((set)=>({
    todos: [],
    addTodo: (text) => set(state => ({todos: [...state.todos, {id: state.todos.length, text, done: false}]})),
    toggleTodo: (id) => set(state => ({todos: state.todos.map(todo => todo.id === id ? {...todo, done: !todo.done} : todo)})),
    removeTodo: (id) => set(state => ({todos: state.todos.filter(todo => todo.id !== id)}))
}))