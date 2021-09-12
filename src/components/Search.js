import React from "react";

export default function Search({ searchInput, setSearchInput, handleSearch }) {
  return (
    <div>
      <form onSubmit={handleSearch} className="">
        <label className="" htmlFor="searchInput">
          {" "}
        </label>
        <input
          type="text"
          name="searchInput"
          className=""
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button type="submit" className="">
          Search
        </button>
      </form>
    </div>
  );
}
