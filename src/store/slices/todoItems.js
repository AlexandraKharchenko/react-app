import {createSlice} from '@reduxjs/toolkit';

const TodoItems = createSlice({
    name: 'todoItems',
    initialState: {
        value: [],
        curId: 0,
    },
    reducers: {
        addTodo: (state, action) => {
            state.curId += 1;
            const item = {
                title: action.payload.title,
                id: state.curId,
                description: action.payload.description,
                checked: false
            }
            state.value.push(item)
        },
        changeChecked: (state, action) => {
            const {id, checked} = action.payload;
            state.value = state.value.map(item =>
                item.id === id ? {...item, checked} : item
            );
        },
        deleteTodoItem: (state, action) => {
            state.value = state.value.filter((item) => item.id !== action.payload)
        },
        deleteTodos: (state) => {
            state.value = []
        }
    }
})
export const {addTodo, deleteTodos, deleteTodoItem, changeChecked} = TodoItems.actions;

export default TodoItems.reducer