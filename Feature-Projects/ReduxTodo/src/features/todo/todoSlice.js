import {createSlice,nanoid} from '@reduxjs/toolkit';

const initialState ={
    todos: [{id:1, text: "hi"}]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers:{
        addTodos:(state,action)=>{
            const todo ={
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        deleteTodos:(state, action) => {
            return state.todos= state.todos.filter((item)=> item.id != action.payload)
        },
    }
})

export const {addTodos, deleteTodos} = todoSlice.actions
export default todoSlice.reducer
