import React from "react";
import Navbar from "./Navbar";
import Search from "./Search";
import ImageCards from "./ImageCards";
import { Box } from "@mui/material";

const Home = ({ mode, setMode }) => {
  return (
    <Box>
      {/* <Navbar setMode={setMode} mode={mode} /> */}
      <Search />
      <ImageCards />
    </Box>
  );
};

export default Home;
