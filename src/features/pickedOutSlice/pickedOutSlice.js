import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const pickedOutSlice = createSlice({
    name: 'pickedOut',
    initialState,
    reducers: {
        addToPickedOut(state, action) {
            const pickedOut = [...state, action.payload];
            return pickedOut
        },
        removeFromPickedOut(state, action) {
            const pickedOut = state;
            const index = action.payload;
            pickedOut.splice(index, 1);
            return pickedOut;
        }
    }
});

export const { addToPickedOut, removeFromPickedOut } = pickedOutSlice.actions;

export default pickedOutSlice.reducer;

