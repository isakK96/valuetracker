import React, { useState, useEffect } from "react";
import Chart from "./components/Chart";
import Search from "./components/Search";
import Sidebar from "./components/Sidebar";
import AppBar from "@mui/material/AppBar";

function App() {
  const [query, setQuery] = useState("AMZN");
  const [searchInput, setSearchInput] = useState("");
  const [searchHistory, setSearchHistory] = useState([]);
  const [starredList, setStarredList] = useState([]);

  function handleSearch(e) {
    e.preventDefault();
    setQuery(searchInput.toUpperCase());
  }

  function handleStarClick() {
    if (query && !starredList.includes(query)) {
      setStarredList([query, ...starredList]);
    } else if (query && starredList.includes(query)) {
      setStarredList(starredList.filter((item) => item !== query));
    }
  }

  useEffect(() => {
    handleHistory();
    console.log(searchHistory);
  }, [query]);

  // adds query to history if not already there / moves it to the start
  function handleHistory() {
    if (query) {
      if (searchHistory.includes(query)) {
        let newHistory = searchHistory.filter((item) => item !== query);
        newHistory.unshift(query);
        setSearchHistory(newHistory);
      } else {
        setSearchHistory([query, ...searchHistory]);
      }
    }
  }
  function handleHistoryClick(e) {
    setQuery(e.target.text);
  }
  function handleSuggestionClick(item) {
    setSearchInput("");
    setQuery(item["1. symbol"]);
  }
  return (
    <div>
      <AppBar position="static">
        <div className="top">
          <h1 className="title">ValueTracker</h1>
          <Search
            handleSearch={handleSearch}
            searchInput={searchInput}
            setSearchInput={setSearchInput}
            handleSuggestionClick={handleSuggestionClick}
          />
        </div>
      </AppBar>
      <div className="main">
        <Chart
          query={query}
          handleStarClick={handleStarClick}
          starredList={starredList}
        />
        <Sidebar
          searchHistory={searchHistory}
          starredList={starredList}
          handleStarClick={handleStarClick}
          handleHistoryClick={handleHistoryClick}
        />
      </div>
      <div className="footer"></div>
    </div>
  );
}

export default App;
