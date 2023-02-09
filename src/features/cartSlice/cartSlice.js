import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const cart = [...state, action.payload];
            return cart
        },
        removeFromCart(state, action) {
            const cart = [...state];
            const index = action.payload;
            cart.splice(index, 1);
            return cart;
        },
        removeAllFromCart() {
            return []
        }
    }
});

export const { addToCart, removeFromCart, removeAllFromCart } = cartSlice.actions;

export default cartSlice.reducer;

