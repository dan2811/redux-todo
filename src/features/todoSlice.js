import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    todoList: []
};

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        saveTodo: (state, action) => {
            state.todoList.push(action.payload)
        },

        setCheck: (state, action) => {
            state.todoList.map(item => {
                if (action.payload === item.id) {
                    if(item.done === true) {
                        item.done = false
                    } else {
                        item.done = true
                    }
                }
                return '';
            });
        },

        cleanTodos: (state, action) => {
            
            action.payload.forEach(todo => {
                let id = todo.id;
                for(var i = 0; i < state.todoList.length; i++) {
                    if(id === state.todoList[i].id) {
                            state.todoList.splice(i, 1);
                        break;
                    }
                }
            })
        }
     }
});

export const { saveTodo, setCheck, cleanTodos } = todoSlice.actions;

export const selectTodoList = state => state.todos.todoList;

export default todoSlice.reducer;