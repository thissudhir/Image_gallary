import React, { createContext, useEffect, useState } from "react";
import Navbar from "./Navbar";
import Search from "./Search";
import ImageCards from "./ImageCards";
import { Box, Typography } from "@mui/material";
import { SearchProvider, useSearch } from "./SearchContext";

export const ImageContext = createContext();

const Home = ({ mode, setMode }) => {
  const [searchImage, setSearchImage] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <SearchProvider>
      <Navbar setMode={setMode} mode={mode} setSearchImage={setSearchImage} />
      {loading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "10px",
          }}
        >
          <img
            src="https://assets10.lottiefiles.com/packages/lf20_cTXX7h.json"
            alt=""
          />
          <Typography>Loading some awesome Images...</Typography>
        </Box>
      ) : (
        <>
          <Search />
          <ImageCards searchImage={searchImage} />
        </>
      )}
    </SearchProvider>
  );
};

export default Home;
