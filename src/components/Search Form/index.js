import React from "react";

function SearchForm({ onSearch, searchTerm }) {
  
  return (
    <form>
      <div className="form-group">
        <label htmlFor="search">Search:</label>
        <input
          onChange={onSearch}
          value={searchTerm}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search For a name"
          id="search"
        />
      </div>
    </form>
  );
}

export default SearchForm;
