import { useSelector, useDispatch } from "react-redux";
import React from "react";
import NormalCard from "./../../components/molecules/NormalCard/NormalCard";
import Subheadline from "../../components/atoms/Subheadline/Subheadline";
import { addBookmark, updateBookmark } from "../../redux/BookmarksReducer";

const SearchPage = (props) => {
  const dispatch = useDispatch();
  const { data, isLoading } = useSelector((state) => state.news);
  const { query } = useSelector((state) => state.search);
  const { bookmarks } = useSelector((state) => state.bookmarks);

  const checkItem = (q) => {
    const found = bookmarks.some((el) => el.title === q.title);
    return found;
  };

  const saveHandler = (item) => {
    if (!checkItem(item)) {
      dispatch(addBookmark(item));
    } else {
      const updateNews = bookmarks.filter((el) => el.title !== item.title);
      dispatch(updateBookmark(updateNews));
    }
  };

  const renderNews = () => {
    const renderResults = [];
    for (var i = 0; i < data.length; i += 3) {
      renderResults.push(
        <div className="content">
          {data.slice(i, i + 3).map((news) => (
            <NormalCard
              title={news.title}
              source={news.source.name}
              description={news.description}
              url={news.url}
              OnPress={() => saveHandler(news)}
              saveButtonStyle={
                bookmarks.some((el) => el.title === news.title)
                  ? {
                      text: "Saved",
                      backgroundColor: "#6666ff",
                      textColor: "#fafafa",
                    }
                  : {
                      text: "Save",
                    }
              }
            />
          ))}
        </div>
      );
    }
    return renderResults;
  };

  const displaySearch = () => {
    // if (query === "" || query === null) {
    if (query === null || query === "") {
      return (
        <div className="content" style={{ justifyContent: "center " }}>
          <Subheadline label="Masukkan kata kunci yang ingin kamu cari." />
        </div>
      );
    } else {
      if (isLoading) {
        return (
          <div className="content" style={{ justifyContent: "center " }}>
            <Subheadline label="Loading..." />
          </div>
        );
      } else {
        return renderNews();
      }
    }
  };

  return <div>{displaySearch()}</div>;
};

export default SearchPage;
