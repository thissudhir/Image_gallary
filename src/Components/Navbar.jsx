import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  styled,
  Typography,
  Box,
  InputBase,
  FormControlLabel,
  Switch,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { MenuOutlined, SearchOutlined } from "@mui/icons-material";
import { FetchImage } from "./Api";
import { useSearch } from "./SearchContext";

const StyledToolbar = styled(Toolbar)(({ theme, mode }) => ({
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: mode === "light" ? "white" : "dark-color",
  color: mode === "light" ? "black" : "dark-color",
}));
const Icons = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "20px",
  textDecoration: "none",
}));

const Search = styled("div")(({ theme }) => ({
  background: "#FAFAFA",
  color: "lightgray",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "20%",
  display: "flex",
  alignItems: "center",
}));

const Navbar = ({ mode, setMode }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const {
    searchImage,
    setSearchImage,
    imageListing,
    setImageListing,
    setSearchResults,
  } = useSearch();

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };
  const handleSearch = async () => {
    if (searchImage.trim() === "") {
      return;
    }
    try {
      const data = await FetchImage(searchImage);
      setImageListing(data);
      setSearchResults(data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <AppBar sx={{ boxShadow: "none", position: "static" }}>
        <StyledToolbar mode={mode}>
          <Typography variant="h5">Image Gallary</Typography>
          <SearchOutlined sx={{ display: { xs: "block", sm: "none" } }} />
          <MenuOutlined
            sx={{ display: { xs: "block", sm: "none" } }}
            onClick={toggleDrawer}
          />
          <Search sx={{ display: { xs: "none", sm: "flex" } }}>
            <SearchOutlined />
            <InputBase
              fullWidth
              value={searchImage}
              onChange={(e) => setSearchImage(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  handleSearch();
                }
              }}
              inputProps={{
                style: {
                  color: mode === "light" ? "gray" : "gray",
                },
                placeholder: "Search Images here",
              }}
            />
          </Search>
          <Icons sx={{ display: { xs: "none", sm: "flex" } }}>
            <Typography variant="button">Explore</Typography>
            <Typography>Collection</Typography>
            <Typography>Community</Typography>
          </Icons>

          <FormControlLabel
            value="Dark Mode"
            control={
              <Switch
                onChange={(e) => setMode(mode === "light" ? "dark" : "light")}
              />
            }
            label="Dark Mode"
            labelPlacement="start"
            sx={{ display: { xs: "none", sm: "flex" } }}
          />
        </StyledToolbar>
        <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
          <List>
            <ListItem button onClick={toggleDrawer}>
              <ListItemText primary="Explore" />
            </ListItem>
            <ListItem button onClick={toggleDrawer}>
              <ListItemText primary="Collection" />
            </ListItem>
            <ListItem button onClick={toggleDrawer}>
              <ListItemText primary="Community" />
            </ListItem>
            <ListItem button>
              <FormControlLabel
                // sx={{ display: { xs: "none", sm: "block" } }}
                value="start"
                control={
                  <Switch
                    onChange={(e) =>
                      setMode(mode === "light" ? "dark" : "light")
                    }
                  />
                }
                label="Dark Mode"
                labelPlacement="start"
              />
            </ListItem>
          </List>
        </Drawer>
      </AppBar>
    </>
  );
};

export default Navbar;
