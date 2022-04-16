import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchNews = createAsyncThunk("news/fetchNews", async (url) => {
  const res = await axios.get(url);
  const formatRes = await res.data.articles;
  // const finalData = formatRes.results;
  return formatRes;
});

export const newsSlice = createSlice({
  name: "news",
  initialState: {
    data: [],
    isLoading: false,
  },
  reducers: {},
  extraReducers: {
    [fetchNews.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
    },
    [fetchNews.pending]: (state) => {
      state.isLoading = true;
    },
  },
});

// export const { showLoading } = newsSlice.actions;

export default newsSlice.reducer;
