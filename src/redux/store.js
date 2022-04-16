import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./CounterReducer";
import newsReducer from "./NewsReducer";
import searchReducer from "./SearchReducer";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    news: newsReducer,
    search: searchReducer,
  },
});
