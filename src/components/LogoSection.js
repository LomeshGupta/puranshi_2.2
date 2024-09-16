import React, { useState } from "react";
import { Box, Typography } from "@mui/material";

const ExperientialMarketingSection = () => {
  const [gradientPosition, setGradientPosition] = useState({ x: 50, y: 50 });

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    setGradientPosition({ x, y });
  };

  return (
    <Box
      onMouseMove={handleMouseMove}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
        backgroundColor: "#fff",
        position: "relative",
        px: 2,
        py: 4,
        overflow: "hidden",
      }}
    >
      {/* Background gradient follows the mouse */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          //   backgroundImage: `radial-gradient(circle at ${gradientPosition.x}% ${gradientPosition.y}%, rgba(255, 152, 0, 0.3), #333)`,
          zIndex: 1, // Background layer
        }}
      />

      {/* Titles */}
      <Typography
        variant="h1"
        sx={{
          fontSize: { xs: "2.5rem", md: "5rem" },
          fontWeight: 700,
          lineHeight: 1.2,
          color: "transparent",
          backgroundClip: "text",
          zIndex: 2, // Foreground layer
          position: "relative",
          backgroundImage: `radial-gradient(circle at ${gradientPosition.x}% ${gradientPosition.y}%, rgba(255, 152, 0, 0.3), #333)`,
          backgroundClip: "text",
          textTransform: "uppercase",
          fontFamily: "Lato, sans-serif",
        }}
      >
        Experiential
      </Typography>
      <Typography
        variant="h1"
        sx={{
          fontSize: { xs: "2.5rem", md: "5rem" },
          fontWeight: 700,
          lineHeight: 1.2,
          color: "transparent",
          backgroundClip: "text",
          zIndex: 2,
          position: "relative",
          backgroundImage: `radial-gradient(circle at ${gradientPosition.x}% ${gradientPosition.y}%, rgba(255, 152, 0, 0.3), #333)`,
          backgroundClip: "text",
          textTransform: "uppercase",
          fontFamily: "Lato, sans-serif",
        }}
      >
        Marketing
      </Typography>
      <Typography
        variant="h1"
        sx={{
          fontSize: { xs: "2.5rem", md: "5rem" },
          fontWeight: 700,
          lineHeight: 1.2,
          color: "transparent",
          backgroundClip: "text",
          zIndex: 2,
          position: "relative",
          backgroundImage: `radial-gradient(circle at ${gradientPosition.x}% ${gradientPosition.y}%, rgba(255, 152, 0, 0.3), #333)`,
          backgroundClip: "text",
          textTransform: "uppercase",
          fontFamily: "Lato, sans-serif",
        }}
      >
        Agency
      </Typography>

      {/* Subtitle */}
      <Typography
        variant="subtitle1"
        sx={{
          fontSize: { xs: "1.5rem", md: "2.5rem" },
          fontWeight: 400,
          color: "#757575",
          marginTop: 4,
          maxWidth: { xs: "90%", md: "60%" },
          fontFamily: "Open Sans, sans-serif",
          zIndex: 2,
          position: "relative",
        }}
      >
        Bringing your events to life where imagination Becomes Reality
      </Typography>
    </Box>
  );
};

export default ExperientialMarketingSection;
