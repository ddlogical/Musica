import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

const modalVisibleSlice = createSlice({
    name: "modalVisible",
    initialState,
    reducers: {
        modalVisibleChanged(state) {
            return !state;
        }
    }
});

export const { modalVisibleChanged } = modalVisibleSlice.actions;

export default modalVisibleSlice.reducer;

