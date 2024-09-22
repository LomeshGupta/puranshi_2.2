import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import MG1 from "../Assets/marketingGoals1.jpg";
import MG2 from "../Assets/marketingGoals2.jpg";

export default function MarketingGoals() {
  return (
    <Box
      sx={{
        backgroundColor: "#fff", // Light background for the entire section
        padding: { xs: "20px", md: "40px" },
        position: "relative",
        overflow: "hidden",
        textAlign: "center",
      }}
    >
      {/* Left Image (Quarter Circle Clip) */}
      <Box
        component="img"
        src={MG1}
        alt="Left Model Image"
        sx={{
          width: { xs: "260px", md: "500px" }, // Image size
          position: "absolute",
          top: { xs: "-40px", md: "-50px" }, // Adjust position
          left: { xs: "-40px", md: "-80px" }, // Adjust position
          zIndex: 1,
          clipPath: "polygon(0 0, 100% 0, 0 100%)", // Clips the image to 1/4 circle
          borderRadius: "100%", // Ensures it has the circular shape
        }}
      />

      {/* Title Section with Background Circle */}
      <Box
        pt={10}
        sx={{
          display: "flex",
          justifyContent: "center",
          position: "relative",
          marginBottom: "20px",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "36px", md: "48px" },
            fontWeight: "bold",
            color: "#000",
            zIndex: 2, // Ensure text appears on top of the background
          }}
        >
          Marketing
        </Typography>
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "36px", md: "48px" },
            fontWeight: "bold",
            color: "#9c8530",
            marginLeft: "10px",
            zIndex: 2,
          }}
        >
          Goals
        </Typography>
      </Box>

      {/* Description Section */}
      <Typography
        variant="body1"
        sx={{
          color: "#333",
          fontSize: { xs: "16px", md: "18px" },
          marginBottom: "40px",
          zIndex: 2,
          position: "relative",
        }}
      >
        Our marketing goals are to enhance brand visibility, drive customer
        engagement, boost ROI, and continuously innovate to keep our clients
        competitive.
      </Typography>

      {/* Goal Boxes Section */}
      <Grid
        container
        spacing={2}
        sx={{ marginTop: "20px", zIndex: 2, position: "relative" }}
      >
        <Grid item xs={12} md={6}>
          <Box
            elevation={0}
            sx={{
              backgroundColor: "transparent",
              borderRadius: "15px",
              padding: "20px",
              boxShadow: "0px",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                color: "#9c8530",
                fontWeight: "bold",
                marginBottom: "10px",
              }}
            >
              Enhance Brand Visibility
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "#555", fontSize: "16px" }}
            >
              Increase the visibility and recognition of our clients' brands
              through targeted and strategic marketing initiatives.
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box
            sx={{
              backgroundColor: "#f7f2dd",
              borderRadius: "15px",
              padding: "20px",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                color: "#9c8530",
                fontWeight: "bold",
                marginBottom: "10px",
              }}
            >
              Drive Customer Engagement
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "#555", fontSize: "16px" }}
            >
              Foster deeper connections with target audiences by creating
              engaging and memorable experiences across all touchpoints.
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box
            sx={{
              backgroundColor: "#f7f2dd",
              borderRadius: "15px",
              padding: "20px",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                color: "#9c8530",
                fontWeight: "bold",
                marginBottom: "10px",
              }}
            >
              Boost ROI
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "#555", fontSize: "16px" }}
            >
              Optimize marketing efforts to deliver measurable results and
              maximize return on investment for our clients.
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box
            sx={{
              backgroundColor: "transparent",
              borderRadius: "15px",
              padding: "20px",
              boxShadow: "0px",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                color: "#9c8530",
                fontWeight: "bold",
                marginBottom: "10px",
              }}
            >
              Innovate Continuously
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "#555", fontSize: "16px" }}
            >
              Stay ahead of industry trends by continuously exploring new ideas,
              technologies, and strategies to keep our clients competitive.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
