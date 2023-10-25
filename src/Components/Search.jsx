// import styled from "@emotion/styled";
import { SearchOutlined } from "@mui/icons-material";
import { Box, InputBase, Typography, styled } from "@mui/material";
import React from "react";

const Searchbar = styled("div")(({ theme }) => ({
  background: "#FAFAFA",
  color: "lightgray",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "31%",
  display: "flex",
  alignItems: "center",
  //   justifyContent: "center",
}));

const Search = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        backgroundImage: "url('Mask Group.png')",
        backgroundSize: "cover",
        height: "40vh",
        marginBottom: "20px",
      }}
    >
      <Box>
        <Typography variant="h5" fontWeight={"bold"}>
          Download High Quality Image by Creators
        </Typography>

        <Typography variant="span">
          Over 2.4 million+ stock Images by our talented community
        </Typography>
      </Box>

      <Searchbar>
        <SearchOutlined sx={{ marginRight: "5px" }} />

        <InputBase placeholder="Search high resolution Images, categories, wallpapers" />
      </Searchbar>
    </Box>
  );
};

export default Search;
