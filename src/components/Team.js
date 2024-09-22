import React from "react";
import { Box, Typography, Avatar, Grid, Paper, Divider } from "@mui/material";
import founderImg from "../Assets/Founder.jpg";
import poonam from "../Assets/Poonam.jpg";

// Data for Founder and Team Members
const founderInfo = {
  name: "Raju Chatterjee",
  title: "Founder & Marketing Operations Leader",
  description: `
    Raju Chatterjee is a seasoned Marketing Operations Leader with an MBA and an LLB degree. He has extensive experience with Asia's leading communication agencies, including the DDB Mudra Group and Epoch World Group. Raju excels in strategic planning, campaign execution, data-driven decision-making, and performance analysis.
    
    His deep understanding of the dynamic Asian marketing landscape has driven successful campaigns and innovation. Known for strategic acumen and operational excellence, Raju enhances brand presence and market share.
    
    Raju's tenure at top agencies has given him a deep knowledge of industry best practices and trends. His blend of creative thinking and analytical precision makes him a valuable marketing asset.
  `,
  img: founderImg, // replace with actual founder image path
};

const teamMembers = [
  {
    name: "Poonam Rimal",
    title: "Lead Commercial",
    img: poonam, // replace with actual image path
  },
  {
    name: "Kavita Chaudhary",
    title: "Lead Client Servicing",
    img: "path/to/image2", // replace with actual image path
  },
  {
    name: "Deepak Poudal",
    title: "Lead Operations",
    img: "path/to/image3", // replace with actual image path
  },
  {
    name: "Ashaq Jaffri",
    title: "Lead Creative",
    img: "path/to/image4", // replace with actual image path
  },
];

const OurTeam = () => {
  return (
    <Box
      padding={{ md: 10 }}
      paddingBottom={{ xs: 4 }}
      sx={{ backgroundColor: "white" }}
    >
      <Box sx={{ bgcolor: "#fefdfb", mt: 15, px: 4 }}>
        {/* Founder Section */}
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          spacing={4}
          sx={{ mb: 8 }}
        >
          <Grid item xs={12} md={4}>
            <Avatar
              alt={founderInfo.name}
              src={founderInfo.img}
              sx={{
                width: "100%",
                height: "auto",
                borderRadius: "16px",
                border: "5px solid #fffff5",
              }}
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                color: "#c5a341",
                mb: 2,
                textAlign: "center",
              }}
            >
              {founderInfo.name}
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                color: "black",
                textAlign: "center",
                mb: 2,
              }}
            ></Typography>
            <Typography
              variant="body1"
              sx={{ color: "#8a7f68", textAlign: "center" }}
            >
              {founderInfo.title}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#4a4a4a",
                mt: 2,
                whiteSpace: "pre-line",
                textAlign: "justify",
              }}
            >
              {founderInfo.description}
            </Typography>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4 }} />

        {/* Team Section */}
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            color: "#c5a341",
            mb: 4,
            textAlign: "center",
          }}
        >
          Our Team
        </Typography>
        <Grid container justifyContent="center" spacing={4}>
          {teamMembers.map((member, index) => (
            <Grid item xs={12} md={3} key={index}>
              <Paper
                elevation={3}
                sx={{
                  p: 2,
                  borderRadius: "16px",
                  textAlign: "center",
                  transition: "0.3s",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: "0 12px 24px rgba(0, 0, 0, 0.1)",
                  },
                }}
              >
                <Avatar
                  alt={member.name}
                  src={member.img}
                  sx={{
                    width: "100%",
                    height: "250px",
                    borderRadius: "16px",
                    mb: 2,
                    border: "5px solid #fffff5", // Outer border color
                  }}
                />
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  {member.name}
                </Typography>
                <Typography variant="body1" sx={{ color: "#8a7f68" }}>
                  {member.title}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default OurTeam;
