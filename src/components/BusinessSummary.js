import React from "react";
import { Box, Grid, Typography, Card, CardMedia } from "@mui/material";
import businessImg from "../Assets/business.jpg";

export default function BusinessSummary() {
  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        padding: { xs: "20px", md: "100px" }, // Smaller padding for mobile
        position: "relative",
        overflow: "hidden", // Prevent scrollbars from overflowing shapes
      }}
    >
      <Grid container spacing={2}>
        {/* Left Section for Text */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              position: "relative",
              zIndex: 2, // Ensures text appears above background shapes
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontWeight: "bold",
                color: "#282828",
                fontSize: { xs: "36px", md: "48px" }, // Smaller font for mobile
              }}
            >
              Business
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontWeight: "bold",
                color: "#9c8530",
                fontSize: { xs: "36px", md: "48px" }, // Smaller font for mobile
              }}
            >
              Summary
            </Typography>
            <Box
              sx={{
                backgroundColor: "#fff5b1",
                padding: "20px",
                borderRadius: "15px",
                marginTop: "30px",
                maxWidth: { xs: "100%", md: "500px" }, // Full width on mobile
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  color: "#282828",
                  fontSize: { xs: "16px", md: "18px" }, // Adjusted font size
                  lineHeight: "1.6",
                }}
              >
                Puranshi Events & Communications is India’s top Integrated
                Marketing Consultancy, partnering with over 50 leading brands.
                We craft and execute innovative marketing strategies, including
                integrated campaigns and event activations, all through
                seamless, single-point management. By combining strategy,
                creativity, and execution, we solve complex business challenges
                and deliver impactful results globally.
              </Typography>
            </Box>
          </Box>
        </Grid>

        {/* Right Section for Image */}
        <Grid item xs={12} md={6}>
          <Card
            sx={{
              position: "relative",
              borderRadius: "20px",
              overflow: "hidden",
              boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
              height: { xs: "220px", md: "280px" }, // Smaller height for mobile
              width: { xs: "100%", md: "80%" }, // Full width on mobile
              zIndex: 2, // Ensures image appears above background shapes
            }}
          >
            <CardMedia
              component="img"
              height="auto"
              image={businessImg}
              alt="Fashion Items"
              sx={{ objectFit: "cover" }}
            />
          </Card>
        </Grid>
      </Grid>

      {/* Background Shapes */}
      <Box
        sx={{
          position: "absolute",
          top: { xs: "-50px", md: "100px" },
          left: { xs: "-50px", md: "-30px" },
          width: { xs: "150px", md: "200px" }, // Smaller for mobile
          height: { xs: "150px", md: "200px" },
          borderRadius: "50%",
          backgroundColor: "#f8d590",
          zIndex: 1,
        }}
      />
      {/* <Box
        sx={{
          position: "absolute",
          bottom: { xs: "-80px", md: "-50px" },
          left: { xs: "-50px", md: "-20px" },
          width: { xs: "200px", md: "250px" }, // Smaller for mobile
          height: { xs: "200px", md: "250px" },
          borderRadius: "50%",
          backgroundColor: "#f39b3f",
          zIndex: 1,
        }}
      /> */}
      <Box
        sx={{
          position: "absolute",
          top: { xs: "30px", md: "40px" },
          right: { xs: "-10px", md: "0px" },
          width: { xs: "80px", md: "100px" }, // Smaller for mobile
          height: { xs: "80px", md: "100px" },
          borderRadius: "50%",
          backgroundColor: "#888",
          zIndex: 1,
        }}
      />
    </Box>
  );
}
