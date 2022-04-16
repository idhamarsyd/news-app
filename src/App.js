import "./App.css";
import Headline from "./components/atoms/Headline/Headline";
import NavBar from "./components/molecules/NavBar";
import Search from "./components/atoms/Search/Search";
import Button from "./components/atoms/Button/Button";
import Indonesia from "./pages/Indonesia/Indonesia";
import Programming from "./pages/Programming/Programming";
import Covid from "./pages/COVID/COVID";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateQuery } from "./redux/SearchReducer";
import { fetchNews } from "./redux/NewsReducer";
import React from "react";
import SearchPage from "./pages/Search/Search";

function App() {
  const dispatch = useDispatch();
  const { query } = useSelector((state) => state.search);

  // useEffect(() => {
  //   dispatch(fetchNews());
  // }, [dispatch]);

  const navigate = useNavigate();
  const location = useLocation();

  const onChangeHandler = (e) => {
    dispatch(updateQuery(e.target.value));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (location.pathname !== "/search") {
        navigate("/search");
      }
      dispatch(
        fetchNews(
          `https://newsapi.org/v2/everything?qInTitle=${query}&from=2022-03-16&sortBy=popularity&apiKey=be565c8ee12649428443cad57a57bfe0`
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
          <Button label="Bookmarks" />
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Indonesia />} />
        <Route path="/programming" element={<Programming />} />
        <Route path="/covid" element={<Covid />} />
        <Route path="/search" element={<SearchPage keywords={query} />} />
      </Routes>
    </div>
  );
}

export default App;
