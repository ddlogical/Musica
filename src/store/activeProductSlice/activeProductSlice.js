import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const activeProductSlice = createSlice({
    name: 'activeProduct',
    initialState,
    reducers: {
        activeProductChanged(state, action) {
            return action.payload
        }
    }
})

export const { activeProductChanged } = activeProductSlice.actions;

export default activeProductSlice.reducer;