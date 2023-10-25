import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Avatar,
  Typography,
  IconButton,
  Box,
} from "@mui/material";
import { ThumbUpOutlined } from "@mui/icons-material";

const ImageCards = ({ image, username, name, likes }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" height="140" image={image} alt={name} />
      <CardContent>
        <Avatar
        // alt={username}
        // src={avatarImage}
        />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="h6" component="div">
            {/* {username} */} ahratjh
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {/* {name} */} fghj
          </Typography>
        </Box>
      </CardContent>
      <IconButton>
        <ThumbUpOutlined />
        {likes}
      </IconButton>
    </Card>
  );
};

export default ImageCards;
