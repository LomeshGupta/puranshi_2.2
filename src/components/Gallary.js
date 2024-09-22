import React, { useState } from "react";
import {
  Grid,
  Box,
  Button,
  Dialog,
  DialogContent,
  Typography,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import event1 from "../Assets/event1.jpg";

const imagesData = [
  { src: event1, description: "Description for Image 1" },
  { src: event1, description: "Description for Image 2" },
  { src: event1, description: "Description for Image 3" },
  { src: event1, description: "Description for Image 4" },
  { src: event1, description: "Description for Image 5" },
  { src: event1, description: "Description for Image 6" },
  { src: event1, description: "Description for Image 7" },
  { src: event1, description: "Description for Image 8" },
  { src: event1, description: "Description for Image 9" },
  { src: event1, description: "Description for Image 10" },
  { src: event1, description: "Description for Image 11" },
  { src: event1, description: "Description for Image 12" },
];

const PhotoGallery = () => {
  const [displayedImages, setDisplayedImages] = useState(6); // Show 6 images initially
  const [openModal, setOpenModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Mobile view detection

  // Load more images function
  const handleLoadMore = () => {
    setDisplayedImages((prev) => prev + 6); // Load 6 more images
  };

  // Open the modal and set the selected image
  const handleImageClick = (image) => {
    setSelectedImage(image);
    setOpenModal(true);
  };

  // Close the modal
  const handleClose = () => {
    setOpenModal(false);
    setSelectedImage(null);
  };

  return (
    <Box
      sx={{
        mt: 8,
        pt: 10,
        backgroundColor: "#fff",
        mx: "auto",
        px: 5, // Padding for left and right
        pb: 5,
      }}
    >
      <Typography variant="h2" gutterBottom>
        Our <spna style={{ color: "#996515", fontWeight: "500" }}>Work</spna>
      </Typography>
      <Grid container spacing={3}>
        {imagesData.slice(0, displayedImages).map((image, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box
              component="img"
              src={image.src}
              alt={`Image ${index + 1}`}
              sx={{
                width: "100%", // 100% width for responsive layout
                height: "250px", // Fixed height
                objectFit: "cover", // Maintain aspect ratio, crop if necessary
                cursor: "pointer",
                borderRadius: "8px",
              }}
              onClick={() => handleImageClick(image)}
            />
          </Grid>
        ))}
      </Grid>

      {displayedImages < imagesData.length && (
        <Box sx={{ textAlign: "center", marginTop: "20px" }}>
          <Button
            variant="contained"
            onClick={handleLoadMore}
            sx={{
              backgroundColor: "#996515",
              "&:hover": {
                backgroundColor: "#99220",
              },
            }}
          >
            Load More
          </Button>
        </Box>
      )}

      {/* Dialog for image and description */}
      {selectedImage && (
        <Dialog
          open={openModal}
          onClose={handleClose}
          maxWidth="lg" // Increased the width of the popup
          fullWidth
        >
          <IconButton
            edge="end"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
            sx={{ position: "absolute", top: 8, right: 8 }}
          >
            <CloseIcon />
          </IconButton>
          <DialogContent
            sx={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row", // Vertical on mobile, horizontal on desktop
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              component="img"
              src={selectedImage.src}
              alt="Selected"
              sx={{
                width: isMobile ? "100%" : "50%", // Full width for mobile, half for desktop
                height: "auto", // Keep height dynamic
                borderRadius: "8px",
                mb: isMobile ? 2 : 0, // Add bottom margin on mobile
              }}
            />
            <Box
              sx={{
                marginLeft: isMobile ? "0" : "20px", // No margin for mobile, left margin for desktop
                textAlign: isMobile ? "center" : "left", // Center text on mobile
                width: isMobile ? "100%" : "50%",
              }}
            >
              <Typography variant="h6">Image Description</Typography>
              <Typography>{selectedImage.description}</Typography>
            </Box>
          </DialogContent>
        </Dialog>
      )}
    </Box>
  );
};

export default PhotoGallery;
