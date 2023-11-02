import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Avatar,
  Box,
  Modal,
  Button,
} from "@mui/material";
import { useSearch } from "./SearchContext";
import { ThumbUpOutlined } from "@mui/icons-material";
import { FetchRandomImage } from "./Api";

const ImageCards = () => {
  const [open, setOpen] = useState(false); // State for the modal
  const [selectedImage, setSelectedImage] = useState(null);
  const [randomImage, setRandomImage] = useState(null);
  const { searchImage, setSearchImage, imageListing, setImageListing } =
    useSearch();

  const handleOpenModal = (image) => {
    setSelectedImage(image);
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  useEffect(() => {
    FetchRandomImage() // Replace with your function to fetch a random image
      .then((data) => {
        setRandomImage(data);
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  if (!searchImage) {
    return (
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          {randomImage && (
            <Card>
              <CardMedia
                component="img"
                height={"auto"}
                sx={{ backgroundSize: "cover" }}
                image={randomImage.urls.full}
                onClick={() => handleOpenModal(randomImage)}
                title={randomImage.alt_description}
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
                    gap: "8px",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Avatar src={randomImage.user.profile_image.medium} />
                  <Box>
                    <Typography variant="h6" component="div">
                      {randomImage.user.username}
                    </Typography>
                    {randomImage.user.social.instagram_username && (
                      <Typography variant="subtitle1" color="textSecondary">
                        @{randomImage.user.social.instagram_username}
                      </Typography>
                    )}
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
                  <Typography>{randomImage.likes}</Typography>
                </Box>
              </CardContent>
            </Card>
          )}
        </Grid>
      </Grid>
    );
  }
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
              onClick={() => handleOpenModal(listing)}
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
                  gap: "8px",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Avatar src={listing.user.profile_image.medium} />
                <Box>
                  <Typography variant="h6" component="div">
                    {listing.user.username}
                  </Typography>
                  {listing.user.social.instagram_username && (
                    <Typography variant="subtitle1" color="textSecondary">
                      @{listing.user.social.instagram_username}
                    </Typography>
                  )}
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
      <Modal
        open={open}
        onClose={handleCloseModal}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Box width={"auto"} height={"auto"}>
          {selectedImage && (
            <Card>
              <CardMedia
                component="img"
                height={300}
                width={"auto"}
                sx={{ backgroundSize: "cover" }}
                image={selectedImage.urls.full}
                title={selectedImage.alt_description}
              />
              <CardContent>
                <Box>
                  <Avatar src={selectedImage.user.profile_image.medium} />
                  <Box>
                    <Typography variant="h6" component="div">
                      {selectedImage.user.username}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                      @{selectedImage.user.social.instagram_username}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                      @{selectedImage.user.social.instagram_username}
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <ThumbUpOutlined />
                  <Typography>{selectedImage.likes}</Typography>
                </Box>
              </CardContent>
            </Card>
          )}
          <Button variant="contained" onClick={handleCloseModal}>
            Close
          </Button>
        </Box>
      </Modal>
    </Grid>
  );
};

export default ImageCards;
