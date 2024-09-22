import React from "react";
import { Box, Typography } from "@mui/material";
import BgImg from "../Assets/Aboutus.jpg";

const WhoWeAre = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          flex: 0.5,
          position: "relative",
          overflow: "hidden",
          bgcolor: "white", // Set white background color
        }}
      >
        <Box
          component="img"
          src={BgImg}
          alt="Background"
          sx={{
            width: "100%", // Extend slightly beyond the box
            height: "80%",
            objectFit: "cover",
            borderRadius: "0 100% 100% 0", // Create the half-circle effect
            position: "absolute",
            left: "-50%", // Shift the image to the left
            top: "16%",
          }}
        />
      </Box>
      <Box
        sx={{
          flex: 0.8,
          padding: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          bgcolor: "rgba(255, 255, 255, 0.8)", // Optional overlay for readability
        }}
      >
        <Typography
          variant="h4"
          sx={{ color: "rgba(255, 152, 0, 1)", fontWeight: "bold" }}
        >
          Who We Are
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: "rgba(0, 0, 0, 0.7)", marginTop: 2 }}
        >
          We are India’s leading Integrated Marketing Consultancy, and we’ve had
          the pleasure of partnering with over 50 top brands.
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: "rgba(0, 0, 0, 0.7)", marginTop: 2 }}
        >
          Our specialty lies in crafting and executing innovative marketing
          strategies that drive real business growth. We handle everything from
          integrated campaigns to event activations, all through a streamlined,
          single-point management system.
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: "rgba(0, 0, 0, 0.7)", marginTop: 2 }}
        >
          Our goal is to be more than just a service provider—we aim to be a
          trusted partner who helps our clients achieve their business
          objectives.
        </Typography>
      </Box>
    </Box>
  );
};

export default WhoWeAre;
