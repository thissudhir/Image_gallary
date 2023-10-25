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
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import {
  ImageSearchOutlined,
  MenuOutlined,
  SearchOutlined,
} from "@mui/icons-material";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  // background: "white",
  // color: "black",
});
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
  const [setsearchImage, setSetsearchImage] = useState("");
  const [imageListing, setImageListing] = useState([]);
  const [loading, setLoading] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };
  return (
    <AppBar sx={{ boxShadow: "none", position: "static" }}>
      <StyledToolbar>
        <Typography variant="h5">Image Gallary</Typography>
        <MenuOutlined
          sx={{ display: { xs: "block", sm: "none" } }}
          onClick={toggleDrawer}
        />
        {/* <ImageSearchOutlined sx={{ display: { xs: "block", sm: "none" } }} /> */}
        <Search sx={{ display: { xs: "none", sm: "block" } }}>
          <SearchOutlined />

          <InputBase placeholder="Search Images here" />
        </Search>
        <SearchOutlined sx={{ display: { xs: "block", sm: "none" } }} />
        <Icons sx={{ display: { xs: "none", sm: "flex" } }}>
          <Button disableElevation>Explore</Button>
          <Button>Collection</Button>
          <Button>Community</Button>
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
                  onChange={(e) => setMode(mode === "light" ? "dark" : "light")}
                />
              }
              label="Dark Mode"
              labelPlacement="start"
            />
          </ListItem>
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
