import React, { useState } from "react";
import Navbar from "./Navbar";
import Search from "./Search";
import ImageCards from "./ImageCards";
import { Box } from "@mui/material";

const Home = ({ mode, setMode }) => {
  const [searchImage, setSearchImage] = useState("");
  return (
    <Box>
      <Navbar setMode={setMode} mode={mode} setSearchImage={setSearchImage} />
      <Search />
      <ImageCards searchImage={searchImage} setSearchImage={setSearchImage} />
    </Box>
  );
};

export default Home;
