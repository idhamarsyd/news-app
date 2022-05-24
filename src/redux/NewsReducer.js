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
    data: [
      {
        source: {
          id: "independent",
          name: "Independent",
        },
        author: "Johanna Chisholm",
        title:
          "Texas Republicans look to bar companies that support women getting out-of-state abortions",
        description:
          "Major companies, like Amazon, Tesla and Apple, who have pledged to support employees have hubs throughout the state",
        url:
          "https://www.independent.co.uk/news/world/americas/us-politics/texas-republicans-ban-companies-abortion-b2086046.html",
        urlToImage:
          "https://static.independent.co.uk/2021/05/31/05/Voting_Bills-Texas_76373.jpg?quality=75&width=1200&auto=webp",
        publishedAt: "2022-05-24T12:33:27Z",
        content:
          "A group of Republican lawmakers in Texas have pledged to introduce legislation that would bar private companies from doing business in the state if they offer benefits or travel funds for employees s… [+3986 chars]",
      },
      {
        source: {
          id: null,
          name: "PRNewswire",
        },
        author: null,
        title:
          "BMW, Toyota Back on Top as America's Most-Shopped Vehicle Brands, According to Kelley Blue Book",
        description:
          "High gas prices lead more shoppers to consider traditional sedans and hybrids in the first quarter of 2022, likely benefiting Toyota. BMW and Mercedes stand out in the luxury report; Tesla drops in shopping consideration, but still delivers strong sales in Q1…",
        url:
          "https://www.prnewswire.com/news-releases/bmw-toyota-back-on-top-as-americas-most-shopped-vehicle-brands-according-to-kelley-blue-book-301553717.html",
        urlToImage:
          "https://mma.prnewswire.com/media/74966/kelley_blue_book_logo.jpg?p=facebook",
        publishedAt: "2022-05-24T12:30:00Z",
        content:
          "<ul><li>High gas prices lead more shoppers to consider traditional sedans and hybrids in the first quarter of 2022, likely benefiting Toyota.</li><li>BMW and Mercedes stand out in the luxury report; … [+7877 chars]",
      },
      {
        source: {
          id: null,
          name: "Seeking Alpha",
        },
        author: "ALT Perspective",
        title: "Apple Stock: The 'No-Brainer' Myth Is Broken",
        description:
          "Apple is down 24.4% from its ATH achieved early this year, a significant drop for a stock often touted as a 'no-brainer' buy. Read more about AAPL stock here.",
        url:
          "https://seekingalpha.com/article/4513871-apple-stock-no-brainer-myth-broken",
        urlToImage:
          "https://static.seekingalpha.com/cdn/s3/uploads/getty_images/516837044/image_516837044.jpg?io=getty-c-w750",
        publishedAt: "2022-05-24T12:30:00Z",
        content:
          "Justin Sullivan/Getty Images News\r\nMy main coverage in the past couple of years has been Chinese American Depositary Receipts [ADRs] as I reckoned my frequent travels to China (before the COVID-19 pa… [+13555 chars]",
      },
    ],
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
