import { createSlice } from "@reduxjs/toolkit";

export const bookmarksSlice = createSlice({
  name: "bookmarks",
  initialState: {
    bookmarks: [],
    isLoading: false,
  },
  reducers: {
    addBookmark: (state, action) => {
      state.bookmarks = [...state.bookmarks, action.payload];
    },
    updateBookmark: (state, action) => {
      state.bookmarks = action.payload;
    },
  },
});

export const { addBookmark, updateBookmark } = bookmarksSlice.actions;

export default bookmarksSlice.reducer;
