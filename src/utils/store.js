import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

// creating a Redux store
const store = configureStore({ // store contains all the slices in the store
    reducer: {
        cart: cartSlice  // name of cart : slice name
    }
})


export default store