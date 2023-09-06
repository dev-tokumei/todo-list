import React from "react";

const Search = ({ searchText, handleSearchChange }) => {
  const handleSearch = (e) => {
    handleSearchChange(e.target.value);
  };

  return (
    <div className="w-[400px]">
      <input
        value={searchText}
        onKeyDown={handleSearch}
        type="search"
        placeholder="Поиск задач..."
        onChange={handleSearch}
        className="bg-gray-800 text-white pl-2 pr-2 h-[40px] w-full rounded-md"
      />
    </div>
  );
};

export default Search;
