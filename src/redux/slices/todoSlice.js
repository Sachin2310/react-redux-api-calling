import { createSlice, createAsyncThunk, createSelector } from "@reduxjs/toolkit";
import { getTodos } from "../../api/todoApi";

const getTodoTasks =  createAsyncThunk(
    'fetchTodo',
    async () => {
        return (await getTodos()).data;
    }
)

const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        isLoading: true,
        todoList: null
    },
    extraReducers: (builder) => {
        builder.addCase(getTodoTasks.fulfilled, (state, action) => {
             state.isLoading = false;
             state.todoList = action.payload;
        })
    }
})

const todoSelector = createSelector(
    (state) => state,
    (state) => state.todo
)

export {todoSelector, getTodoTasks};

export default todoSlice.reducer;