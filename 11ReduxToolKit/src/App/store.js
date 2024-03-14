import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../Fetures/TODO/todoSlice";

export const store = configureStore({
    reducer:todoReducer,
});
