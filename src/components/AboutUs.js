import React from "react";
import { Box, Typography } from "@mui/material";
import img1 from "../Assets/pexels-rdne-6923352.jpg";
import img2 from "../Assets/pexels-rdne-6923547.jpg";

const AboutSection = () => {
  return (
    <Box
      sx={{
        position: "relative",
        bgcolor: "white",
        overflow: { xs: "hidden", md: "visible" }, // Allow images to overflow outside the section
        p: { xs: 2, md: 4 },
        display: "flex",
        height: "500px",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-between",
        alignItems: "center",
        maxWidth: "100%",
      }}
    >
      {/* Left Section (Text) */}
      <Box sx={{ flex: 1, position: "relative", zIndex: 1, p: 2 }}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            mb: 1,
            display: "inline-block",
            color: "black",
          }}
        >
          About
        </Typography>
        <Typography
          variant="h3"
          sx={{
            fontWeight: "light",
            display: "inline-block",
            color: "#9C6F28",
            mb: 3,
            ml: 1,
          }}
        >
          Us
        </Typography>
        <Typography
          variant="body1"
          sx={{
            lineHeight: 1.8,
            color: "black",
          }}
        >
          Puranshi Events & Communications is a leading Integrated Marketing
          Consultancy in India, partnering with over 50 top brands. We
          specialize in designing and executing innovative marketing strategies,
          including integrated campaigns and event activations. Our unique
          approach combines strategy, creativity, and flawless execution,
          ensuring impactful results for our clients both locally and globally.
          With a commitment to excellence and seamless management, we tackle
          complex business challenges and drive growth for our partners.
        </Typography>
      </Box>

      {/* Right Section (Images) */}
      <Box sx={{ flex: 1, position: "relative", zIndex: 1 }}>
        <Box
          component="img"
          src={img1}
          alt="Image 1"
          sx={{
            width: "80%",
            height: "auto",
            borderRadius: "50%",
            position: "absolute",
            top: "0",
            right: "0",
            transform: "translate(50%, -20%)",
            zIndex: 1, // Ensure this image is above the text
            display: { xs: "none", md: "block" }, // Hide in mobile
          }}
        />
        <Box
          component="img"
          src={img2}
          alt="Image 2"
          sx={{
            width: "60%",
            height: "auto",
            borderRadius: "50%",
            position: "absolute",
            bottom: "0",
            right: "50%",
            transform: "translate(50%, 60%)",
            zIndex: 2, // Slightly behind the first image for layering effect
            display: { xs: "none", md: "block" }, // Hide in mobile
          }}
        />
      </Box>

      {/* Circular Bubbles */}
      <Box
        sx={{
          position: "absolute",
          width: "150px",
          height: "150px",
          backgroundColor: "#EBC75C",
          borderRadius: "50%",
          top: "10%",
          left: "-10%",
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          width: "80px",
          height: "80px",
          backgroundColor: "#6D705E",
          borderRadius: "50%",
          bottom: "10%",
          left: "10%",
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          width: "100px",
          height: "100px",
          backgroundColor: "#EBC75C",
          borderRadius: "50%",
          top: "50%",
          right: "-5%",
          zIndex: 0,
        }}
      />
    </Box>
  );
};

export default AboutSection;
