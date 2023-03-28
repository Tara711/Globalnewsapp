import React, { useEffect, useState, useRef } from "react";
import News from "./News";

const NewsApp = () => {
  const [newsList, setNewsList] = useState([]);
  const [query, setQuery] = useState("tesla");
  const querInputRef = useRef(null);

  const apiKey = `5bdebfd73b8a4ab6843d83c954217fcf`;
  const apiUrl = `https://newsapi.org/v2/everything?q=${query}&from=2023-02-28&sortBy=publishedAt&apiKey=${apiKey}`;

  useEffect(() => {
    fetchData();
  }, [query]);
  const fetchData = async () => {
    try {
      const response = await fetch(apiUrl);
      const jsonData = await response.json();
      setNewsList(jsonData.articles);
    } catch (e) {
      console.log("The error is : ", e);
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const queryValue = querInputRef.current.value;
    setQuery(queryValue);
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" name="" id="" ref={querInputRef} />
        <input onClick={handleSubmit} type="submit" value="Submit" />
      </form>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 30%)",
          justifyContent: "space-between",
          rowGap: "20px",
        }}
      >
        {newsList.map((news) => (
          <News news={news} />
        ))}
      </div>
    </div>
  );
};

export default NewsApp;
