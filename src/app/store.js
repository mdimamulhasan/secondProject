import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "../features/booksSlice.js";

const store = configureStore({
    reducer: {
        bookRducer: booksReducer
    }
});

export default store;