import * as React from "react";
import useFetchData from "./useFetchData";
import NewsArticle from "./components/news-article";
import { NewsWrapper, Box } from "./components/common-components";
import NavBar from "./components/navbar";

const URL = "https://newsapi.org/v2/top-headlines?country=us&category=business";
const API_KEY = "1b0cecd1146647278b0fbe0a787e6800";

export default function App() {
  const { data, setData, error, isLoading } = useFetchData(
    URL + "&apiKey=" + API_KEY
  );
  const [isBookmarkedSelected, setIsBookmarkedSelected] = React.useState(false);
  const onClickBookMark = (uniqueId) => {
    let dataIndex = data.findIndex((ele) => ele.publishedAt === uniqueId);
    let updatedItem = {
      ...data[dataIndex],
      bookmarked: !data[dataIndex].bookmarked,
    };
    setData([
      ...data.slice(0, dataIndex),
      updatedItem,
      ...data.slice(dataIndex + 1),
    ]);
  };

  const displayNews = React.useMemo(() => {
    if (isBookmarkedSelected) {
      return data.filter((ele) => ele.bookmarked);
    } else {
      return data;
    }
  }, [data, isBookmarkedSelected]);

  return (
    <Box>
      <NavBar
        onClickNews={() => setIsBookmarkedSelected(false)}
        onClickBookMark={() => setIsBookmarkedSelected(true)}
      />
      <NewsWrapper>
        {displayNews &&
          displayNews.map((ele, index) => {
            let uniqueId = ele.publishedAt;
            return (
              <NewsArticle
                key={uniqueId}
                onClickBookMark={() => onClickBookMark(uniqueId)}
                data={ele}
              />
            );
          })}
      </NewsWrapper>
    </Box>
  );
}
