import React, { useState, useEffect } from "react";
import Chart from "./components/Chart";
import Search from "./components/Search";
import Sidebar from "./components/Sidebar";

function App() {
  const [query, setQuery] = useState("");
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
  return (
    <div>
      <div className="top">
        <Search
          handleSearch={handleSearch}
          searchInput={searchInput}
          setSearchInput={setSearchInput}
        />
      </div>
      <div>
        <Sidebar
          searchHistory={searchHistory}
          starredList={starredList}
          handleStarClick={handleStarClick}
          handleHistoryClick={handleHistoryClick}
        />
        <Chart query={query} handleStarClick={handleStarClick} />
      </div>
    </div>
  );
}

export default App;
