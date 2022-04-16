import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
  name: "search",
  initialState: {
    query: null,
    isLoading: false,
  },
  reducers: {
    updateQuery: (state, action) => {
      state.query = action.payload;
    },
  },
});

export const { updateQuery } = searchSlice.actions;

export default searchSlice.reducer;
