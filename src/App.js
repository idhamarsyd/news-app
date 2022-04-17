import "./App.css";
import Headline from "./components/atoms/Headline/Headline";
import NavBar from "./components/molecules/NavBar";
import Search from "./components/atoms/Search/Search";
import Link from "./components/atoms/Link/Link";
import Indonesia from "./pages/Indonesia/Indonesia";
import Programming from "./pages/Programming/Programming";
import Covid from "./pages/COVID/COVID";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateQuery } from "./redux/SearchReducer";
import { fetchNews } from "./redux/NewsReducer";
import React, { useEffect } from "react";
import SearchPage from "./pages/Search/Search";
import Bookmarks from "./pages/Bookmarks/Bookmarks";

function App() {
  const dispatch = useDispatch();
  const { query } = useSelector((state) => state.search);

  // useEffect(() => {
  //   dispatch(fetchNews());
  // }, [dispatch]);

  const navigate = useNavigate();
  const location = useLocation();

  const onChangeHandler = (e) => {
    if (e.target.value.length === 0) {
      dispatch(updateQuery(null));
    } else {
      dispatch(updateQuery(e.target.value));
    }
    console.log(encodeURIComponent(query));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (location.pathname !== `/search/${query}`) {
        navigate(`/search/${query}`);
      }
      dispatch(
        fetchNews(
          `https://newsapi.org/v2/everything?qInTitle=${query}&from=2022-03-17&apiKey=58233f2dc8904715b39c728b86ba842e`
        )
      );
    }
  };

  return (
    <div className="App">
      <div className="header">
        <div className="left-header">
          <Headline label="Top News" />
          <NavBar />
        </div>
        <div className="right-header">
          <Search OnChange={onChangeHandler} OnEnter={handleKeyDown} />
          <Link label="Bookmarks" url="/bookmarks" />
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Indonesia />} />
        <Route path="/programming" element={<Programming />} />
        <Route path="/covid" element={<Covid />} />
        <Route
          path={`/search/${query}`}
          element={<SearchPage keywords={query} />}
        />
        <Route path="/bookmarks" element={<Bookmarks />} />
      </Routes>
    </div>
  );
}

export default App;
