import React, { useState, useMemo } from "react";
import { getSearchSuggestion } from "../Api";
import {
  Button,
  TextField,
  List,
  ListItem,
  ListItemText,
} from "@mui/material/";
import debounce from "lodash.debounce";

export default function Search({
  searchInput,
  setSearchInput,
  handleSearch,
  handleSuggestionClick,
}) {
  const [searchSuggestions, setSearchSuggestions] = useState([]);

  async function handleInput(e) {
    if (e.target.value.length > 1) {
      const result = await getSearchSuggestion(e.target.value);
      formatSearchResults(result.data["bestMatches"]);
    } else {
      setSearchSuggestions([]);
    }
  }

  function formatSearchResults(data) {
    const list = Object.values(data)
      .slice(0, 5)
      .map((d) => (
        <ListItem
          key={d["1. symbol"]}
          button
          onClick={() => {
            handleSuggestionClick(d);
            setSearchSuggestions([]);
          }}
        >
          <ListItemText
            sx={{ color: "primary.main" }}
            //classes={{ primary: "primary-text" }}
            primary={d["1. symbol"]}
            secondary={d["2. name"]}
          />
        </ListItem>
      ));
    setSearchSuggestions(list);
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSearch} className="search-form">
        <div className="search-wrapper">
          <TextField
            TextField
            id="outlined-basic"
            variant="outlined"
            type="text"
            name="searchInput"
            className=""
            autoComplete="off"
            sx={{ backgroundColor: "white" }}
            value={searchInput}
            onChange={(e) => {
              setSearchInput(e.target.value);
              handleInput(e);
            }}
          />
          <List
            sx={{ position: "absolute", marginTop: "3.5rem" }}
            className="suggestion-list"
          >
            {searchSuggestions}
          </List>
        </div>
        <Button variant="contained" type="submit" className="">
          Search
        </Button>
      </form>
    </div>
  );
}
