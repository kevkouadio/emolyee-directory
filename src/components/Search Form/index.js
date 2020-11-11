import React from "react";

function SearchForm({ updadeFilter }) {
  const handleSearchTerm = (e) => {
    updadeFilter({name: e.target.value});
  };
  return (
    <form>
      <div className="form-group">
        <label htmlFor="search">Search:</label>
        <input
          onChange={handleSearchTerm}
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
