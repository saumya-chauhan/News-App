import React from "react";
import { Box, Typography, Img, BookMarkIcon } from "./common-components";

const NewsArticle = ({ data, onClickBookMark }) => {
  return (
    <Box borderRadius="8px" border="1px solid #d7cdcd" padding="12px">
      <Box marginBottom="8px" display="flex" justifyContent="space-between">
        <Typography
          dangerouslySetInnerHTML={{ __html: data.title }}
          variant="h2"
        />
        <BookMarkIcon
          isActive={data.bookmarked}
          onClick={onClickBookMark}
          xmlns="http://www.w3.org/2000/svg"
          height="40"
          viewBox="0 96 960 960"
          width="40"
        >
          <path d="M338.974 829.564 480 744.641l141.026 85.923-37.205-160.769 124.128-107.641-163.59-14.487L480 396.231l-64.359 150.436-163.59 14.487 124.128 108.231-37.205 160.179Zm-75.972 104.894 57.307-246.766L128.85 521.77l252.613-21.922L480 267.158l98.537 232.69L831.15 521.77 639.691 687.692l57.307 246.766L480 803.537 263.002 934.458ZM480 623.436Z" />
        </BookMarkIcon>
      </Box>
      <Typography
        dangerouslySetInnerHTML={{ __html: data.description }}
        variant="etext1"
        marginBottom="8px"
      />
      <Typography variant="etext2">
        Published by {data.source.name} on{" "}
        {new Date(data.publishedAt).toLocaleString()}
      </Typography>
      <Box display="flex" padding="8px 0">
        <Img src={data.urlToImage} alt="news article" />
      </Box>
      <Typography
        dangerouslySetInnerHTML={{ __html: data.content }}
        variant="etext1"
        marginBottom="8px"
      />
      <a href={data.url} target="_blank" rel="noopener noreferrer">
        Read more
      </a>
    </Box>
  );
};

export default NewsArticle;
