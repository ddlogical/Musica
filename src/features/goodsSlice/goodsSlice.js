import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    loading: null,
    products: [],
    error: ''
}

export const loadGoods = createAsyncThunk('goods/loadGoods', async (_, { rejectWithValue }) => {
    try {
        const response = await fetch('products.json');
        return await response.json();
    } catch(error) {
        return rejectWithValue(error.message);
    }
})

const goodsSlice = createSlice({
    name: "goods",
    initialState,
    extraReducers: builder => {
        builder
            .addCase(loadGoods.pending, (state) => {
                state.loading = true;
            })
            .addCase(loadGoods.fulfilled, (state, action) => {
                state.products = action.payload;
                state.loading = false;
            })
            .addCase(loadGoods.rejected, (state, action) => {
                state.error = action.error;
                state.loading = false;
            })
    }
});

export default goodsSlice.reducer;
