import React, { createContext, useState } from "react";
import Navbar from "./Navbar";
import Search from "./Search";
import ImageCards from "./ImageCards";
import { Box } from "@mui/material";
import { SearchProvider, useSearch } from "./SearchContext";

export const ImageContext = createContext();

const Home = ({ mode, setMode }) => {
  const [searchImage, setSearchImage] = useState("");
  // const { searchResults } = useSearch();

  // const [imageListing, setImageListing] = useState([]);
  return (
    <SearchProvider>
      <Navbar setMode={setMode} mode={mode} setSearchImage={setSearchImage} />
      {/* {searchResults.length > 0 ? ( */}
      {/* // Render search results */}
      {/* <ImageCards /> */}
      {/* ) : ( */}
      {/* // Render search component */}
      {/* <Search /> */}
      {/* )} */}
      <Search />
      <ImageCards searchImage={searchImage} />
    </SearchProvider>
  );
};

export default Home;
