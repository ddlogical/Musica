import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

const audioSlice = createSlice({
	name: 'musicActiveAlbum',
	initialState,
	reducers: {
		activeAlbumChanged(state, action) {
			return action.payload
		}
	}
})

export const {activeAlbumChanged } = audioSlice.actions;

export default audioSlice.reducer;

