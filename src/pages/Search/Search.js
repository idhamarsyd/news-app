import { useSelector } from "react-redux";
import React from "react";
import NormalCard from "./../../components/molecules/NormalCard/NormalCard";
import Subheadline from "../../components/atoms/Subheadline/Subheadline";

const SearchPage = (props) => {
  const { data, isLoading } = useSelector((state) => state.news);
  const { query } = useSelector((state) => state.search);

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

  const displaySearch = () => {
    if (query === "" || query === null) {
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
