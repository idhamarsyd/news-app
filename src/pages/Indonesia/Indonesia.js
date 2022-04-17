import { useSelector, useDispatch } from "react-redux";
import { fetchNews } from "./../../redux/NewsReducer";
import React, { useEffect } from "react";
import NormalCard from "./../../components/molecules/NormalCard/NormalCard";
import Subheadline from "../../components/atoms/Subheadline/Subheadline";
import Button from "../../components/atoms/Button/Button";
import { addBookmark, updateBookmark } from "../../redux/BookmarksReducer";

const Indonesia = (props) => {
  const dispatch = useDispatch();
  const { data, isLoading } = useSelector((state) => state.news);
  const { bookmarks } = useSelector((state) => state.bookmarks);

  useEffect(() => {
    dispatch(
      fetchNews(
        "https://newsapi.org/v2/top-headlines?country=id&apiKey=58233f2dc8904715b39c728b86ba842e"
      )
    );
  }, [dispatch]);

  const checkItem = (query) => {
    const found = bookmarks.some((el) => el.title === query.title);
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

  return (
    <div>
      {isLoading ? (
        <div className="content" style={{ justifyContent: "center " }}>
          <Subheadline label="Loading..." />
        </div>
      ) : (
        renderNews()
      )}
    </div>
  );
};

export default Indonesia;
