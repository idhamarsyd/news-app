import { useSelector, useDispatch } from "react-redux";
import React, { useEffect } from "react";
import NormalCard from "./../../components/molecules/NormalCard/NormalCard";
import Subheadline from "../../components/atoms/Subheadline/Subheadline";
import { updateBookmark } from "../../redux/BookmarksReducer";

const Bookmarks = (props) => {
  const dispatch = useDispatch();
  const { bookmarks } = useSelector((state) => state.bookmarks);

  const deleteHandler = (item) => {
    const updateNews = bookmarks.filter((el) => el.title !== item.title);
    dispatch(updateBookmark(updateNews));
    // array.splice(index, 1); // 2nd parameter means remove one item only
  };

  const renderNews = () => {
    const renderResults = [];
    for (var i = 0; i < bookmarks.length; i += 3) {
      renderResults.push(
        <div className="content">
          {bookmarks.slice(i, i + 3).map((news) => (
            <NormalCard
              title={news.title}
              source={news.source.name}
              description={news.description}
              url={news.url}
              OnPress={() => deleteHandler(news)}
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

  return <div>{renderNews()}</div>;
};

export default Bookmarks;
