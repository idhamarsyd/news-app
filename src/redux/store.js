import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./CounterReducer";
import newsReducer from "./NewsReducer";
import searchReducer from "./SearchReducer";
import bookmarksReducer from "./BookmarksReducer";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    news: newsReducer,
    search: searchReducer,
    bookmarks: bookmarksReducer,
  },
});
