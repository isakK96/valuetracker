import React, { useState } from "react";
import Chart from "./Chart";
import Search from "./Search";

function App() {
  const [query, setQuery] = useState("IBM");
  const [searchInput, setSearchInput] = useState("");
  function handleSearch(e) {
    e.preventDefault();
    setQuery(searchInput);
  }
  return (
    <div>
      <Search
        handleSearch={handleSearch}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
      />
      <Chart query={query} />
    </div>
  );
}

export default App;
