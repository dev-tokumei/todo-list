import React from "react";
import Search from "./Search";

const Navbar = ({ searchText, handleSearchChange }) => {
  return (
    <nav className="w-full bg-gray-900 h-[100px] py-8 px-3 border-b-[1px] border-emerald-50 shadow-md fixed z-10 ">
      <div className="w-full flex justify-between items-center">
        <h1 className="text-3xl font-bold text-white">TodoList ✍️</h1>
        <Search
          searchText={searchText}
          handleSearchChange={handleSearchChange}
        />
      </div>
    </nav>
  );
};

export default Navbar;
