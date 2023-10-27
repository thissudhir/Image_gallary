import React, { createContext, useState, useContext } from "react";

const SearchContext = createContext();

export function useSearch() {
  return useContext(SearchContext);
}

export function SearchProvider({ children }) {
  const [searchImage, setSearchImage] = useState("");
  const [imageListing, setImageListing] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  return (
    <SearchContext.Provider
      value={{
        searchImage,
        setSearchImage,
        imageListing,
        setImageListing,
        searchResults,
        setSearchResults,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}
