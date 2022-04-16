import { useSelector, useDispatch } from "react-redux";
import { fetchNews } from "./../../redux/NewsReducer";
import React, { useEffect } from "react";
import NormalCard from "./../../components/molecules/NormalCard/NormalCard";
import Subheadline from "../../components/atoms/Subheadline/Subheadline";

const Indonesia = (props) => {
  const dispatch = useDispatch();
  const { data, isLoading } = useSelector((state) => state.news);

  useEffect(() => {
    dispatch(
      fetchNews(
        "https://newsapi.org/v2/top-headlines?country=id&apiKey=be565c8ee12649428443cad57a57bfe0"
      )
    );
  }, [dispatch]);
  // console.log(data);

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
