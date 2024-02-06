import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',  // slice name
    initialState: { // initial value of the slice
        items: [],
    },
    reducers: {  // modify our state
        addItem: (state, action) => {
            state.items.push({ ...action.payload, quantity: 1 }); // Add quantity field
        },
        removeItem: (state, action) => {
            state.items.pop()
        },
        clearCart: (state) => {  // clear cart Reducer function
            state.items = [];  // making state empty
        }, incrementItem: (state, action) => { // new reducer to handle item increment
            state.items[action.payload].quantity++;
        },
        decrementItem: (state, action) => { // new reducer to handle item decrement
            if (state.items[action.payload].quantity > 1) {
                state.items[action.payload].quantity--;
            } else {
                state.items.splice(action.payload, 1); // Remove item if quantity is 1
            }
        },
    }
})

export const {
    addItem,
    removeItem,
    clearCart,
    incrementItem,
    decrementItem, } = cartSlice.actions;

export default cartSlice.reducer;  // This is "reducer" not "reducers", remember this



// We are exporting two things
/*
if you don't know how we can exporting, see below you will understand

cartSlice = {
    actions:{
        addItem,
        removeItem,
        clearCart
    },
    reducer: reducers
}
*/