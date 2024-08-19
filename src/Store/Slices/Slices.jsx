
import { createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
    name: "todos",
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            console.log("Adding todo");
            state.push(action.payload);
        },
        
        removeTodo: (state, action) => {
            console.log("Del button is clicked");
            return state.filter((todo, index) => index !== action.payload);
        },

        editTodos: (state, action) => {
            console.log("Edit button is clicked");
            const { id, newText } = action.payload;
            const todoIndex = state.findIndex(todo => todo.id === id);
            if (todoIndex !== -1) {
                state[todoIndex].text = newText;
            }
        },

        delTodos: (state, action) => {
            return []
        },
        setTodos: (state, action) => {
            return action.payload;
          }
    }
})

export const { addTodo, removeTodo, editTodos, delTodos , setTodos} = appSlice.actions;
export default appSlice;
