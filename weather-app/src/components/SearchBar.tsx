// src/components/SearchBar.tsx
import React from 'react';

// Importing the icons from react-icons library
import { AiOutlineSearch } from 'react-icons/ai';
import { SearchBarInterface } from '../services/SearchBar.js';

export const SearchBar: React.FC<SearchBarInterface> = ({ searchCity, setSearchCity, handleSearch }) => {
  return (
    <div className="searchArea">
      <input
        type="text"
        placeholder="Enter a city"
        value={searchCity}
        onChange={(e) => setSearchCity(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            handleSearch();
          }
        }
      }
      />
      <div className="searchCircle">
        <AiOutlineSearch className="searchIcon" onClick={() => handleSearch()} />
      </div>
    </div>
  );
};
