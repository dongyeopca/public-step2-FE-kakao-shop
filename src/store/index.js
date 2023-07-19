import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice"
import productReducer from "./slices/productSlice";

const store = configureStore({
    reducer: {
        user: userReducer,
        product: productReducer,
    },
});

// redux + redux-thunk
// redux toolkit
// redux + saga

export default store;