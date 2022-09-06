import React from "react";
import "./Search.css";
export default function search({ searchQuery, getFilteredData }) {
  return (
    <div>
      <div className="overlay">
        <img src="assets/preloader.gif" alt="Preloader icon" />
      </div>
      <form action="/">
        <img src="assets/search-icon.svg" alt="Search Icon" />
        <input
          type="text"
          placeholder="Enter something"
          name="search-box"
          className="search-box"
          onChange={(e) => getFilteredData(e)}
          value={searchQuery}
        />
      </form>
    </div>
  );
}
