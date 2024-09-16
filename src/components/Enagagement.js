import React from "react";
import { Box, Typography } from "@mui/material";
// import img1 from "../Assets/woman-in-yellow.jpg"; // Add your image path here

const EngagementStats = () => {
  return (
    <Box
      sx={{
        position: "relative",
        bgcolor: "white",
        overflow: "visible",
        p: { xs: 2, md: 4 },
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-between",
        alignItems: "center",
        height: "500px",
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
          Engagement
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
          Stats
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
          <Box
            sx={{
              width: "60px",
              height: "60px",
              backgroundColor: "#6D705E",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mr: 2,
            }}
          >
            <Typography variant="h6">💡</Typography>
          </Box>
          <Typography
            variant="body1"
            sx={{
              lineHeight: 1.8,
              color: "black",
            }}
          >
            Puranshi Events & Communications has a proven track record of high
            engagement, with successful collaborations on over 50 major brands.
            Our integrated campaigns and event activations consistently achieve
            strong participation and interaction, driving measurable business
            outcomes. Our focus on strategic creativity and precise execution
            ensures that every project resonates deeply with target audiences,
            leading to sustained engagement and brand loyalty.
          </Typography>
        </Box>
      </Box>

      {/* Right Section (Stats) */}
      <Box sx={{ flex: 1, position: "relative", zIndex: 1, p: 2 }}>
        <Box
          sx={{
            backgroundColor: "#FFF7C5",
            borderRadius: "10px",
            p: 2,
            mb: 2,
            boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
          }}
        >
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", color: "#9C6F28" }}
          >
            50+ Clients
          </Typography>
        </Box>
        <Box
          sx={{
            backgroundColor: "#FFF7C5",
            borderRadius: "10px",
            p: 2,
            mb: 2,
            boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
          }}
        >
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", color: "#9C6F28" }}
          >
            350+ Campaigns
          </Typography>
        </Box>
        <Box
          sx={{
            backgroundColor: "#FFF7C5",
            borderRadius: "10px",
            p: 2,
            boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
          }}
        >
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", color: "#9C6F28" }}
          >
            5,00,000+ Customer Engagements
          </Typography>
        </Box>
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
          top: "30%",
          right: "10%",
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          width: "60px",
          height: "60px",
          backgroundColor: "#EBC75C",
          borderRadius: "50%",
          bottom: "10%",
          left: "5%",
          zIndex: 0,
        }}
      />
    </Box>
  );
};

export default EngagementStats;
