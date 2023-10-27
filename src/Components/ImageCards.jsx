import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  makeStyles,
  Avatar,
  Box,
  Modal,
} from "@mui/material";
import { useSearch } from "./SearchContext";
import { ThumbUpOutlined } from "@mui/icons-material";

const ImageCards = () => {
  const [open, setOpen] = useState(false);
  const { searchImage, setSearchImage, imageListing, setImageListing } =
    useSearch();
  const handleclick = () => {
    console.log("clikced");
  };
  // console.log(imageListing);
  return (
    <Grid container spacing={2}>
      {imageListing.map((listing) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={listing.id}>
          <Card>
            <CardMedia
              component="img"
              height={"auto"}
              sx={{ backgroundSize: "cover" }}
              image={listing.urls.full}
              onClick={handleclick}
              title={listing.alt_description}
            />
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: "2px",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  // flexDirection: "row",
                  gap: "8px",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Avatar
                  height="40px"
                  width="40px"
                  src={listing.user.profile_image.medium}
                />
                <Box>
                  <Typography variant="h6" component="div">
                    {listing.user.username}
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    @{listing.user.social.instagram_username}
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "8px",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <ThumbUpOutlined />
                <Typography>{listing.likes}</Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ImageCards;
